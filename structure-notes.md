---
layout: base
title:  'Universal Dependencies --- test notes'
---

## Dependency Structure: General Principles

- Dependency relations hold primarily between content words.

<div class="sd-parse">
The cat could have chased the dog right through the kitchen .
nsubj(chased, cat)
dobj(chased, dog)
nmod(chased, kitchen)
advmod(kitchen, right)
</div>


- Function words attach as direct dependents of the most closely related content word.

<div class="sd-parse">
The cat could have chased the dog right through the kitchen .
det(cat, The)
aux(chased, could)
aux(chased, have)
det(dog, the-6)
case(kitchen, through)
det(kitchen, the-10)
</div>


- Function words do not have dependents of their own, except in the following cases:
 1. Multiword function words
 2. Coordinated function words
 3. Promotion through head elision

- In structures that do not have a transparent internal structure all non-initial elements depend on the initial one.

<div class="sd-parse">
can you can the can ?
nsubj(can-3,you)
aux(can-3,can-1)
dobj(can-3,can-5)
</div>


 
