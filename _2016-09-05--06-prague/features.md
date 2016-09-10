---
layout: base
title:  'Features in UD v2'
---

# Features in UD v2

## Renaming existing features and/or values

* `Aspect`: values `Pro` and `Prog` are highly confusing. Rename Pro?

## Adding new values to existing features

* TO DISCUSS: `Aspect`: DurPerf (tr), DurPerfProg (tr), DurProg (tr), Freq (hu), ProgRapid (tr), Rapid (tr), Res (cu)
* TO DISCUSS: Chinese "cases" Advb, Comp, Rel
* What is `Case=Equ` in Turkish? It is [not documented](../tr/feat/Case.html), yet it occurs in the data.

## Adding new features

`Abbr=Yes` (abbreviation) is not language specific and is currently used in 12 treebanks: ar, cs, cs_cac, cs_cltt, da, et, fi, fi_ftb, fo, la_ittb, pl, ro.

## Comparison with UniMorph

Ideally a mapping of the features that exist in both systems.

## Stuff to check

* Does Hungarian have `Case=Abs`?

## Inventory of features that will stay language-specific

* `AdpType` distinguishes prepositions from postpositions, but also a few other types. It is used in a number of treebanks, but the usage is not consistent and I have some doubts whether it is useful. Many languages have a strong preference towards either pre- or postpositions.
* `AdvType` potentially useful in many languages but currently almost unused.
