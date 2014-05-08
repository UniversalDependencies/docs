---
layout: base
title:  'Finnish grammatical relations'
---

# Finnish grammatical relations

On this page we list all relations with a few examples per relation. Some relations
may have a link to a page with further dedicated discussion.

## acomp: adjectival complement

The dependency type acomp is used for adjectival complements of verbs, except
for predicatives.

<div class="sd-parse">
Hän teki siitä hyvin vaikeaa .
acomp(teki, vaikeaa)
</div>

## cc: coordinating conjunction

Coordinating conjunctions are marked as dependents of the first coordinated element. See the [discussion](fi-cc.html) for further
details.

<div class="sd-parse">
kirjat kynät ja viivottimet
conj(kirjat, kynät)
conj(kirjat, viivottimet)
cc(kirjat,ja)
</div>

<div class="sd-parse">
toisaalta kynät , toisaalta viivottimet
preconj(kynät, toisaalta)
cc(kynät, toisaalta-4)
conj(kynät, viivottimet)
</div>
