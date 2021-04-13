---
layout: relation
title: 'parataxis:rep'
shortdef: 'reported speech or digression in discursive form'
udver: '2'
---

As a subtype of [`parataxis`](u-dep/parataxis), `rep` is principally used to mark direct speech inserted into the sentence.

Direct or reported speech can be syntactically ambivalent, because on the one hand, as a whole, it behaves in a similar manner to a nominal argument (e.g. [`obj`](la-dep/obj) or [`nsubj`](la-dep/nsubj)), but, on the other hand, it constitutes a completely independent uttering with respect to the main sentence.

~~~ sdparse
Virgilius primo Eneidorum dicit « Arma virumque cano » \n Virgil in-first of-Aeneis says « Arms and-man I-sing »
parataxis:rep(dicit, cano)
parataxis:rep(says, I-sing)
~~~

The same logic and subrelation is applied to digressions in the sentence that take the form of independent and complex clauses themselves, factually beginning a new sentence. The two blocks are however still in a (loose) syntactical relation, because the digression is usually introduced by some element in the main clause, in a similar way to [explicative co-ordinations](la-feat/conj-expl). 

~~~ sdparse
Sed nunc queritur : Cum illa regio celi circulariter feratur , quare illa elevatio non fuit circularis ? \n But now is-asked : When that region of-sky circularly is-brought, for-which-reason that lifting not was circular ?
parataxis:rep(queritur, circularis)
parataxis:rep(is-asked, circular)
advcl(circularis, feratur)
advcl(circular, is-brought)
~~~

In both cases, the strategy is that of juxtaposition, and any morphosyntactical marks of subordination (e.g. [subordinating conjunctions](la-pos/SCONJ), [non-finite verb forms](la-feat/VerbForm), [constructions in oblique cases](la-dep/advcl-abs)...) are lacking, hence the use of `parataxis`; at the same time, the subrelation `rep` acknowledges that the two juxtaposed (sometimes even interwoven) blocks are conceptually more connected than for usual parataxis.

