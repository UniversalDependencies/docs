---
layout: base
title:  'Uppsala Group on Clitics and Reflexive Pronouns'
---

# Uppsala Group on Clitics and Reflexive Pronouns

_(Kiril Simov, Petya Osenova, Simonetta Montemagni, Mojgan Seraji, Nizar Habash, Marie-Catherine de Marneffe)_

## Clitic doubling

In languages where real clitic doubling can appear (such as Bulgarian or Greek), the clitic elements should be tagged as `expl` and depend on the predicate:

~~~ sdparse
I will him it read the book to the boy
expl(read, him)
expl(read, it)
dobj(read, book)
nmod(read, boy)
~~~

When the direct or indirect objects are realized with a clitic only, there are tagged as `dobj` or `iobj`.

We suggest that if needed, languages can have subtypes indicating the relation (dobj, iobj), though it is unclear whether that is really the best idea.

For languages with dislocation, such as French, we use the dislocated relation, consistent with the existing guidelines.



## Clitic acting as part of the verbal inflection

If the pronoun has a real grammatical function (dobj, iobj, advmod), we use that function as relation. If not, we use `expl`, possibly with the following subtypes.

~~~ sdparse
Maria si lava \n Maria washes herself
dobj(lava, si)
~~~


### "pv": pronominal verb

~~~ sdparse
la finestra si è rotta \n the window broke
expl:pv(rotta, si)
~~~


### "pass": passivazing uses 

~~~ sdparse
la neve si vede dal balcone \n Snow can be seen from the balcony
expl:pass(vede, si)
~~~


### "impers": impersonal construction

~~~ sdparse
qui si parla francese  \n here French is spoken
expl:impers(parla, si)
~~~


## Existential constructions
For existential constructions, `expl` is used, consistent with the existing guidelines.




