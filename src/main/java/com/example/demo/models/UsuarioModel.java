package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name = "personasbuscadas")
public class UsuarioModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String nombre;
    private String sexo;
    private String motivo;
    private Integer recompensa;
    private String imagen;
    //RECOMPENSA
    public void setRecompensa(Integer recompensa){
        this.recompensa = recompensa;
    }
    public Integer getRecompensa(){
        return recompensa;
    }
    //ID
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    //NOMBRE
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    //IMAGEN
    public String getImagen() {
        return imagen;
    }
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
    //SEXO
    public void setSexo(String sexo) {
        this.sexo = sexo;
    }
    public String getSexo() {
        return sexo;
    }
    //Motivos
    public String getMotivo() {
        return motivo;
    }
    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }
}

