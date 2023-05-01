---
udver: '2'
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
---

An adjectival modifier (amod) of a noun (or pronoun) is any adjectival phrase modifying the noun (or pronoun). 
An adjectival modifier dependent may have its own modifiers, but the dependent should not be a clause.
In the Pomak treebank, the [amod]() dependency is typically used as shown below:  

~~~ sdparse
harésavot mi stáry kámatny kaménøvy rabaty 
I like old nice stone things  
amod(rabaty, stáry)
amod(rabaty, kámatny)
amod(rabaty, kaménøvy)
~~~ 

In the Pomak treebank, the [amod]() dependency has been applied to particples acting as adjectives:

~~~ sdparse
našól je pad annók gábra annó zmíje paledéno ad mrazáne
lit: found-he under a tree a snake frozen from cold-the
"under a tree he found a snake frozen from the cold"
amod (zmíje, paladéno)
~~~ 
