---
layout: base
title: 'cop'
shortdef: 'copula'
---

## cop: copula

(from SD manual)

A copula is the relation between the complement of a copular verb and
the copular verb.  (We normally take a copula as a dependent of its
complement; see the discussion in section~\ref{types}.)

<div class="sd-parse">
Bill is an honest man
cop(man, is)
</div>

(from LREC paper)

SD has advocated a treatment of the copula "be" where it is not the
head of a clause, but rather the dependent of a lexical predicate, as
in (1a). Such an analysis is motivated by the fact that many languages
often or always lack an overt copula in such constructions, as in the
Russian (1b). Similar constructions arise even in English if we
consider so-called raising-to-object or small clause constructions.
Under the basic analysis proposed for SD, the predicate complement is
not linked to its subject argument, but in the enhanced representation
(see below), the linkage is then parallel to the treatment in a zero
copula language, as in (1c).

[TODO example numbering]

<div class="sd-parse">
Ivan is the best dancer
nsubj(dancer-5, Ivan-1)
cop(dancer-5, is-2)
det(dancer-5, the-3)
amod(dancer-5, best-4)
</div>

<div class="sd-parse">
Ivan lučšij tancor \n Ivan best dancer
nsubj(tancor, Ivan)
amod(tancor, lučšij)
</div>

<div class="sd-parse">
I judge Ivan the best dancer
nsubj(judge-2, I-1)
dobj(judge-2, Ivan-3)
xcomp(judge-2, dancer-6)
det(dancer-6, the-4)
amod(dancer-6, best-5)
nsubj(dancer-6, Ivan-3)
</div>
