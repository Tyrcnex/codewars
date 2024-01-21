// https://www.codewars.com/kata/54d558c72a5e542c0600060f

Bomb.diffuse( 42 );

Bomb.diffuse( 0 );
Bomb.diffuse( 1 );
Bomb.diffuse( 2 );
Bomb.diffuse( 3 );
Bomb.diffuse( 4 );

Bomb.diffuse( BombKey );

let diffuseTheBomb = () => true;
Bomb.diffuse();

Bomb.diffuse( 3.14159 );

let date = new Date();
date.setFullYear(date.getFullYear() - 4);
Bomb.diffuse(date);

Bomb.diffuse( Object.freeze({ key: 43 }) )

let obj = {
    valueOf: () => {
        if (!this.i) {
            this.i = 1;
            return 0;
        }
        return 20;
    }
};
Bomb.diffuse(obj);

Math.random = () => ({
    valueOf: () => {
        if (!this.i) this.i = 1;
        else this.i++;
      
        return 0.5 + 0.5 * (this.i > 2);
    }
})
Bomb.diffuse(42);

Array.prototype.valueOf = () => 14;
Bomb.diffuse(new Buffer("yes")) // hell yea!