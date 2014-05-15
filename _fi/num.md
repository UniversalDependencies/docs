---
layout: base
title:  'num'
shortdef : 'numeral modifier'
---

## num (numeral modifier) <a name="sec-num"></a>

*Numeral modifiers* of a noun or NP, including both cardinal and ordinal numbers, are marked with the `num` dependency type. This dependency type is used also with for instance years and program versions.


<!-- fname:num.pdf -->
<div class="sd-parse">
Laukku painoi 20 kiloa . \n Bag weighed 20 kilograms .
nsubj(painoi-2, Laukku-1)
dobj(painoi-2, kiloa-4)
num(kiloa-4, 20-3)
punct(painoi-2, .-5)
</div>



<!-- fname:num_year.pdf -->
<div class="sd-parse">
Tapasin hänet vuonna 1972 . \n I_met him in_the_year 1972 .
dobj(Tapasin-1, hänet-2)
nommod(Tapasin-1, vuonna-3)
num(vuonna-3, 1972-4)
punct(Tapasin-1, .-5)
</div>


