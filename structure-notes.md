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
det(dog, the)
case(kitchen, through)
det(kitchen, the)
</div>


- When a content word is elided, a function word may be promoted to stand in for the content word.
- In structures that do not have a transparent internal structure all non-initial elements depend on the initial one.

<div class="sd-parse">
can you can the can ?
nsubj(can-3,you)
aux(can-3,can-1)
dobj(can-3,can-5)
</div>


 
