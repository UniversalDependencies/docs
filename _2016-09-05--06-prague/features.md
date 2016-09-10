---
layout: base
title:  'Features in UD v2'
---

# Features in UD v2

## Renaming existing features and/or values

* `Aspect`: values `Pro` and `Prog` are highly confusing. Rename Pro?
* Yoav has argued that `Definite=Red` is a rather weird way of marking of what is otherwise called the construct state. Any better solution?
* `Negative` either rename to `Polarity` (and keep values `Pos` and `Neg`), or keep the name but use only one value `Yes`. Positive polarity is rarely marked morphologically, isn't it? So `Negative=Pos` probably just marks words that can take the negative morpheme but do not have it. This value is currently used in 13 treebanks.
* TO DISCUSS: Is there a better solution than `NumType=Gen`? What is `NumType=Pers` in Irish? (Defined but not used.)

## Adding new values to existing features

* TO DISCUSS: `Aspect`: DurPerf (tr), DurPerfProg (tr), DurProg (tr), Freq (hu), ProgRapid (tr), Rapid (tr), Res (cu)
* TO DISCUSS: Chinese "cases" Advb, Comp, Rel
* What is `Case=Equ` in Turkish? It is [not documented](../tr/feat/Case.html), yet it occurs in the data.
* TO DISCUSS: `Definite=2` in Hungarian. Description: definiteness-like agreement of verbs with a second person object in [Hungarian](hu-feat/Definite). Hungarian verbs have to be conjugated in harmony with the definiteness of the object, making a difference between a definite object (_nézem a filmet_ “I am watching the film”), an indefinite object (_nézek egy filmet_ “I am watching a film”) and a second person object (_nézlek téged_ “I am watching you”). So `Definite=2` is actually not about definiteness proper, maybe it should be `Person[obj]`. Perhaps we should leave this value specific to Hungarian.
* TO DISCUSS: `Mood`: Abil (tr), AbilCnd (tr), AbilDes (tr), AbilGen (tr), AbilGenNec (tr), AbilImp (tr), AbilNec (tr), AbilPrs (defined for tr but not used), Gen (tr), Gen-Nec (defined but not used; hyphen!!!), GenNec (tr), Int (ga), Inter (zh), Prs (tr)
* TO DISCUSS: `Number=Count` in Bulgarian.

## Adding new features

* `Abbr=Yes` (abbreviation) is not language-specific and is currently used in 12 treebanks: ar, cs, cs_cac, cs_cltt, da, et, fi, fi_ftb, fo, la_ittb, pl, ro.
* `Evidentiality` currently used only in Turkish but it seems like this is an important feature in non Indo-European languages.
* `Foreign` is not language-specific and is currently used in 13 treebanks: ar, cs, cs_cac, da, de, es, et, fi, fo, hi, nl, sl, sl_sst. The values should be discussed though.
* TO DISCUSS: `NumForm=Digit|Roman|Word`. Used in 12 treebanks: ar, ca, cs, cs_cac, es_ancora, et, la_ittb, nl, pt, ro, sl, ta. Inconsistency in Estonian: `NumForm=Letter` instead of `Word`.
* TO DISCUSS: `PartType`: is it particle or participle? Currently used in ga, da, nl, ro.
* TO DISCUSS: `Polite` is used in 9 treebanks: ca, da, de, es, es_ancora, eu, hi, sa, ta. Turkish has `Register` which may be the same thing.

## Comparison with UniMorph

Ideally a mapping of the features that exist in both systems.

## Stuff to check

* Does Hungarian have `Case=Abs`?

## Inventory of features that will stay language-specific

* `AdpType` distinguishes prepositions from postpositions, but also a few other types. It is used in a number of treebanks, but the usage is not consistent and I have some doubts whether it is useful. Many languages have a strong preference towards either pre- or postpositions.
* `AdvType` potentially useful in many languages but currently almost unused.
* `Clitic` specific to Finnish
* `ConjType` used only in Czech
* `Connegative` Finnish and Estonian
* `Derivation` specific to Finnish
* `Dialect` used only in Irish
* `Echo=Rdp` (reduplicative), used in Hindi and Turkish
* `Form` specific to Irish
* `HebBinyan` specific to Hebrew (but I believe it could be converted to aspect and voice)
* `HebExistential` specific to Hebrew
* `HebSource` debugging feature
* `Hyph=Yes` used only in a few treebanks
* `InfForm` specific to Finnish
* `NameType` used only in Czech
* `NounType` specific to Irish
* `NumValue` used in Czech and Arabic
* `PartForm` specific to Finnish
* `Position` used only in Romanian
* `Prefix=Yes` specific to Hebrew
* `PrepCase` used in Catalan, Czech, Polish, Portuguese, Spanish
* `PrepForm` specific to Irish (maybe it could be renamed to `AdpType`, which is used elsewhere)

### All layered features

We may want to standardize some of the layers but they seem to be de-facto standardized anyway.

* `Gender[dat], [erg], [psor]`
* `Number[abs], [dat], [erg], [psed], [psor]`
* `Person[abs], [dat], [erg], [psor]`
* `Polite[abs], [dat], [erg]`
