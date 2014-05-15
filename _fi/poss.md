---
layout: base
title:  'poss'
shortdef : 'genitive modifier'
---

## poss (genitive modifier) <a name="sec-poss"></a>

The dependency type `poss` stands for *possessive* in the original SD scheme, but in TDT, it is used for genitive modifiers in general, which in Finnish often but not nearly always imply possession. There are two kinds of genitive modifiers that are not annotated using the general genitive modifier type: *the genitive object*, `gobj` (see Section [gobj](#sec-gobj)) and *the genitive subject*, `gsubj` (Section [gsubj](#sec-gsubj)).


<!-- fname:poss1.pdf -->
<div class="sd-parse">
Matin penaali jäi kouluun . \n Matti's pencilcase was_left at_school .
poss(penaali-2, Matin-1)
nsubj(jäi-3, penaali-2)
nommod(jäi-3, kouluun-4)
punct(jäi-3, .-5)
</div>



<!-- fname:poss2.pdf -->
<div class="sd-parse">
Autossa on kahden litran moottori . \n In_the_car is two litre's engine .
nommod(on-2, Autossa-1)
nsubj(on-2, moottori-5)
punct(on-2, .-6)
poss(moottori-5, litran-4)
num(litran-4, kahden-3)
</div>


