function sides(literals, ...expressions) {
    const A = expressions[0];
    const P = expressions[1];

    let s1 = (P + ((P * P) - 16 * A)**(1 / 2)) / 4;
    let s2 = (P - ((P * P) - 16 * A)**(1 / 2)) / 4;

    [s1, s2] = [s1, s2].sort();

    return [s1, s2];

}
