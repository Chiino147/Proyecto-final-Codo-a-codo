package com.example.demo.services;
import java.util.ArrayList;
import com.example.demo.models.UsuarioModel;
import com.example.demo.repositories.UsuarioRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UsuarioService {
    @Autowired
    
    UsuarioRepository usuarioRepository;
    public ArrayList<UsuarioModel> obtenerBuscados(){
        return (ArrayList<UsuarioModel>) usuarioRepository.findAll();
    //findAll metodo de CrudRepository
   }
    public UsuarioModel guardarBuscado(UsuarioModel buscado){
        return usuarioRepository.save(buscado);  //save metodo de CrudRepository
    }//**************** 2da etapa
    public Optional<UsuarioModel> obtenerPorId(Long id){
        return usuarioRepository.findById(id);
    }
    public ArrayList<UsuarioModel>  obtenerPorRecompensa(Integer recompensa) {
        return usuarioRepository.findByRecompensa(recompensa);
    }
    public boolean eliminarBuscado(Long id) {
        try{
            usuarioRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}
