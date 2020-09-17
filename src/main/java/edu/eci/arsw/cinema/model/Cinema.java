/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.cinema.model;

import java.util.List;

/**
 *
 * @author cristian
 */
public class Cinema {
    private String name;
    private List<CinemaFunction> functions;
    private int funcionActual;
    
    
    public Cinema(){}
    
    public Cinema(String name,List<CinemaFunction> functions){

        funcionActual = 0;
        this.name=name;
        this.functions=functions;
        for(CinemaFunction funciones: this.functions){
            funciones.setIdFunctions(funcionActual);
            funcionActual++;
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<CinemaFunction> getFunctions() {
        return this.functions;
    }
    public void addFuncion(CinemaFunction funcion) {
    	funcion.setIdFunctions(funcionActual);
    	funcionActual++;
        functions.add(funcion);
    }
    public void setFunction(CinemaFunction function){
    	for (CinemaFunction i : functions) {
    		if(function.getMovie().equals(i.getMovie())) {
    			
    		}
    	}
	}
    public void modFunction(CinemaFunction funcion){
        boolean isIn  = false;
        for(int i =0;i<functions.size();i++){
            if(functions.get(i).getIdFunction() == funcion.getIdFunction()){
                functions.set(i,funcion);
                isIn = true;
            }
        }
        if (!isIn) {
            functions.add(funcion);
        }



    }
    public void setSchedule(List<CinemaFunction> functions) {
        this.functions = functions;
    }
}
