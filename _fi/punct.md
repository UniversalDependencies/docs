---
layout: base
title:  'punct'
shortdef : 'punctuation'
---

## punct (punctuation)

The dependency type `punct` is used to mark punctuation. The dependent is the punctuation symbol, and the governor is the element which the punctuation symbol delimits. For instance, with coordination, the first coordinated element is the head of all `punct` dependencies in the coordination, and with subordinate clauses, the head of the subordinate clause is the governor of the `punct`.


<!-- fname:punct_coord.pdf -->
<div class="sd-parse">
kerrostaloja , rivitaloja ja omakotitaloja \n blockhouses , rowhouses and one_family_houses
punct(kerrostaloja-1, ,-2)
conj(kerrostaloja-1, rivitaloja-3)
cc(kerrostaloja-1, ja-4)
conj(kerrostaloja-1, omakotitaloja-5)
</div>



<!-- fname:punct_subord.pdf -->
<div class="sd-parse">
Kotona oli hiljaista , kun hän palasi . \n At_home was quiet , when he returned .
advmod(oli-2, Kotona-1)
acomp(oli-2, hiljaista-3)
advcl(oli-2, palasi-7)
punct(palasi-7, ,-4)
punct(oli-2, .-8)
mark(palasi-7, kun-5)
nsubj(palasi-7, hän-6)
</div>


Attaching punctuation correctly is described more closely in Section [punctspecial](#sec-punctspecial).

