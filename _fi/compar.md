---
layout: base
title:  'compar'
shortdef : 'comparative'
---

## compar (comparative)

The dependency type `compar` is used in comparative constructions, most often involving adjectives in the comparative form. The head of the `compar` dependency is the comparative wordform, and the dependent is the compared element. 


<!-- fname:compar.pdf -->
<div class="sd-parse">
parempi kuin eilinen näytelmä \n better than yesterday's(adj.) play
compar(parempi-1, näytelmä-4)
comparator(näytelmä-4, kuin-2)
amod(näytelmä-4, eilinen-3)
</div>

<!--details-->

## Comparatives and superlatives

This section describes annotating comparative and superlative
structures, which, in TDT, are considered to include also certain
similar structures that do not contain a comparative or superlative
wordform.

### Comparatives

Structures with comparative adjectives and adverbs may be difficult
to annotate: they are often elliptical, and it may be difficult to
tell what is being compared with what. In the Finnish-specific
version of the SD scheme, there are two dependency types that are
reserved for comparative structures, `compar` and
`comparator`. Both of these types are new types not present
in the original SD scheme.

The basic usage of these two types is as follows. The comparative
adjective or adverb acts as the head for a `compar`
dependency, and *the element being compared* is its
dependent. The element being compared also acts as the head for a
`comparator` dependency, the dependent of which is a
comparative conjunction, nearly always *kuin*.

<!-- fname:comparatives.pdf -->
<div class="sd-parse">
Keittiö on pienempi kuin olohuone . \n Kitchen is smaller than livingroom .
nsubj-cop(pienempi-3, Keittiö-1)
cop(pienempi-3, on-2)
compar(pienempi-3, olohuone-5)
comparator(olohuone-5, kuin-4)
punct(pienempi-3, .-6)
</div>


Note that the comparative adjective or adverb remains the head of
the `compar` dependency even if the word order is such that
the dependency becomes non-projective.

<!-- fname:comparatives_non-projective.pdf -->
<div class="sd-parse">
Matilla on isompi auto kuin Pekalla . \n At_Matti is bigger car than Pekka .
nmod(on-2, Matilla-1)
nsubj(on-2, auto-4)
amod(auto-4, isompi-3)
compar(isompi-3, Pekalla-6)
comparator(Pekalla-6, kuin-5)
punct(on-2, .-7)
</div>


From the previous example it can also be seen that comparative
structures are often elliptical in some way. Strictly speaking, the
example does not compare Matti and Pekka, but rather their cars, and
the car owned by Pekka is not explicitly present in the sentence. As
a general rule of thumb, the different kinds of ellipsis present in
comparative structures are not marked with null tokens, but rather
the available elements are used wherever possible.

It is also possible to make comparisons without the comparative
conjunction *kuin*. In these cases, only the dependency type
`compar` is used, marking the comparative adjective or
adverb as the head, and the element compared as the dependent, just
as in the case with the comparative conjunction present.

<!-- fname:compar_no_comparator.pdf -->
<div class="sd-parse">
Olohuone on keittiötä suurempi . \n Livingroom is (than_)kitchen bigger .
nsubj-cop(suurempi-4, Olohuone-1)
cop(suurempi-4, on-2)
compar(suurempi-4, keittiötä-3)
punct(suurempi-4, .-5)
</div>


In TDT, also some structures not involving a comparative adjective
or adverb can be marked as comparatives. In order to qualify as a
comparative construction, a structure has to contain either a
comparative word form or a word form that otherwise semantically
entails comparison, such as *samanlainen (similar)*, *sama
  (same)*, *erilainen (different)* or *eri (differing,
  separate)*. (Note that for example the word \emph{sama} is
  in fact a pronoun in Finnish.)

<!-- fname:comparative_sama.pdf -->
<div class="sd-parse">
Luin saman kirjan kuin Pekka . \n I_read same book as Pekka .
dobj(Luin-1, kirjan-3)
det(kirjan-3, saman-2)
compar(saman-2, Pekka-5)
comparator(Pekka-5, kuin-4)
punct(Luin-1, .-6)
</div>


An additional difficulty is posed by the fact that in Finnish, the
comparative conjunction *kuin* can also appear as a
subordinating conjunction as well as an adverb. Borderline
situations are resolved on a case-by-case basis, considering whether
or not there is a comparison involved in the structure and,
secondarily, whether the dependent structure is a
clause. (Comparative structures can also occasionally be
  full clauses.)

### Superlatives

Superlatives are less problematic than comparatives but deserve some
attention nevertheless. The basic case with superlatives is simple:
a lone superlative modifying a noun. The superlative form in this
case is not marked in any particular way in the syntax annotation,
but the structure is annotated similarly to any adjective modifying
a noun. The same strategy of not marking the superlative in any
particular way is also used in cases where the superlative acts as a
predicative.

<!-- fname:superlative_basic.pdf -->
<div class="sd-parse">
Suurin paketti oli muiden takana . \n Biggest package was others behind .
amod(paketti-2, Suurin-1)
nsubj(oli-3, paketti-2)
nmod(oli-3, muiden-4)
case(muiden-4, takana-5)
punct(oli-3, .-6)
</div>


Often a superlative is modified by nominal in some manner. A very
common phenomenon is a genitive modifier modifying a superlative.
For instance, in an expression such as

<!-- fname:super1.pdf -->
<div class="sd-parse">
Suomen paras kokki \n Finland's best cook
poss(paras-2, Suomen-1)
amod(kokki-3, paras-2)
</div>


the cook is the best *of those in/of Finland* and
thus the correct head word for the genitive modifier is
*paras*. Similarly, an ordinal number can act as the head of a
genitive modifier. For example, in

<!-- fname:super2.pdf -->
<div class="sd-parse">
Virtasen kuudes mestaruus \n Virtanen's sixth championship
poss(kuudes-2, Virtasen-1)
num(mestaruus-3, kuudes-2)
</div>



the championship is the sixth out of *those of
  Virtanen*, and thus the genitive modifier should modify the
ordinal number.

However, it is still possible for the noun to act as the head word
in some cases. For instance, in

<!-- fname:super3.pdf -->
<div class="sd-parse">
Rusakon pahin vihollinen \n The_hare's worst enemy
poss(vihollinen-3, Rusakon-1)
amod(vihollinen-3, pahin-2)
</div>


the enemy is not the worst *of the hare*, but rather
it is an enemy of the hare, and it is the worst enemy. Thus, the
head word should be *hare*.

As a rule of thumb, if the noun phrase containing the genitive
modifier can be turned into a copular clause in the following
fashion, then the genitive modifier should modify the superlative or
ordinal number.

- Kokki on Suomen paras. (The cook is the best in
  Finland.)
- Mestaruus on Virtasen kuudes. (The
  championship is the sixth for Virtanen.)

are perfectly valid, but

- ?Vihollinen on rusakon pahin. (?The enemy is the worst of
  the hare.)

is questionable at best. Thus, in *Suomen paras
  kokki* and *Virtasen kuudes mestaruus*, the genitive modifier
is considered to modify the superlative adjective, but in
*rusakon pahin vihollinen*, it is considered to modify the noun
directly.

In this context, it should also be noted that in addition to
superlatives, also certain other adjectives can also act as the head
of a genitive modifier. These adjectives can be semantically
superlative-like (*viimeinen (last)*), but there are also many
others, such as *oma (own)*, *kaltainen (-like)*,
*välinen (between (adj.))*, and *vastainen (against
  (adj.))*.

Also other nominal modifiers are possible, expressing the set of
beings from which the objects are drawn when making the
comparison. These are treated similarly to the genitive modifiers,
making the superlative wordform the head of the modifier if the
modifier expresses the set of beings to draw from.

<!-- fname:superlative_nommod.pdf -->
<div class="sd-parse">
Kukista kaunein oli ikkunalaudalla . \n From_the_flowers most_beautiful was on_windowsill .
nmod(kaunein-2, Kukista-1)
nsubj(oli-3, kaunein-2)
nmod(oli-3, ikkunalaudalla-4)
punct(oli-3, .-5)
</div>


Note how in the previous example the phrase *kukista kaunein*
can act as a noun phrase (it is the subject of the clause), even
though its head word is an adjective. <!-- TODO See Section~\ref{sec-NP-no-N}
on nounless noun phrases.-->
