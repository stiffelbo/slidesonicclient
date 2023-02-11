class Mic {
    constructor(){
        this.initialized = false;
        navigator.mediaDevices.getUserMedia({audio: true})
            .then(stream => {
                this.audioContext = new AudioContext();
                this.microphone = this.audioContext.createMediaStreamSource(stream);
                this.analyser = this.audioContext.createAnalyser();
                //Slice to samples 2*, def 2048
                this.analyser.fftSize = 512;
                const bufferLength = this.analyser.frequencyBinCount;
                this.dataArray = new Uint8Array(bufferLength);
                this.microphone.connect(this.analyser);
                this.initialized = true;
            }).catch(function(err){
                alert(err);
            });
    }

    getSamples(){
        this.analyser.getByteTimeDomainData(this.dataArray);
        //normalizuje wartosći do takich z przedziału -1 i 1
        let normSamples = [...this.dataArray].map(item => item/128 - 1);
        return normSamples;
    }

    getVolume(){
        //returns single value
        this.analyser.getByteTimeDomainData(this.dataArray);
        //normalizuje wartosći do takich z przedziału -1 i 1
        let sum = 0;
        let normSamples = [...this.dataArray].map(item => item/128 - 1);
        normSamples.map(item => {sum += item * item});
        let volume = Math.sqrt(sum / normSamples.length);
        return volume;
    }
}

export default Mic;