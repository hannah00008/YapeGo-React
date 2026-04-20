import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; // <-- Usa la 'db' que exportaste
import { 
  collection, 
  addDoc, 
  query, 
  onSnapshot, 
  orderBy, 
  serverTimestamp,
  where // Para filtrar los comentarios por página/producto
} from "firebase/firestore";

// Nombre de la colección en Firestore
const COMMENTS_COLLECTION = "productComments";

// Componente para mostrar un solo comentario
const CommentItem = ({ comment }) => (
    <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
        <p className="font-semibold text-gray-900 mb-1 flex items-center">
            <span className="text-gray-600 mr-2">👤</span> 
            {comment.author}
        </p>
        <p className="text-gray-700 mb-2">{comment.text}</p>
        <p className="text-xs text-gray-500 text-right">
            Publicado: {comment.createdAt?.toDate ? comment.createdAt.toDate().toLocaleString() : 'Justo ahora'}
        </p>
    </div>
);


const CommentSection = ({ productId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(true);

    // **********************************************
    // LÓGICA DE LECTURA (READ - En tiempo real con filtro)
    // **********************************************
    useEffect(() => {
        const commentsRef = collection(db, COMMENTS_COLLECTION);
        
        // Crea una consulta para el productId específico (ej: "sección-mujer")
        const q = query(
          commentsRef, 
          where("productId", "==", productId), 
          orderBy("createdAt", "desc")
        );
        
        // onSnapshot: Escucha los cambios en tiempo real
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedComments = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setComments(fetchedComments);
            setLoading(false);
        }, (error) => {
            console.error("Error al cargar comentarios: ", error);
            setLoading(false);
        });

        return () => unsubscribe(); // Limpieza para evitar errores de memoria
    }, [productId]);
    
    // **********************************************
    // LÓGICA DE ESCRITURA (CREATE - Añadir comentario)
    // **********************************************
    const handleAddComment = async (e) => {
        e.preventDefault();
        
        if (!newComment.trim() || !author.trim()) {
            alert("Completa tu nombre y el comentario.");
            return;
        }

        try {
            await addDoc(collection(db, COMMENTS_COLLECTION), {
                productId: productId, // Clave para el filtro
                author: author.trim(),
                text: newComment.trim(),
                createdAt: serverTimestamp(), // Marca de tiempo de Firebase
            });

            setNewComment('');
            setAuthor('');
            
        } catch (e) {
            console.error("Error al añadir el comentario: ", e);
            alert("Error al guardar el comentario. Revisa las reglas de seguridad.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-xl rounded-xl mt-12">
            <h2 className="text-3xl font-extrabold mb-8 text-gray-900 border-b pb-4">
                Comentarios
            </h2>

            {/* Formulario para añadir nuevo comentario */}
            <form onSubmit={handleAddComment} className="mb-10 p-6 border border-indigo-200 rounded-xl bg-indigo-50/50">
                <h3 className="text-xl font-bold mb-4 text-indigo-700">¡Deja tu opinión!</h3>
                
                <input
                    type="text"
                    placeholder="Tu Nombre"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full p-3 border border-indigo-300 rounded-lg mb-3 focus:ring-2 focus:ring-indigo-500"
                    required
                />

                <textarea
                    placeholder="Escribe tu comentario..."
                    rows="4"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full p-3 border border-indigo-300 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 resize-none"
                    required
                />
                
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                    Publicar Comentario
                </button>
            </form>
            
            {/* Lista de comentarios */}
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Lista ({comments.length})
            </h3>
            
            <div className="space-y-4">
                {loading ? (
                    <p className="text-center text-gray-500">Cargando comentarios...</p>
                ) : comments.length === 0 ? (
                    <p className="text-center text-gray-500">Aún no hay comentarios. ¡Sé el primero!</p>
                ) : (
                    comments.map((comment) => (
                        <CommentItem key={comment.id} comment={comment} />
                    ))
                )}
            </div>
        </div>
    );
};

export default CommentSection;