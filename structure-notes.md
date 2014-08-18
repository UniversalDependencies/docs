---
layout: base
title:  'Universal Dependencies --- test notes'
---

## Dependency Structure: General Principles

Dependency relations hold primarily between content words.

<div class="sd-parse">
The cat could have chased the dog right down the street .
nsubj(chased, cat)
dobj(chased, dog)
nmod(chased, street)
advmod(street, right)
</div>

Function words attach as direct dependents of the most closely related content word.

<div class="sd-parse">
The cat could have chased the dog right down the street .
det(cat, The)
aux(chased, could)
aux(chased, have)
det(dog, the-6)
case(street, down)
det(street, the-10)
</div>

Function words do not have dependents of their own, except in the following cases:

1. Multiword function words
2. Coordinated function words
3. Promotion through head elision
  
<div class="sd-parse">
The cat could have chased the dog out of the house .
case(house,out)
mwe(out,of)
</div>

<div class="sd-parse">
The cat could have chased the dog up and down the street .
case(street,up)
conj(up,down)
cc(down,and)
</div>

<div class="sd-parse">
The cat could have (chased the dog right down the street) .
nsubj(have,cat)
aux(have,could)
</div>

The following expression types are all annotated with a flat head-initial structure:

1. Fixed multiword expressions (mwe)
2. Multiword names (name)
3. Foreign phrases (foreign)

<div class="sd-parse">
We had a nice time in spite of the rain .
case(rain,in)
mwe(in,spite)
mwe(in,of)
</div>

<div class="sd-parse">
Martin Luther King had a dream .
nsubj(had,Martin)
name(Martin,Luther)
name(Luther,King)
</div>

<div class="sd-parse">
She said dra åt helvete .
dobj(said,dra)
foreign(dra,åt)
foreign(dra,helvete)
</div>
