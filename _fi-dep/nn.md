---
layout: base
title:  'nn'
shortdef : 'noun compound modifier'
---

## nn (noun compound modifier) <a name="sec-nn"></a>

The dependency type `nn`, which stands for *noun compound modifier* has two basic uses in the Finnish SD scheme. The first use involves actual compounds. In Finnish, compounds are generally written as a single word, but for instance some compounds involving foreign words or proper names are written separately using a dash, and in written Finnish, erroneously writing compounds as two words is a common mistake. Both of these cases are marked using `nn`.


<!-- fname:nn_foreign.pdf -->
<div class="sd-parse">
Da Vinci -merkkinen luomiväri \n Da Vinci -make eyeshadow
name(Vinci-2, Da-1)
nn(-merkkinen-3, Vinci-2)
amod(luomiväri-4, -merkkinen-3)
</div>



<!-- fname:nn_error.pdf -->
<div class="sd-parse">
Ruoka pöytä notkui herkkuja . \n Food table was_full_of goodies .
nn(pöytä-2, Ruoka-1)
nsubj(notkui-3, pöytä-2)
dobj(notkui-3, herkkuja-4)
punct(notkui-3, .-5)
</div>


The second use of the type `nn` is to mark *appellation modifiers*, which are modifying, non-inflecting noun phrases that generally express profession, rank, position, assignment or other such classifiable property (see ISK <a href="http://scripta.kotus.fi/visk/sisallys.php?p=1062">§1062</a>). The phenomenon is closely related to that of *apposition*.

<!-- , and the distinction between the two is described in Section [appos-vs-nn](#sec-appos-vs-nn).-->


<!-- fname:nn_appellation.pdf -->
<div class="sd-parse">
Professori Matti Tamminen pitää puheen . \n Professor Matti Tamminen gives a_speech .
nn(Tamminen-3, Professori-1)
name(Tamminen-3, Matti-2)
nsubj(pitää-4, Tamminen-3)
dobj(pitää-4, puheen-5)
punct(pitää-4, .-6)
</div>


