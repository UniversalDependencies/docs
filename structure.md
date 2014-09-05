---
layout: base
title:  'Structure'
---

# Structure

This is a placeholder page for the structure documentation.

(the following was moved over from [structure-notes.html](structure-notes.html))

## Dependency Structure: General Principles

The goal is a set of broadly observed "universal dependencies" that work across languages. Such dependencies seek to maximize parallelism by allowing the same grammatical relation to be annotated the same way across languages, while making enough crucial distinctions such that different things can be differentiated.

The goal of parallelism has limits: The standard does not postulate and annotate "empty" things that do not appear in various languages, and it allows the use of language-specific refinements of universal dependencies to represent particular relations of language-particular importance.

Dependency relations hold primarily between content words, rather than being indirect relations mediated by function words.

<div id="s1" class="sd-parse">
The cat could have chased the dog right down the street .
nsubj(chased, cat)
dobj(chased, dog)
nmod(chased, street)
advmod(street, right)
</div>

Function words attach as direct dependents of the most closely related content word.

<div id="s2" class="sd-parse">
The cat could have chased the dog right down the street .
det(cat, The)
aux(chased, could)
aux(chased, have)
det(dog, the-6)
case(street, down)
det(street, the-10)
</div>

Preferring content words as heads maximizes parallelism between languages because content words vary less than function words between languages. In particular, one commonly finds the same grammatical relation being expressed by morphology in some languages or constructions and by function words in other languages or constructions, and, indeed, some languages may not mark the information at all (such as not marking tense or definiteness).

<div id="s2a" class="sd-parse">
On a dormi ...
nsubj(dormi, On)
aux(dormi, a)
</div>

<div id="s2b" class="sd-parse">
We slept ...
nsubj(slept, We)
</div>

Function words do not have dependents of their own, except in the following cases:

1. Multiword function words, analyzed as multi-word expressions (mwe):
  
<div id="s3" class="sd-parse">
The cat could have chased the dog out of the house .
case(house,out)
mwe(out,of)
</div>

2. Coordinated function words:

<div id="s4" class="sd-parse">
The cat could have chased the dog up and down the street .
case(street,up)
conj(up,down)
cc(up,and)
</div>

3. Promotion through head elision:

<div id="s5" class="sd-parse">
The cat could have [chased the dog right down the street] .
nsubj(have,cat)
aux(have,could)
</div>

The following expression types are all annotated with a flat head-initial structure:

1. Fixed multiword expressions (mwe)
2. Multiword names (name)
3. Foreign phrases (foreign)

<div id="s6" class="sd-parse">
We had a nice time in spite of the rain .
case(rain,in)
mwe(in,spite)
mwe(in,of)
nmod(had,rain)
</div>

<div id="s7" class="sd-parse">
Martin Luther King had a dream .
nsubj(had,Martin)
name(Martin,Luther)
name(Luther,King)
</div>

<div id="s8" class="sd-parse">
She said dra åt helvete .
dobj(said,dra)
foreign(dra,åt)
foreign(dra,helvete)
</div>

In contrast, compounds are annotated to show their modification structure, including a regular concept of head:

<div id="s9" class="sd-parse">
I bought a computer disk drive enclosure .
nsubj(bought, I)
det(enclosure, a)
compound(drive, computer)
compound(drive, disk)
compound(enclosure, drive)
dobj(bought, enclosure)
</div>
