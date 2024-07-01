class Turno {
    turnos=[];
    auxilioCount = 0;
    totalTurnos = 0;

    create = async (turno) => {
        this.turnos.push(turno);
        this.totalTurnos++;
        if (turno.tipoServicio === 'auxilio') {
            this.auxilioCount++;
        }
        return turno;
    };
    
    getAll = async() => {
        return JSON.parse(JSON.stringify(this.turnos));
    };

    contarTipoDeServicio = async (mes) => {
        const conteo = {
            programado: 0,
            auxilio: 0,
            cotizacion: 0
        };
        this.turnos.forEach(turno => {
            if (turno.mes >= mes) {
                conteo[turno.tipoServicio]++;
            }
        });
        return conteo;
    };

    verificarLimiteAuxilio = async () => {
        const limiteAuxilio = this.totalTurnos * 0.15;
        return this.auxilioCount < limiteAuxilio;
    };
}

export default Turno;