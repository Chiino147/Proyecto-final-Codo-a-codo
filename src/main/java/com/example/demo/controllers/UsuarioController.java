package com.example.demo.controllers;
import java.util.ArrayList;
import java.util.Optional;
import com.example.demo.models.UsuarioModel;
import com.example.demo.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/personasbuscadas")         // mapea     /usuarios
public class UsuarioController {
    @Autowired
    UsuarioService usuarioService;
    @CrossOrigin   // para solucionar error “cors”
    @GetMapping()      //trae todos los usuarios y lo mapea  /usuarios
    public ArrayList<UsuarioModel> obtenerBuscado(){
        return usuarioService.obtenerBuscados();
    }
    @CrossOrigin
    @PostMapping()    //   graba un usuario
    public UsuarioModel guardarBuscado(@RequestBody UsuarioModel buscado){
        return this.usuarioService.guardarBuscado(buscado);
    }
 
    @CrossOrigin
    @GetMapping( path = "/{id}")    // trae un usuario segun id
    public Optional<UsuarioModel> obtenerBuscadoPorId(@PathVariable("id") Long id) {
        return this.usuarioService.obtenerPorId(id);
    }

    @CrossOrigin
    @GetMapping("/query")        // trae los usuarios con determinada prioridad
    public ArrayList<UsuarioModel> obtenerBuscadoPorRecompensa(@RequestParam("prioridad") Integer recompensa){
        return this.usuarioService.obtenerPorRecompensa(recompensa);
    }
    @CrossOrigin
    @DeleteMapping( path = "/{id}")   // borra un usuario con determinado id  
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.usuarioService.eliminarBuscado(id);
        if (ok){
            return "Se eliminó el usuario con id " + id;
        }else{
            return "No pudo eliminar el usuario con id" + id;
        }
    }
}
