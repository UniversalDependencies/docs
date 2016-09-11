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
* TO DISCUSS: `VerbForm=Trans`: Transgressive is a term that comes from Slavic languages and even there it is rare (Czech and Sorbian; other Slavic languages have the form too, but do not call it transgressive). English literature on Slavic languages sometimes uses the term _gerund_ but it is absolutely confusing and unsuitable because it is similar neither in form nor in function to the form we mark `VerbForm=Ger` in English and Spanish (and BTW these are also quite different from each other, but at least Spanish has the term _gerundio_ as its own, not only as English translation). More neutral terms are adverbial participle or _converb_, so I would suggest to rename it to `VerbForm=Conv`.

## Adding new values to existing features

* TO DISCUSS: `Aspect`: DurPerf (tr), DurPerfProg (tr), DurProg (tr), Freq (hu), ProgRapid (tr), Rapid (tr), Res (cu)
* TO DISCUSS: Chinese "cases" Advb, Comp, Rel
* What is `Case=Equ` in Turkish? It is [not documented](../tr/feat/Case.html), yet it occurs in the data.
* TO DISCUSS: `Definite=2` in Hungarian. Description: definiteness-like agreement of verbs with a second person object in [Hungarian](hu-feat/Definite). Hungarian verbs have to be conjugated in harmony with the definiteness of the object, making a difference between a definite object (_nézem a filmet_ “I am watching the film”), an indefinite object (_nézek egy filmet_ “I am watching a film”) and a second person object (_nézlek téged_ “I am watching you”). So `Definite=2` is actually not about definiteness proper, maybe it should be `Person[obj]`. Perhaps we should leave this value specific to Hungarian.
* TO DISCUSS: `Mood`: Abil (tr), AbilCnd (tr), AbilDes (tr), AbilGen (tr), AbilGenNec (tr), AbilImp (tr), AbilNec (tr), AbilPrs (defined for tr but not used), Gen (tr), Gen-Nec (defined but not used; hyphen!!!), GenNec (tr), Int (ga), Inter (zh), Prs (tr)
* TO DISCUSS: `Number=Count` in Bulgarian.
* TO DISCUSS: `PronType=Clit` (it), Emp (ro), Exc (it), Ord (it), Predet (it)
* TO DISCUSS: `Tense`: do we really need a value for aorist? The term is used in Slavic grammars but we can use the normal `Past` for it there, and I am afraid that if aorist is a universally available value, it won't be clear how it differs from simple past. However, grc and tr seem to have both `Aor` and `Past`. Turkish has `AorPast` and `FutPast` in addition.
* TO DISCUSS: `VerbForm=Cop` in Irish. Copula?
* `VerbForm=Gdv` (gerundive, not gerund) in Latin and Ancient Greek.
* TO DISCUSS: `VerbForm=PartFut|PartPast|PartPres` in Hungarian. Couldn't these be two features, `VerbForm=Part` and `Tense=Fut`?
* TO DISCUSS: `VerbForm=Stem` currently only one occurrence in Swedish. Verb stems also occur regularly in Hindi but they have the function of adverbial participles (converbs, transgressives) there.
* TO DISCUSS: `Voice=Auto` (ga), CauPass (tr)
* `Voice=Mid` middle voice, currently used in fo, grc, grc_proiel, sa.

## Adding new features

* `Abbr=Yes` (abbreviation) is not language-specific and is currently used in 12 treebanks: ar, cs, cs_cac, cs_cltt, da, et, fi, fi_ftb, fo, la_ittb, pl, ro.
* `Evidentiality` currently used only in Turkish but it seems like this is an important feature in non Indo-European languages.
* `Foreign` is not language-specific and is currently used in 13 treebanks: ar, cs, cs_cac, da, de, es, et, fi, fo, hi, nl, sl, sl_sst. The values should be discussed though.
* TO DISCUSS: `NumForm=Digit|Roman|Word`. Used in 12 treebanks: ar, ca, cs, cs_cac, es_ancora, et, la_ittb, nl, pt, ro, sl, ta. Inconsistency in Estonian: `NumForm=Letter` instead of `Word`.
* TO DISCUSS: `PartType`: is it particle or participle? Currently used in ga, da, nl, ro.
* TO DISCUSS: `Polite` is used in 9 treebanks: ca, da, de, es, es_ancora, eu, hi, sa, ta. Turkish has `Register` which may be the same thing.
* TO DISCUSS: `Strength` (of adjectives): cu, got, ro. In cu, it is used for the long vs. short Slavic adjectives, for which elsewhere `Variant=Short|Long` is used.

## Comparison with UniMorph

Ideally a mapping of the features that exist in both systems.

General differences:

* We need fully qualified feature+value pair to get a unique string, e.g. `Degree=Sup` is something else than `Mood=Sup` or `Case=Sup`. They distinguish "dimensions" (our features) but their values are globally unique even without dimension name.
* They build upon the Leipzig Glossing Rules and their labels can be applied, if needed, to words, morphemes or phrases. We focus on individual words and don't mark some complex forms that can be expressed only periphrastically.
* Their schema "is responsible for capturing only the meanings of overt inflectional morphemes, which considerably limits the semantic space that must be formally described by the UniMorph Schema features." In contrast, we also include some features that are not inflectional but they provide a more fine-grained partitioning of the part-of-speech space, e.g. `PronType`.

### UniMorph dimensions (draft v2)

* `Aktionsart`, values: `STAT` (stative), `DYN` (dynamic), `TEL` (telic), `ATEL` (atelic), `PCT` (punctual), `DUR` (durative), `ACH` (achievement), `ACCMP` (accomplishment), `SEMEL` (semelfactive), `ACTY` (activity). Aktionsart is a feature that we don't have in UD but it is closely related to our [Aspect](../u/feat/Aspect.html). Aspect in Slavic languages is treated as a lexical feature, change of aspect is considered a derivation. Perfective verbs in Slavic languages correspond to telic verbs in UniMorph, imperfective verbs correspond to atelic verbs and statives. However, aktionsart could be defined for other languages including English, while aspect is not marked in UD English.
* `Animacy`, values: `ANIM` (animate), `INAN` (inanimate), `HUM` (human), `NHUM` (non-human). In UD we don't have human but we do have the other three. We treat animacy as a scale of either two values (animate, inanimate), or three values (animate, non-human, inanimate). In the latter case (which so far appears only in UD Polish), the animate value is interpreted as human-only, while in other languages it includes animals. We could add the human value but note that this is not the only feature where a value has shifting semantic contents. For example, `Number=Plur` normally means "more than one", but in languages with dual it means "more than two".
* `Argument Marking` for head-marking languages. UniMorph uses templatic features `ARG`+`Case`+`Person`+`Number`, e.g. `ARGNO1S` means that the nominative argument of the current verb is 1st person singular. Available cases are nominative, accusative, absolutive, ergative, dative, benefactive. We mostly only need to annotate agreement of the verb with its subject, i.e. the nominative argument, and we use the `Person` and `Number` features of the verb for this. So far only Basque needs more, as the verbs may agree there with up to three arguments (absolutive, ergative and dative). We use the layered features, i.e. `Person[abs]`, `Person[erg]`, `Person[dat]`, `Number[abs]` etc.
* `Aspect`, values: `IPFV` (imperfective), `PFV` (perfective), `PRF` (perfect), `PROG` (progressive), `PROSP` (prospective), `ITER` (iterative), `HAB` (habitual).

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
* `PunctSide` used in ca, es_ancora, fi_ftb, nl
* `PunctType` used in ca, es_ancora, nl, ta; not consistent
* `Style` used in Czech, Danish and Finnish
* `Subcat` used only in Dutch
* `Typo=Yes` could be useful in all treebanks but we first need a general guideline for handling typos. Should the form in FORM be original, or fixed? And should we have a MISC attribute with the fixed or original form? See also [issue 330](https://github.com/UniversalDependencies/docs/issues/330).
* `Variant`; what is `Variant=Brev` in Russian?
* `VerbType=Aux|Mod|Cop|Main`; currently used in Hebrew, Dutch and Latin; it has to be seen how much such a feature will be demanded if we remove the `AUX` tag.
* `Xtra=Junk` used in Hebrew

### All layered features

We may want to standardize some of the layers but they seem to be de-facto standardized anyway.

* `Gender[dat], [erg], [psor]`
* `Number[abs], [dat], [erg], [psed], [psor]`
* `Person[abs], [dat], [erg], [psor]`
* `Polite[abs], [dat], [erg]`
