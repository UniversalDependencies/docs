---
layout: base
title:  'Features in UD v2'
udver:  '2'
---

# Features in UD v2

We propose for v2:

* Rename [u-feat/Negative]() to `Polarity` and rename individual values of `Aspect`, `VerbForm` and `Definite`.
* Remove `Tense=Nar` (but keep the other values of [u-feat/Tense]()).
* For a number of existing features, add new values that may be or have already been needed in some languages.
* Add four new features to the universal set of features: evidentiality, politeness, abbreviation and foreign.
* A number of other potential changes is suggested for general discussion but not really proposed yet.

The proposals in this chapter are based on

1. experience with applying the v1 features (see also the [issue tracker](http://github.com/UniversalDependencies/docs/issues?q=is%3Aissue%20label%3Afeatures))
2. survey of language-specific features and values used in current UD treebanks (especially those that are also documented)
3. draft proposal from the <a href="http://www.unimorph.org/" target="_blank">UniMorph project</a>, which has similar goals as UD features (<a href="http://www.unimorph.org/doc/Sylak-Glassman_2016_-_UniMorph_Schema_User_Guide.pdf" target="_blank">Sylak-Glassman 2016</a>; see below for a comparison of UniMorph and UD features)

Another reference that could contribute to the universal features is the [GOLD ontology](http://linguistics-ontology.org/gold/2010); see also [the general project page](http://linguistics-ontology.org/). In particular, items in the ontology under Morphosemantic property and Morphosyntactic property roughly correspond to our features.

## Renaming existing features and/or values

See the [issue 219](http://github.com/UniversalDependencies/docs/issues/219) for related discussion.

* [u-feat/Aspect](): values `Pro` (prospective, used in Basque) and `Prog` (progressive, used in Basque, Turkish and Chinese) are highly confusing.
  I propose to change the prospective value to `Aspect=Prosp`, following the label used in UniMorph.
* [u-feat/Negative](): current proposal – rename the feature to `Polarity` (and keep values `Pos` and `Neg`).
  Another option would be to keep the name but use only one value `Yes` because positive polarity is rarely marked morphologically.
  `Negative=Pos` looks weird and it probably just marks words that can take the negative morpheme but do not have it in the given form.
  Nevertheless, `Negative=Pos` is currently used in 13 treebanks so we probably want to keep it but rename the feature to `Polarity`.
* [u-feat/VerbForm](): rename `Trans` (transgressive) to `Conv` (converb).
  Transgressive is a term that comes from Slavic languages and is alien to e.g. Turkish or Hindi where functionally similar forms exist.
  It turns out that even within Slavic linguistics, the term transgressive is not widely used (the Slavic languages naturally have their
  native terms; the translation _transgressive_, of Latin-German-English etymology, is almost unknown outside Czech, Slovak and Sorbian).
  English literature on Slavic languages sometimes uses the term _gerund_ but it is absolutely confusing and unsuitable because it is
  similar neither in form nor in function to the form we mark `VerbForm=Ger` in English and Spanish (and BTW these are also quite different
  from each other, but at least Spanish has the term _gerundio_ as its own, not only as English translation).
  More neutral terms are adverbial participle or _converb_ (Haspelmath, 1995), so I propose to relabel these forms `VerbForm=Conv`.
* [u-feat/Definite](): rename `Red` (reduced) to `Cons` (construct state); see the
  [issue 135](http://github.com/UniversalDependencies/docs/issues/135) for related discussion.
* [u-feat/NumType](): Remove `NumType=Gen`, replace it by a narrower (and positively-defined) `NumType=Fold` for adjectival numerals like [cs] _dvojí, trojí_ "twofold, threefold".
* TO DISCUSS: What is `NumType=Pers` in Irish? (Defined but not used.)

## Adding/removing values to/from existing features

* [u-feat/Animacy]()
  * Add `Animacy=Hum` (human).
    We currently have three values of animacy, `Anim` (animate), `Inan` (inanimate) and `Nhum` (non-human).
    The last one is used so far only in Polish. As a side effect, it restricts the meaning of `Anim` to human (also
    called personal) nouns. While it is not unusual that feature meaning slightly shifts across languages (e.g. plural
    means "more than one" in some languages and "more than two" in others), it will be more intuitive to divide the
    Polish nouns into `Hum`, `Nhum` and `Inan`. More importantly, there are languages (e.g. Yuwan, a Ryukyuan language)
    that only distinguish human vs. non-human, and the latter includes inanimates.
    On the other hand, languages like Czech will keep their animate vs. inanimate two-way distinction.
    The precise meaning will thus remain
    language-specific, but more appropriate labels will now be available.
* [u-feat/Case]()
  * Add `Case=Equ` (equative, means "X-like", "similar to X", "same as X"). It is already used in UD Turkish and it is also proposed in UniMorph.
  * Add `Case=Cmp` (comparative, means "than X"). It occurs in Dravidian and Northeast-Caucasian languages; it is proposed in UniMorph.
  * TO DISCUSS: Chinese "cases" Advb, Comp, Rel.
* [u-feat/Degree]()
  * Add `Degree=Equ` (equative, means "as X as"; note that it marks the adjective and it is distinct from the equative case, which marks
    the standard of comparison). One of the examples in UniMorph is Estonian _<b>pikkune</b> (pikkus+ne)_ "as tall as".
    UD Estonian contains 6 occurrences of _pikkune_ but it does not define equative as a language-specific feature; it uses simply `Degree=Pos` here.
* [u-feat/Definite]()
  * Add `Definite=Spec` (specific indefinite, e.g. "a certain stick"). Occurs e.g. in Lakota, proposed in UniMorph. In languages where it is used
    the value `Ind` is interpreted as non-specific indefinite, i.e. "any (one) stick".
  * TO DISCUSS: `Definite=2` in Hungarian.
    Description: definiteness-like agreement of verbs with a second person object in [Hungarian](hu-feat/Definite).
    Hungarian verbs have to be conjugated in harmony with the definiteness of the object, making a difference between
    a definite object (_nézem a filmet_ “I am watching the film”), an indefinite object (_nézek egy filmet_ “I am
    watching a film”) and a second person object (_nézlek téged_ “I am watching you”). So `Definite=2` is actually not
    about definiteness proper, maybe it should be `Person[obj]`. Perhaps we should leave this value specific to
    Hungarian.
* [u-feat/Number]()
  * Add `Number=Count` from Bulgarian (and Macedonian). It is known variously as "counting form", "count plural" or "quantitative plural" (Sussex and Cubberley 2006, p. 324).
    It is a special plural form of nouns if they occur after numerals: _tri stola_ "three chairs" vs. _stolove_ "chairs".
    (The form originates in the Proto-Slavic dual but it should not be marked `Number=Dual` because 1. the dual vanished from Bulgarian and 2. the form is no longer semantically tied to the number two.)
  * Add `Number=Tri` (trial). Occurs in pronouns of several Austronesian languages; proposed in UniMorph.
  * Add `Number=Pauc` (paucal, means "a few"). Proposed in UniMorph.
  * Add `Number=Grpa` (greater paucal, means "more than several but not many"). Occurs in Sursurunga, an Austronesian language. Proposed in UniMorph.
  * Add `Number=Grpl` (greater plural, means "many, all possible"; precise semantics varies across languages). Proposed in UniMorph.
  * Add `Number=Inv` (inverse number, i.e. non-default for that particular noun). Occurs e.g. in Kiowa. Proposed in UniMorph.
* [u-feat/VerbForm]()
  * Add `VerbForm=Gdv` (gerundive, not gerund) in Latin and Ancient Greek.
  * Add `VerbForm=Vnoun` for verbal nouns other than infinitives (also called _masdars_ by some authors, e.g. Haspelmath, 1995).
    In UD v1 we were advising to use `VerbForm=Ger` for them, using the English gerunds as model. However, the term _gerund_
    is rather confusing: in Spanish (and other Romance languages?) it denotes the present participle and should be thus labeled
    `Tense=Pres|VerbForm=Part`; some Slavists use it to denote converbs (adverbial participles), which we now propose to label
    `VerbForm=Conv` (previously `VerbForm=Trans`).
  * Using `VerbForm=Ger` is discouraged and alternatives should be considered first. However, the feature is still available in UDv2
    and can be used if the alternatives do not seem acceptable. The feature may be removed in future versions but comprehensive
    investigation has to be done first.
    * Observations from UD 1.4:
      `VerbForm=Ger` occurs in most of the Romance languages (Catalan, Spanish, Galician, Italian, Portuguese, Romanian) and Latin.
      I assume that in all these languages the form and function is similar to the Spanish _gerundio_, hence it should be replaced
      by `VerbForm=Part|Tense=Pres` (but I am unsure whether it can be extended to Latin).
      It occurs in one Slavic language (Polish) and it should be replaced by `VerbForm=Vnoun` there. The same feature could be used
      in all Slavic languages but verbal nouns are currently not distinguished there.
      It occurs in two Germanic languages (English, Danish) and I do not know whether it can be relabeled as verbal noun there.
      Finally, it also occurs in Irish, Sanskrit, Tamil, Kazakh and Turkish (I am not able to judge what should happen there if
      `VerbForm=Ger` is not available).
  * TO DISCUSS: `VerbForm=PartFut|PartPast|PartPres` in Hungarian. These should probably be two features, `VerbForm=Part` and `Tense=Fut`, as in other UD languages.
  * TO DISCUSS: `VerbForm=Cop` in Irish. There is no documentation so we will need some input from Teresa if we want to do anything with it.
  * TO DISCUSS: `VerbForm=Stem` currently only one occurrence in Swedish.
    Verb stems also occur regularly in Hindi but they have the function of adverbial participles (converbs, transgressives) there, so `VerbForm=Conv` should be used for them.
* [u-feat/Mood]()
  * Add `Mood=Pur` (purposive, means "in order to"). Occurs in Amazonian languages; proposed in UniMorph.
  * TO DISCUSS: Add `Mood=Int` (intentive, indicates that the speaker strongly intents for the action of the verb to be realized). Occurs in Tonkawa; proposed in UniMorph.
  * TO DISCUSS: `Mood=Int` in Irish (what does it mean? Interrogative?)
  * TO DISCUSS: `Mood=Inter` in Chinese (what does it mean?)
  * Add `Mood=Adm` (admirative; expresses surprise, irony or doubt). Occurs in Albanian, other Balkan languages, and in Caddo (Native American from Oklahoma). Proposed in UniMorph.
  * TO DISCUSS: Add `Mood=Per` (permissive; means "may, is permitted").
  * TO DISCUSS: Add `Mood=Ded` (deductive, inferential, speculative; means "[I believe that it] ought to, must be").
  * TO DISCUSS: Add `Mood=Sim` (simulative, means "as if").
  * Do not add `Mood=Abil`, which is currently used in UD Turkish. The Turkish data should use `Mood=Pot` (potential) instead.
  * Do not add sequences of mood markings, which are currently used in Turkish and may be needed in other agglutinating languages. Leave them language-specific.
    [tr] AbilCnd, AbilDes, AbilGen, AbilGenNec, AbilImp, AbilNec, AbilPrs (all of these should start with Pot instead of Abil), GenNec.
  * TO DISCUSS: `Mood=Prs` (persuasive) in Turkish. Reportedly similar in meaning to imperative, but tries to persuade the addressee rather than issuing a direct command.
    But it could be also analyzed as a politeness distinction (comment by John Sylak-Glassman), perhaps `Polite=Elev` (see below).
    Hence we should be careful and at least discuss this more with Çağrı before we possibly add the value.
* [u-feat/Tense]()
  * Do not add `Tense=Aor` (aorist), despite its current usage in Ancient Greek and Turkish.
    It is a confusing term with different meanings in grammars of different languages.
    In Slavic languages we use normal `Tense=Past` to denote aorist.
    In Turkish it is the unmarked non-past form.
  * Do not add sequences of tense markings, which are currently used in Turkish and may be needed in other agglutinating languages. Leave them language-specific.
    [tr] AorPast, FutPast.
  * Remove `Tense=Nar`. It has not been used anywhere yet. In Turkish, for which it was intended, the renarrative past is encoded as
    `Evidentiality=Nfh|Tense=Past`. And we are proposing to adopt evidentiality as a new universal feature.
* [u-feat/Aspect]()
  * Add `Aspect=Iter` (iterative). It is already used in Hungarian UD, although it is called frequentative there
    (`Aspect=Freq`). It is called _iterative_ in UniMorph and I also think the term iterative is more common cross-linguistically,
    although I have not checked Hungarian grammar. (Note: Iteratives also exist in Czech with this name and meaning but they can
    be formed only from imperfective verbs and they are usually not classified as a separate aspect; they are just `Aspect=Imp`.)
    Hungarian example: _üt_ "hit", _<b>ütöget</b>_ "hit several times".
  * Add `Aspect=Hab` (habitual). Proposed in UniMorph and in Turkish documentation (although not used in current Turkish data).
    It is the most accurate description for the simple present in English, and it said to be useful for a variety of other languages.
  * TO DISCUSS: Add `Aspect=Rapid`? Used in UD Turkish, suffix _-iver,_ Kornfilt (1995, p.361) calls this rapid or sudden aspect.
    John: In another grammar, Göksel and Kerslake (2005, p.79), the -iver morpheme seems to have a considerably wider range of meaning
    than simply `rapid' or `sudden.' In fact, it seemed to me to imply probability that some event would occur.
    Native Turkish speakers should deffinitely weigh in on this.
  * TO DISCUSS: Add `Aspect=Dur`? Proposed in Turkish documentation but in the data it appears only as the first part of morpheme sequences DurPerf, DurPerfProg and DurProg.
  * Do not add `Aspect=Res` (resultative) from Old Church Slavonic. It is used there for forms that are arguably `Aspect=Perf`.
    And it should not be used to mark a particular form because in Slavic languages aspect is primarily a lexical feature (perfective vs. imperfective lemmas).
  * Do not add sequences of aspect markings, which are currently used in Turkish and may be needed in other agglutinating languages. Leave them language-specific.
    [tr] DurPerf, DurPerfProg, DurProg, ProgRapid.
* [u-feat/Voice]()
  * Add `Voice=Mid` (middle voice), currently used in fo, grc, grc_proiel, sa.
  * Add `Voice=Antip` (antipassive): in ergative-absolutive languages, an ergative subject is demoted to an absolutive subject. Proposed in UniMorph.
  * Add `Voice=Dir` (direct). Used in direct-inverse voice systems, e.g. in North American languages. Proposed in UniMorph.
    Direct means that the argument that is higher in salience hierarchy is the subject.
    Example hierarchy: human 1st person – 2nd – 3rd – non-human animate – inanimate.
  * Add `Voice=Inv` (inverse). Used in direct-inverse voice systems, e.g. in North American languages. Proposed in UniMorph.
    Inverse voice marking means that the argument lower in the hierarchy functions as subject.
  * TO DISCUSS: `Voice=Auto` (ga).
  * Do not add sequences of voice markings, which are currently used in Turkish and may be needed in other agglutinating languages. Leave them language-specific.
    [tr] CauPass.
* [u-feat/PronType]()
  * Add `PronType=Emp` (emphatic) from Romanian. There are similarities with reflexive and demonstrative pronouns / determiners.
    Example: _himself_ as in "He himself did it." Czech _sám_, Romanian _însuși_.
  * Add `PronType=Exc` (exclamative) from Italian (but it can be defined in other languages, too). It expresses the
    speaker's surprise towards the modified noun, e.g. _what_ in "What a surprise!" In many languages, exclamative
    determiners are recruited from the set of interrogative determiners. Therefore, not all tagsets distinguish them.
  * NOTE: The Italian data in UD v1 contain three additional values of [Italian](it-feat/PronType): `Clit`, `Predet` and `Ord`.
    We do not propose to adopt these values as universal in UD v2. We propose to change the Italian guidelines so that these values
    are no longer needed. See [Issue 353](http://github.com/UniversalDependencies/docs/issues/353) for details.
* [u-feat/Person]()
  * Add `Person=0`. Proposed in UniMorph.
    Zero person is for impersonal statements, appears in Finnish as well as in Santa Ana Pueblo Keres.
    (The construction is distinctive in Finnish but it does not use unique morphology that would necessarily require
    a feature; the current UD Finnish also lives without it.) However, it is morphologically distinct in Keres (Davis 1964:75).
  * Add `Person=4`. Proposed in UniMorph.
    John: 4th person could be distinguished by additional, independently-needed features, such
    as obviation status (e.g. proximate [prx] or obviative [obv], which are not included in
    person features currently), so while the feature `4` is convenient and part of paradigmatic
    contrasts (e.g. in Navajo), it may not be strictly necessary. The features proximate (prx)
    and obviative (obv) should be included somehow if direct and inverse voice are allowed,
    since languages that mark these voice categories tend to also mark 3rd person arguments
    as proximate or obviative (esp. when all arguments in the clause are 3rd person).

## Adding new features

* `Evident` (evidentiality) is currently used only in Turkish but it seems like this is an important feature in non-Indo-European languages.
  We could take the values from UniMorph. At present we only need `Evident=Nfh` (non-first hand).
* `Polite` (politeness) is currently used in 9 treebanks: ca, da, de, es, es_ancora, eu, hi, sa, ta.
  UniMorph distinguishes four axes along which politeness may be scaled (see below), one of them covering another
  feature currently used in a few UD treebanks, `Style`.
  I propose to add, for the time being, the feature `Polite` with the UniMorph-like values from the speaker-referent
  axis, i.e. `Infm` (informal), `Form` (formal), `Elev` (elevated status of referent; interpreted as a subtype of
  `Form`), `Humb` (humbled status of speaker; subtype of `Form`). That will let us cover the Indo-European tu/vous
  pronouns, as well as part of Japanese honorifics.
  * TO DISCUSS:
    The Turkish treebank has `Register`, which resembles politeness/style in having values `Form` and `Inf`,
    contrasting e.g. the 3rd person verb forms _etmekte_ (`Form`) and _ediyor_ (`Inf`) "he is doing".
    However, it is possible that the _-mekte_ forms are restricted to more formal settings and do not
    directly reflect the relation between the speaker and the addressee. If this is true, then they
    are not covered by what we currently propose to cover under `Polite`.
* [Abbr=Yes](cs-feat/Abbr) (abbreviation) is not language-specific and is currently used in 12 treebanks: ar, cs, cs_cac, cs_cltt, da, et, fi, fi_ftb, fo, la_ittb, pl, ro.
* [Foreign](cs-feat/Foreign) is not language-specific and is currently used in 13 treebanks: ar, cs, cs_cac, da, de, es, et, fi, fo, hi, nl, sl, sl_sst.
  The values should be discussed though.
  The currently used values are `Foreign`, `Fscript` and `Tscript` but most treebanks use only the first one. Alternatively we could make it just a binary feature,
  `Foreign=Yes`, which it was originally.
* TO DISCUSS: `NumForm=Digit|Roman|Word`.
  The values can arguably be easily deduced from the word form; nevertheless, it is now used in 12 treebanks: ar, ca, cs, cs_cac, es_ancora, et, la_ittb, nl, pt, ro, sl, ta.
  Inconsistency in Estonian: `NumForm=Letter` instead of `Word`, which is used elsewhere.
* TO DISCUSS: `PartType` (particle type, not participle type). Given how diverse the [u-pos/PART]() category is, it
  would make sense to define its subcategories. Currently used in ga, da, nl, ro, with the following values:
  `Inf` (infinitive marker; used in ga, da, nl, ro),
  `Vbp` (used for separable verb prefixes in [nl] but they should be tagged `ADP`, not `PART`, and would not get this feature),
  `Ad`, `Cmpl`, `Comp`, `Cop`, `Deg`, `Num`, `Pat`, `Vb`, `Voc` (meaning unknown, no documentation; used in Irish).
  On the other hand, the function of the particle can sometimes (often?) be expressed using other features that already exist.
  For instance, the particles marking infinitives could have the feature `VerbForm=Inf`.
  Similarly, negative particles like [en] _not_ could have `Polarity=Neg`.
* TO DISCUSS: `Interrog` (interrogativity). In some sense it is parallel to (but separate from) polarity (negativity).
  It may mark independent question particles, which exist in some languages (but note that these could also be covered
  by `PartType=Int` if we approve the feature), as well as interrogative forms of verbs.
  These currently appear in Irish and are tagged `Mood=Int` there; however, the interrogative morphemes may probably
  be combined with other mood categories (examples? Turkish?), which supports interrogativity as a separate feature.
  It would not apply to interrogative pronouns, determiners and adverbs, which are already marked by `PronType=Int`—much
  like `Polarity=Neg` is not used where `PronType=Neg` is. Similarly to polarity, the feature is proposed in UniMorph.
  It has two values there, `Decl` and `Int`, but the former is not expected to be used frequently (similar to `Pos` in
  `Polarity`) because declarativeness is usually not marked.

## Comparison with UniMorph

General differences:

* We work "bottom-up". We wait for a feature to appear in a language (or source treebank), then we think about where to put it in the schema.
  They work "top-down". They surveyed literature on language typology and collected all features that could possibly occur in any natural language.
* Their schema "is responsible for capturing only the meanings of overt inflectional morphemes, which considerably limits the semantic space
  that must be formally described by the UniMorph Schema features."
  In contrast, we also include some features that are not inflectional but they provide a more fine-grained partitioning of the part-of-speech space, e.g. `PronType`.
* They build upon the Leipzig Glossing Rules and their labels can be applied, if needed, to words, morphemes or phrases.
  We focus on individual words and don't mark some complex forms that can be expressed only periphrastically.
  (But it is actually possible that UniMorph ignores periphrastic forms, too. They often stress that something is/is not
  distinguished by overt affixal morphology. So maybe there is no difference in this point.)
* We need fully qualified feature+value pair to get a unique string, e.g. `Degree=Sup` is something else than `VerbForm=Sup` or `Case=Sup`.
  They distinguish "dimensions" (our features) but their values are globally unique even without dimension name.
  They also have templatic features (combined of several atoms), and they often rely on feature (value) combinations.
  We have combined values too (e.g. `Gender=Masc,Neut`) but for us it expresses disjunction, used when we cannot select just one of the values.
  They have disjunction too, but they also mark conjunction of features, or elaboration, e.g. `IN+ABL`.

### UniMorph dimensions (draft v2)

* `Aktionsart`, values: `STAT` (stative), `DYN` (dynamic), `TEL` (telic), `ATEL` (atelic), `PCT` (punctual), `DUR` (durative), `ACH` (achievement), `ACCMP` (accomplishment), `SEMEL` (semelfactive), `ACTY` (activity). Aktionsart is a feature that we don't have in UD but it is closely related to our [Aspect](../u/feat/Aspect.html). Aspect in Slavic languages is treated as a lexical feature, change of aspect is considered a derivation. Perfective verbs in Slavic languages correspond to telic verbs in UniMorph, imperfective verbs correspond to atelic verbs and statives. However, aktionsart could be defined for other languages including English, while aspect is not marked in UD English.
* `Animacy`, values: `ANIM` (animate), `INAN` (inanimate), `HUM` (human), `NHUM` (non-human).
  In UD we don't have human but we do have the other three. We are now proposing to add `Animacy=Hum` to UD, see above.
* `Argument Marking` for head-marking languages. UniMorph uses templatic features `ARG`+`Case`+`Person`+`Number`, e.g. `ARGNO1S` means that the nominative argument of the current verb is 1st person singular. Available cases are nominative, accusative, absolutive, ergative, dative, benefactive. We mostly only need to annotate agreement of the verb with its subject, i.e. the nominative argument, and we use the `Person` and `Number` features of the verb for this. So far only Basque needs more, as the verbs may agree there with up to three arguments (absolutive, ergative and dative). We use the layered features, i.e. `Person[abs]`, `Person[erg]`, `Person[dat]`, `Number[abs]` etc.
* `Aspect`, values: `IPFV` (imperfective), `PFV` (perfective), `PRF` (perfect), `PROG` (progressive), `PROSP` (prospective), `ITER` (iterative), `HAB` (habitual).
  Their aspect + aktionsart is not compatible with our aspect, although we have a few values in common (perfect/ive, imperfective, progressive, prospective).
  We also mix aspect with tense by allowing the value `Tense=Imp`.
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
    The closest counterpart of the locative case in UniMorph is plain `ESS`.
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
  * They currently do not have
    temporal `Case=Tem` (hu) and
    distributive `Case=Dis` (hu).
  * We should add `Case=Equ` to the universal features. We already use it in Turkish.
    Similarly, we should add `Case=Cmp` for comparative ("than X"), occurring in Dravidian and Northeast-Caucasian languages.
  * We do not have `Case=Prp` for proprietive ("having X"), a positive counterpart of abessive, occurring in Australian languages.
    (But we have comitative `Case=Com` which can also be viewed as a positive counterpart of abessive.)
    There appears to be debate about whether proprietive is in fact inflectional or derivational.
    Blake (2001:156) cites only Kalkatungu (an extinct Pama-Nyungan language from Queensland) as a specific example.
    Moreover, Heine and Kuteva (2002:88) identify a historical grammaticalization pathway for comitative case to the sense of "having".
  * We do not have `Case=Avr` for aversive ("fearing X").
    Blake (2001:156) notes that this case is "common in Australian languages" but only provides Kalkatungu as an example.
  * As for the local cases, there are too many possible combinations and we should probably wait until the need for one of them arises.
* `Comparison`, values: `CMPR` (comparative), `SPRL` (superlative), `AB` (absolute for superlatives), `RL` (relative for superlatives), `EQT` (equative).
  We have `Degree=Cmp` for comparative, `Degree=Sup` for relative superlative (`SPRL+RL`) and `Degree=Abs` for absolute superlative (`SPRL+AB`).
  We also have `Degree=Pos` (positive) that denotes the basic degree, i.e. adjective that is not compared.
  This comes from traditional grammars of various languages, although it would be possible to tag such adjectives by omitting the `Degree` feature.
  We could not distinguish adjectives that cannot take the comparative/superlative morphemes, but in fact we avoid that distinction with most features.
  On the other hand, we do not have the equative degree (note that it marks the adjective and it is distinct from the equative case, which marks
  the standard of comparison). One of the examples in UniMorph is Estonian _<b>pikkune</b> (pikkus+ne)_ "as tall as".
  UD Estonian contains 6 occurrences of _pikkune_ but it does not define equative as a language-specific feature; it uses simply `Degree=Pos` here.
  We may want to define the value `Degree=Equ` and see if anyone uses it.
* `Definiteness`, values: `DEF` (definite), `INDF` (indefinite), `SPEC` (specific), `NSPEC` (non-specific).
  The last two are elaboration of indefinite. Specific indefinite: _a certain stick_; non-specific indefinite: _any stick but still only one, not many_.
  We have `Definite=Def` and `Definite=Ind`.
  If we include the distinction of specificity, it will be just one value cutting off the current `Ind`, maybe `Definite=Spec`.
  On the other hand, we have two peculiar values coming from the Prague Arabic Dependency Treebank.
  `Definite=Red` (reduced) is used for noun that is modified by another noun in genitive and has neither definite nor indefinite morpheme.
  This is also called the _construct state_ and appears in other Semitic languages, e.g. Hebrew.
  `Definite=Com` (complex) is used in _improper annexation / false iḍāfa_ (related to the construct state but more complex) in Arabic.
* `Deixis` subclassifies demonstrative pronouns, which in some languages are also used instead of 3rd person pronouns.
  We have only `PronType=Dem` (or `Prs`) but we do not distinguish the other dimensions at present.
  At least distance would make sense for the languages we already have in UD, but the original tagsets did not care about it.
  * `Distance`, values: `PROX` (proximate), `MED` (medial), `REMT` (remote).
  * `Reference Point`, values: `REF1` (speaker), `REF2` (addressee), `NOREF` (distal, i.e. neither speaker nor addressee),
    `PHOR` (phoric, i.e. either anaphoric or cataphoric; previously mentioned or to be disambiguated).
    This feature sometimes overlaps with distance and sometimes is explicitly separated.
  * `Visibility`, values: `VIS` (visible), `NVIS` (not visible).
  * `Verticality`, values: `ABV` (above the level plane of the speaker), `EVEN` (at the same level), `BEL` (below the level of the speaker).
* `Evidentiality`, values: `FH` (firsthand), `DRCT` (direct), `SEN` (sensory), `VISU` (visual), `NVSEN` (non-visual sensory), `AUD` (auditory),
  `NFH` (non-firsthand), `QUOT` (quotative), `RPRT` (reported), `HRSY` (hearsay), `INFER` (inferred), `ASSUM` (assumed).
  UD v1 does not have this feature, although we have `Mood=Qot` (et, lv) and `Tense=Nar` (re-narrative past tense; the value was intended
  for Turkish but in the end it was not used there, and language-specific `Evidentiality=Nfh` was introduced instead.
  We propose to make `Evidentiality` a universal feature in UD v2. Maybe we can just adopt the values used in UniMorph.
  We will have to check how it interacts with the quotative mood in Estonian and Latvian.
* `Finiteness`, values: `FIN` (finite), `NFIN` (nonfinite). We have `VerbForm=Fin` for finite, any other verbform is nonfinite.
* `Gender and Noun Class`, values: `MASC` (masculine), `FEM` (feminine), `NEUT` (neuter), `BANTU1-23` (noun classes in Bantu languages),
  `NAKH1-8` (noun classes in Nakh-Daghestanian languages). We have `Gender=Masc`, `Fem`, `Neut` for the three genders;
  in addition, we have `Gender=Com` for the common gender in Scandinavian languages, which only distinguish _neutrum_ (`Neut`) and _utrum_ (`Com`).
  At present we do not cover any Bantu or Nakh-Daghestanian language.
* `Information Structure`, values: `TOP` (topic), `FOC` (focus).
  We do not have a feature for information structure but there are not many languages where it is marked via overt affixal morphology.
* `Interrogativity`, values: `DECL` (declarative), `INT` (interrogative). Used for verbs.
  We do not have a feature for this. `PronType=Int` could be possibly abused to encode verbs with interrogative morpheme,
  but it would be much better not to mix the feature with pronominal types; we also don't mix `Negative=Neg` with `PronType=Neg`.
* Language-specific features `LGSPEC1`, `LGSPEC2` etc. UniMorph uses them to distinguish alternating forms whose selection is not
  tied to meaning. For example, genitive of German _Buch_ is either _Buchs_ or _Buches_. One form will be `LGSPEC1` and the other
  `LGSPEC2`. We do not have anything similar in UD.
* `Mood`, values: `IND` (indicative, `Mood=Ind`), `SBJV` (subjunctive, `Mood=Sub`), `REAL` (realis), `IRR` (irrealis), `AUPRP` (Australian purposive),
  `AUNPRP` (Australian non-purposive), `IMP` (imperative-jussive, `Mood=Imp`, `Mood=Jus`), `COND` (conditional, `Moos=Cnd`),
  `PURP` (general purposive, "in order to"), `INTEN` (intentive), `POT` (potential, `Mood=Pot`), `LKLY` (likely),
  `ADM` (admirative), `OBLIG` (obligative, `Mood=Nec`), `DEB` (debitive, `Mood=Nec`), `PERM` (permissive), `DED` (deductive), `SIM` (simulative, "as if"),
  `OPT` (optative-desiderative, `Mood=Opt`, `Mood=Des`).
  * We do not have realis and irrealis but I wonder whether we actually have to distinguish them from indicative and subjunctive, respectively.
  * There are no Australian languages in UD at present, and we do not encode the Australian purposive vs. non-purposive.
    The discussion in UniMorph suggests that the non-purposive vs. purposive opposition can be viewed as on par with
    the realis vs. irrealis and indicative vs. subjunctive oppositions.
  * Imperatives are direct commands for the addressee while hortatives and jussives include more suggestive forms,
    such as "let them/us X". They just conflate all three to `IMP` (imperative-jussive).
    We have a separate label for jussive but we only use it in Arabic. Nevertheless, Arabic also has the imperative, so it makes sense to distinguish the two values.
  * UniMorph conflates optative and desiderative into one mood, `OPT`, while we have both `Mood=Opt` and `Mood=Des`.
    UD Turkish uses both values but the Turkish documentation says that desiderative is morphologically identical to conditional, so it is questionable whether we want to keep `Des` there.
    In addition, optative is used in Finnish, Gothic, Ancient Greek and Sanskrit.
  * John's comment on conditional: ambiguous between designating the _protasis / condition_ ("if it rained"),
    and the _apodosis / result_ from that condition being fulfilled (", the game would be cancelled").
    Languages differ in whether the conditional applies to the protasis, the apodosis or both.
    Spanish uses the conditional for the protasis, but subjunctive imperfect for the apodosis.
  * UniMorph distinguishes debitive from obligative while we have only one corresponding value, necessitative.
  * Other moods that are used in UD Turkish: `Abil`, `AbilCnd`, `AbilDes`, `AbilGen`, `AbilGenNec`, `AbilImp`, `AbilNec`, `AbilPrs`,
    `Gen`, `GenNec`, `Prs`. The `Abil` should probably be replaced by the universal feature `Mood=Pot` (potential).
    `Prs` means persuasive, reportedly related to imperative but different in that we try to persuade the addressee to do something instead of just commanding.
  * We currently lack values for purposive, intentive, admirative, permissive, deductive and simulative, and we may want to add them.
* `Number`, values: `SG` (singular, `Number=Sing`), `PL` (plural, `Number=Plur`), `DU` (dual, `Number=Dual`), `TRI` (trial), `PAUC` (paucal),
  `GPAUC` (greater paucal), `GRPL` (greater plural), `INVN` (inverse).
  * We may want to add values `Number=Tri`, `Pauc`, `Grpa`, `Grpl`, `Inv`.
  * We have two additional values, `Ptan` (plurale tantum) and `Coll` (singulare tantum), which may be viewed as elaboration of `Sing` and `Plur`, respectively,
    and which encode an inherent property of nouns rather than inflection. Agreeing adjectives and verbs never take this value, they use `Sing` and `Plur` instead.
* `Part of Speech`, values: `N` (noun), `PROPN` (proper name), `ADJ` (adjective), `PRO` (pronoun), `CLF` (classifier), `ART` (article),
  `DET` (determiner), `V` (verb), `ADV` (adverb), `AUX` (auxiliary), `V.PTCP` (participle, verbal adjective), `V.MSDR` (masdar, verbal noun), `V.CVB` (converb, verbal adverb),
  `ADP` (adposition), `COMP` (complementizer), `CONJ` (conjunction), `NUM` (numeral), `PART` (particle), `INTJ` (interjection)
  * We do not have a separate tag for classifiers. I believe that we subsume them under nouns in UD Chinese.
  * We subsume articles within determiners but we distinguish them by `PronType=Art`.
  * We do not treat participles, verbal nouns and verbal adverbs as separate parts of speech.
    We distinguish them by the `VerbForm` feature and we allow language-specific guidelines to put them under `VERB`, or under `ADJ/NOUN/ADV`.
    Our v1 guidelines propose to call verbal nouns gerunds (`VerbForm=Ger`). This is motivated by the English gerunds but it should
    probably be revised because the term has quite different meaning in different languages, which causes confusion.
    On the other hand, I do not quite like the term _masdar_ used in UniMorph, which is taken from Arabic but not widely understood elsewhere.
    Perhaps `VerbForm=Vnoun` would be enough? (Note that infinitives can also be used like nouns in some languages; these would keep `VerbForm=Inf`.)
    In contrast, I find the term _converb_ (Haspelmath, 1995) quite appropriate and language-neutral. We currently use `VerbForm=Trans` (transgressive)
    but this term turned out to be known only in a few Slavic languages. So we may rename it to `VerbForm=Conv` (or maybe `VerbForm=Vadv`, verbal adverb, adverbial participle).
  * They have a tag for auxiliary verbs while we are now proposing to get rid of it.
  * Unlike us, they conflate coordinating and subordinating conjunctions in one tag `CONJ`.
    However, they have a separate tag for complementizers while we include them in `SCONJ`.
  * Like us, they distinguish `NUM`, `PART` and `INTJ`. They actually refer to us when explaining why they include these categories.
* `Person`, values: `0`, `1`, `2`, `3`, `4`, `INCL` (inclusive _we_), `EXCL` (exclusive _we_), `PRX` (proximate), `OBV` (obviative).
  We have only the classical 1st–3rd persons. Zero person is for impersonal statements, appears in Finnish as well as in Santa Ana Pueblo Keres.
  The fourth person is used in some languages to describe an otherwise third-person referent that is differentiated from other third-person referents.
  Clusivity could be encoded as a separate language-specific feature, which would be in line with UniMorph, which combines `1+INCL` or `1+EXCL`.
* `Polarity`, values: `NEG` (negative), `POS` (positive, affirmative). We have been calling the feature `Negative(ness)` but we propose to rename it to `Polarity` in UD v2.
* `Politeness`: ve have it only as a language-specific feature, used rarely.
  * Speaker-Referent Axis (whether or not the referent happens to also be the addressee).
    `INFM` (informal; the _tu_ 2nd person singular pronoun in Indo-European languages.
    `FORM` (formal; the _vous_ 2nd person singular pronoun in Indo-European languages.
    Sublevels of the formal level:
    `FORM+ELEV` (referent elevating; sonkeigo forms in Japanese).
    `FORM+HUMB` (speaker humbling; kenjougo forms in Japanese).
  * Speaker-Addressee Axis (not referring to the addressee).
    Japanese teineigo is an example of an addressee honorific system.
    `POL` (polite), `MPOL` (medium polite).
  * Speaker-Bystander Axis.
    `AVOID` (avoidance style, taboo language = used in the presence of anyone to whom the avoidance relationship applies, e.g. mother-in-law),
    `LOW` (low status = language used in the presence of only those having a low status),
    `HIGH` (high status = in the presence of the secondary chief(tess)),
    `STELV` (elevated status = in the presence of the primary chieftess),
    `STSUPR` (supreme status = in the presence of the primary chief).
    The neutral level is unspecified.
  * Speaker-Setting Axis; referred to as _register_ in sociolinguistics.
    `LIT` (literary, `Style=Form`), `FOREG` (formal register, `Style=Form`), `COL` (colloquial, `Style=Coll`).
    We have corresponding features in the section of language-specific extensions but they are currently used only in a few treebanks (cs, da, fi).
* `Possession` is a templatic feature that may incorporate features of the possessor such as person and number.
  We encode the same situation using the boolean feature `Poss=Yes`, and separate features for `Person`, `Number` etc.
  If it is necessary to distinguish them from same-named inflectional features of the possessive word, we use layered features on the `[psor]` ("possessor") layer:
  `Person[psor]`, `Number[psor]` etc.
  UniMorph defines the following combinations:
  `PSS1S` (possession by 1st person singular), `PSS2S`, `PSS2SM` (2nd person singular masculine), `PSS2SF`, `PSS2SINFM` (informal), `PSS2SFORM`,
  `PSS3S`, `PSS3SM`, `PSS3SF`, `PSS1D`, `PSS1DI` (dual inclusive), `PSS1DE` (exclusive), `PSS2D`, `PSS2DM`, `PSS2DF`,
  `PSS3D`, `PSS3DM`, `PSS3DF`, `PSS1P`, `PSS1PI`, `PSS1PE`, `PSS2P`, `PSS2PM`, `PSS2PF`, `PSS3P`, `PSS3PM`, `PSS3PF`.
  In addition, they define simple `PSSD` (possessive but without marking features of the possessor), and also
  `ALN` for alienable and `NALN` for inalienable possession. Alienable means that the ownership can change ("my house") while inalienable means
  that it cannot change ("my back").
* `Switch Reference`, values: `SS` (same subject), `DS` (different subject), `SSADV`, `DSADV`.
  When there are two verbs in a row, switch-reference is morphological marking of whether they have or do not have the same subject.
  We do not have this feature in UD.
* `Tense`, values: `PRS` (present, `Tense=Pres`), `PST` (past, `Tense=Past`), `FUT` (future, `Tense=Fut`),
  `IMMED` (immediate), `HOD` (hodiernal, i.e. today), `1DAY` (within one day), `RCT` (recent), `RMT` (remote).
  * They envisage combining their features, e.g. `FUT+HOD` or `PST+RCT`.
  * We currently only have present, past and future without the more specific values like recent and remote.
  * Moreover, we cover two present-aspect combinations that may have separate morphological forms and sometimes cannot be represented by `Tense` + `Aspect` because there
    is also the lexical aspect (as in Bulgarian). We would have to redesign our scheme and add aktionsart, or use two layered aspects on one word to solve this.
    The combinations are `Tense=Imp` (imperfect tense) and `Tense=Pqp` (pluperfect).
* `Valency`, values: `IMPRS` (impersonal), `INTR` (intransitive), `TR` (transitive), `DITR` (ditransitive), `REFL` (reflexive), `RECP` (reciprocal), `CAUS` (causative), `APPL` (applicative).
  At present we do not have a valency feature in UD. We only have a suggestion for a language-specific feature, with only two values,
  `Subcat=Intr` and `Subcat=Tran`, which are currently used only in UD Dutch.
  We do account for causativity and reciprocality in the `Voice` feature.
  We also have a boolean feature `Reflex=Yes` but most of the time we use it to mark reflexive pronouns.
  The `Valency` feature in UniMorph captures number of arguments (arity) of the verb: e.g. the causative morpheme adds one participant (the person who is forced to do the thing).
  The `Voice` feature in UD is more about switching roles of the participants. Obviously, the two features must interact with each other.
* `Voice`, values: `ACT` (active, `Voice=Act`), `MID` (middle, `Voice=Mid`), `PASS` (passive, `Voice=Pass`),
  `ANTIP` (antipassive), `DIR` (direct), `INV` (inverse),
  `AGFOC` (agent focus), `PFOC` (patient focus), `LFOC` (location focus), `BFOC` (beneficiary focus), `ACFOC` (accompanier focus), `IFOC` (instrument focus), `CFOC` (conveyed focus).

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
* `Variant`; `Variant=Brev` in Russian denotes the short-form adjective (_холоден_, as opposed to _холодный_), which
  are distinguished by definiteness in South Slavic, and by `Variant=Short` (vs. `Long`) in West Slavic. Maybe this
  opposition would deserve a Slavic-specific feature, `AdjForm=Short|Long`.
* `VerbType=Aux|Mod|Cop|Main`; currently used in Hebrew, Dutch and Latin; it has to be seen how much such a feature will be demanded if we remove the `AUX` tag.
* `Xtra=Junk` used in Hebrew

### All layered features

We may want to standardize some of the layers but they seem to be de-facto standardized anyway.

* `Gender[dat], [erg], [psor]`
* `Number[abs], [dat], [erg], [psed], [psor]`
* `Person[abs], [dat], [erg], [psor]`
* `Polite[abs], [dat], [erg]`

## References

* Blake, Barry J. 2001. _Case._ Cambridge: Cambridge University Press. 2nd edition.
* Davis, Irvine. 1964. The language of Santa Ana Pueblo (anthropological papers, no. 69). _Smithsonian
  Institution Bureau of American Ethnology, Bulletin 191: Anthropological Papers, Numbers
  68-74,_ Washington, DC: United States Government Printing Office, 53–190.
* Göksel, Asli and Kerslake, Celia. 2005. _Turkish: A Comprehensive Grammar._ New York: Routledge.
* Haspelmath, Martin. 1995. The converb as a cross-linguistically valid category.
  _Converbs in Cross-Linguistic Perspective: Structure and Meaning of Adverbial Verb Forms – Adverbial Participles, Gerunds –,_
  edited by Martin Haspelmath and Ekkehard König, Berlin: Mouton de Gruyter, Empirical Approaches to Language Typology, 1–56.
* Heine, Bernd and Kuteva, Tania. 2002. _World Lexicon of Grammaticalization._ Cambridge: Cambridge University Press.
* Kornfilt, Jaklin. _Turkish._ London and New York: Routledge, 1997.
* Sussex, Roland and Cubberley, Paul. 2006. _The Slavic Languages._ Cambridge University Press.
* Sylak-Glassman, John. 2016. _[The Composition and Use of the Universal Morphological Feature Schema (UniMorph Schema)](https://github.com/ckirov/UniMorph/blob/master/doc/Sylak-Glassman_2016_-_UniMorph_Schema_User_Guide.pdf)_ Working Draft v2, May 25 2016.
