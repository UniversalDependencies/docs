---
layout: base
title:  'Syntax'
permalink: fi/overview/specific-syntax.html
---

# Specific constructions

Please note: this language-specific overview of guidelines for
specific constructions is a work in progress.

---

### Appositions and appellation modifiers

The Finnish Grammar (see ISK
[§1059](http://scripta.kotus.fi/visk/sisallys.php?p=1059),
[§1062](http://scripta.kotus.fi/visk/sisallys.php?p=1062))
distinguishes between three similar phenomena: the apposition, the
appellation modifier (*nimikemääarite*) and the supporting noun
(*tukisubstantiivi*). Out of these, the apposition and the appellation
modifier ([compound:nn]()) are distinguished in TDT, and supporting
noun structures are considered appositions.

All of these structures have in common that they all include two
(usually adjacent) elements, most often noun phrases, which refer to
the same entity or entities and have the same function in the
sentence. Thus, in order to be considered an apposition, an
appellation modifier or a supporting noun structure, a structure has
to fulfill the following criteria (the same as in the Finnish
grammar [§1059](http://scripta.kotus.fi/visk/sisallys.php?p=1059)):

1. Both elements of the structure must refer to the same entity
    or group of entities.
2. Both elements of the structure must have the same function
    in the sentence (for instance, the subject).

These criteria are interpreted rather loosely, and there are no
restrictions on the part of speech of the elements involved. Most
appositions (and appellation modifiers) in TDT consist of noun
phrases, but there are occurrences of different parts of speech as
appositions; notably the fiction section of the treebank contains
few examples of verbal appositions.

Among the expressions that fulfill criteria 1 and 2, six common
cases can be distinguished according to inflection and punctuation.

1. singular, both elements in nominative, no punctuation: _professori Matti Tamminen_ "professor Matti Tamminen"
2. singular, first element in nominative, second element inflected: _professori Matti Tammisen mukaan_ "according to professor Matti Tamminen"
3. singular, both elements in nominative, punctuation in between: _professori, Matti Tamminen_ "the professor, Matti Tamminen"
4. singular, first element inflected, second element in nominative: _romaanissa Putkinotko_ "in the novel Putkinotko"
5. singular, both elements inflected: _professorin, Matti Tammisen, mukaan_ "according to the professor, Matti Tamminen"
6. plural, elements either in nominative or inflected: _professorit Matti Tamminen ja Erkki Koivunen_ "the professors Matti Tamminen and Erkki Koivunen" or _professoreiden, Matti Tammisen ja Erkki Koivusen, mukaan_ "according to the professors, Matti Tamminen and Erkki Koivunen" or _professoreiden Matti Tamminen and Erkki Koivunen mukaan_ "according to the professors Matti Tamminen and Erkki Koivunen"

Out of these six cases, the first two are considered appellation
modifiers, and thus marked with the dependency type `nn`. Note that
the governor of the dependency in appellation modifiers is the latter
of the two words.

<!-- TODO missing fig \myfigexample{nn_appellation.pdf} -->

The remaining four cases are all considered appositions and marked
with the type `appos`. Contrary to appellation modifiers, in
apposition structures the first word is considered the governor.

<!-- fname:appos1.pdf -->
~~~ sdparse
Professori , Matti Tamminen , luennoi tänään . \n The_professor , Matti Tamminen , lectures today .
appos(Professori-1, Tamminen-4)
punct(Tamminen-4, ,-2)
punct(Tamminen-4, ,-5)
name(Tamminen-4, Matti-3)
nsubj(luennoi-6, Professori-1)
advmod(luennoi-6, tänään-7)
punct(luennoi-6, .-8)
~~~

It should be noted that case number 4 is in fact an example of a
supporting noun structure, but in TDT, these are marked as
appositions. In plural (case number 6), all possible case
combinations are considered appositions.

The only difference between the cases 1 and 3 is the presence or
absence of punctuation. Often, said punctuation is a comma, but also
parentheses, a dash or a colon are possible. As can be seen from the
examples above, the punctuation produces a semantic difference,
which is taken into account in the annotation. Punctuation
variations of the cases 2, 4, and 5 need not be considered, as these
variations are ungrammatical. (Naturally, ungrammatical phenomena
can and do occur in a corpus of actual language, but these cases are
resolved on a case-by-case basis.)

- \*_professori, Matti Tammisen mukaan_ "according to professor, Matti Tamminen"
- \*_romaanissa, Putkinotko_ "in the novel, Putkinotko"
- \*_professorin Matti Tammisen mukaan_ "according to the professor's Matti Tamminen"
  (unless a possessive reading is intended)

### References

* <http://scripta.kotus.fi/visk/sisallys.php?p=567> (in Finnish)
* <http://scripta.kotus.fi/visk/sisallys.php?p=1059> (in Finnish)
* <http://scripta.kotus.fi/visk/sisallys.php?p=1062> (in Finnish)

---

(The following section was lifted from the TDT documentation for
`rel`, which is removed in UD Finnish. See
<https://github.com/UniversalDependencies/docs/issues/73> for more
information.)

In TDT, the *relativizer* (`rel`) is the head of the phrase containing
the relative pronoun (or other relative word). Most often, but not
always, this is the relative word itself. The governor of the
dependency is the main predicate of the relative clause.

For UD Finnish, relative markers are be mapped to the syntactic role
that the relative is playing in the relative clause, such as `nsubj`
or `dobj`. This information is present in the second annotation layer
of the TDT corpus.

<!-- TODO Annotation of relative clauses is more closely examined in Section [relclauses](#sec-relclauses). -->

**NOTE**: this is TDT example using `rel`, not a UD Finnish example.

<!-- fname:rel_basic.pdf -->
~~~ sdparse
Auto , joka ohitti meidät , ajoi hyvin nopeasti . \n The_car , which passed us , drove very fast .
rcmod(Auto-1, ohitti-4)
punct(ohitti-4, ,-2)
rel(ohitti-4, joka-3)
dobj(ohitti-4, meidät-5)
punct(ohitti-4, ,-6)
nsubj(ajoi-7, Auto-1)
advmod(ajoi-7, nopeasti-9)
advmod(nopeasti-9, hyvin-8)
punct(ajoi-7, .-10)
~~~

**NOTE**: this is TDT example using `rel`, not a UD Finnish example.

<!-- fname:rel_phrase.pdf -->
~~~ sdparse
Nainen , jonka auto hajosi , pyysi apuamme . \n The_lady , whose car broke , asked_for our_help .
rcmod(Nainen-1, hajosi-5)
punct(hajosi-5, ,-2)
poss(auto-4, jonka-3)
rel(hajosi-5, auto-4)
punct(hajosi-5, ,-6)
nsubj(pyysi-7, Nainen-1)
dobj(pyysi-7, apuamme-8)
punct(pyysi-7, .-9)
~~~
