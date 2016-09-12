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

* We work "bottom-up". We wait for a feature to appear in a language (or source treebank), then we think about where to put it in the schema. They work "top-down". They surveyed literature on language typology and collected all features that could possibly occur in any natural language.
* Their schema "is responsible for capturing only the meanings of overt inflectional morphemes, which considerably limits the semantic space that must be formally described by the UniMorph Schema features." In contrast, we also include some features that are not inflectional but they provide a more fine-grained partitioning of the part-of-speech space, e.g. `PronType`.
* They build upon the Leipzig Glossing Rules and their labels can be applied, if needed, to words, morphemes or phrases. We focus on individual words and don't mark some complex forms that can be expressed only periphrastically.
* We need fully qualified feature+value pair to get a unique string, e.g. `Degree=Sup` is something else than `Mood=Sup` or `Case=Sup`. They distinguish "dimensions" (our features) but their values are globally unique even without dimension name.

### UniMorph dimensions (draft v2)

* `Aktionsart`, values: `STAT` (stative), `DYN` (dynamic), `TEL` (telic), `ATEL` (atelic), `PCT` (punctual), `DUR` (durative), `ACH` (achievement), `ACCMP` (accomplishment), `SEMEL` (semelfactive), `ACTY` (activity). Aktionsart is a feature that we don't have in UD but it is closely related to our [Aspect](../u/feat/Aspect.html). Aspect in Slavic languages is treated as a lexical feature, change of aspect is considered a derivation. Perfective verbs in Slavic languages correspond to telic verbs in UniMorph, imperfective verbs correspond to atelic verbs and statives. However, aktionsart could be defined for other languages including English, while aspect is not marked in UD English.
* `Animacy`, values: `ANIM` (animate), `INAN` (inanimate), `HUM` (human), `NHUM` (non-human). In UD we don't have human but we do have the other three. We treat animacy as a scale of either two values (animate, inanimate), or three values (animate, non-human, inanimate). In the latter case (which so far appears only in UD Polish), the animate value is interpreted as human-only, while in other languages it includes animals. We could add the human value but note that this is not the only feature where a value has shifting semantic contents. For example, `Number=Plur` normally means "more than one", but in languages with dual it means "more than two".
* `Argument Marking` for head-marking languages. UniMorph uses templatic features `ARG`+`Case`+`Person`+`Number`, e.g. `ARGNO1S` means that the nominative argument of the current verb is 1st person singular. Available cases are nominative, accusative, absolutive, ergative, dative, benefactive. We mostly only need to annotate agreement of the verb with its subject, i.e. the nominative argument, and we use the `Person` and `Number` features of the verb for this. So far only Basque needs more, as the verbs may agree there with up to three arguments (absolutive, ergative and dative). We use the layered features, i.e. `Person[abs]`, `Person[erg]`, `Person[dat]`, `Number[abs]` etc.
* `Aspect`, values: `IPFV` (imperfective), `PFV` (perfective), `PRF` (perfect), `PROG` (progressive), `PROSP` (prospective), `ITER` (iterative), `HAB` (habitual). Their aspect + aktionsart is not compatible with our aspect, although we have a few values in common (perfect/ive, imperfective, progressive, prospective). We also mix aspect with tense by allowing the value `Tense=Imp`.
* `Case`
  * Core case: can be defined in terms of three "meta-arguments," S (subject), A (agent), and P (patient). Values:
    `NOM` (nominative; `Case=Nom`), `ACC` (accusative; `Case=Acc`), `ERG` (ergative; `Case=Erg`), `ABS` (absolutive; `Case=Abs`), `NOMS` (nominative, subject only).
    We have all these values, except that we do not distinguish `NOMS` from `NOM`.
  * Non-core, non-local case: `DAT` (dative; `Case=Dat`), `BEN` (benefactive; `Case=Ben`), `PRP` (purposive; `Case=Cau`),
    `GEN` (genitive; `Case=Gen`), `REL` (relative), `PRT` (partitive; `Case=Par`),
    `INS` (instrumental; `Case=Ins`), `COM` (comitative; `Case=Com`), `VOC` (vocative; `Case=Voc`),
    `COMPV` (comparative), `EQTV` (equative), `PRIV` (privative; `Case=Abe`), `PROPR` (proprietive),
    `AVR` (aversive), `FRML` (essive formal; `Case=Ess`), `TRANS` (translative; `Case=Tra`), `BYWAY` (essive modal).
    We currently lack values of 6 cases in this category, although equative seems to already occur in our Turkish data (if it is what `Case=Equ` refers to).
    Our causative (`Case=Cau`) might be (or overlap with) UniMorph's purposive.
    Our abessive (`Case=Abe`) is their privative; we use the term from Uralic languages, they from Australia.
    Our essive/prolative (`Case=Ess`, used in [hu, et, fi, eu]) is their essive formal.
    Their essive modal (`BYWAY`) comes from Hungarian and "marks the notion of 'by way of' a location;" I suspect that we subsume it within instrumental.
    Their relative (`REL`) "marks possessor and A role", hence it looks like a merger of genitive and accusative.
  * Local / place: `INTER` ("among"), `AT` ("at"), `POST` ("behind"), `IN` ("in"), `CIRC` ("near"), `ANTE` ("near, in front of"), `APUD` ("next to"),
    `ON` ("on"), `ONHR` ("on" horizontal), `ONVR` ("on" vertical), `SUB` ("under").
  * Local / distance: `REM` (distal), `PROX` (proximate).
  * Local / motion: `ESS` (essive), `ALL` (allative), `ABL` (ablative).
  * Local / aspect: `APPRX` (approximative), `TERM` (terminative), `PROL` (prolative/translative), `VERS` (versative).
  * UD has `Case=Loc`, which is used in a number of Indo-European languages (especially Slavic) but also in Basque, Turkish and others.
    It has mostly a locative meaning, where the placement and direction are not precisely specified. It can also have a non-locative meaning.
    There does not seem to be a direct counterpart of the locative case in UniMorph.
  * The UniMorph draft accounts for compositionality of locative morphemes in some languages: "from [the place] between us" could be encoded as _we_ + `INTER` + `ABL`.
    In contrast, we use established terms for some of the combinations but definitely cannot encode all possible combinations in all languages.
    Our local cases are:
    inessive (`Case=Ine`; `IN+ESS`); illative (`Case=Ill`; `IN+ALL`); elative (`Case=Ela`; `IN+ABL`);
    adessive (`Case=Ade`; `ON/AT+ESS`); allative (`Case=All`; `ON/AT+ALL`); ablative (`Case=Abl`; `ON/AT+ABL`);
    superessive (`Case=Sup`; `ON/ONVR+ESS`); sublative (`Case=Sub`; `ON+ALL`); delative (`Case=Del`; `ON/ONVR+ABL`);
    lative (`Case=Lat`; `ALL`, i.e. it says it's motion towards something, without distinguishing on/at/in/under);
    terminative (`Case=Ter`; `ALL+TERM`, i.e. it specifies motion up to some point, also called terminal allative).
  * They do not have additive `Case=Add` because they encode atomic meaning and additive is equal in meaning to illative.
    It is questionable whether we want to keep it in UD but I would keep it because it is actively used in UD Estonian, so there apparently is some demand.
  * Do they have
    temporal `Case=Tem` (hu);
    distributive `Case=Dis` (hu)?
  * We should add `Case=Equ` to the universal features. We already use it in Turkish
    Similarly, we should add `Case=Cmp` for comparative ("than X"), occurring in Dravidian and Northeast-Caucasian languages.
    `Case=Prp` for proprietive ("having X"), a positive counterpart of abessive, occurring in Australian languages.
    `Case=Avr` for aversive ("fearing X").
    As for the local cases, there are too many possible combinations and we should probably wait until the need for one of them arises.
* `Comparison`, values: `CMPR` (comparative), `SPRL` (superlative), `AB` (absolute for superlatives), `RL` (relative for superlatives), `EQT` (equative).
  We have `Degree=Cmp` for comparative, `Degree=Sup` for relative superlative (`SPRL+RL`) and `Degree=Abs` for absolute superlative (`SPRL+AB`).
  We also have `Degree=Pos` (positive) that denotes the basic degree, i.e. adjective that is not compared.
  This comes from traditional grammars of various languages, although it would be possible to tag such adjectives by omitting the `Degree` feature.
  We could not distinguish adjectives that cannot take the comparative/superlative morphemes, but in fact we avoid that distinction with most features.
  On the other hand, we do not have the equative degree (note that it marks the adjective and it is distinct from the equative case, which marks
  the standard of comparison). One of the examples in UniMorph is Estonian _<b>pikkune</b> (pikkus+ne)_ "as tall as".
  UD Estonian contains 6 occurrences of _pikkune_ but it does not define equative as a language-specific feature; it uses simply `Degree=Pos` here.
  We may want to define the value `Degree=Equ` and see if anyone uses it.

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
