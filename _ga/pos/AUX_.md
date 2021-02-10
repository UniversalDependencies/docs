---
layout: postag
title: 'AUX'
shortdef: 'auxiliary verb'
udver: '2'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "ga/pos/AUX.html"
---

Irish does not have auxiliary verbs per se. Therefore what could be considered "auxiliary" verbs in other languages (I have to go, I am going) are not labelled as AUX in the Irish data. However, the v2 guidelines posit that Copula verbs should be labelled as AUX instead of VERB. Copula usage is extremely frequent in Irish, and as all copular verbs in UD are recognised as Auxiliaries, we tag the copula as AUX.

There are two verbs _to be_ in Irish: the substantive verb _bí_, which inflects for tense, mood and person as per all Irish verbs and the copula _is_,  which only has two tensed forms - present/future and past/conditional. For that reason, the Irish POS tagset differentiates the copula by using the POS tag AUX and labelling the substantive verb as VERB. In the literature on Irish syntax, there is some discussion over the Irish copula's syntactic role, whether it is a verb or a linking particle (Carnie, 1997). The role normally played is that of a linking element between a subject and a predicate.

_Bí_, as a verb, uses separate particles in negative and interrogative constructions with all tense and mood forms.
However, as the copula does not inflect for mood, gender and number in the same way, it uses its own forms in these constructions.

The main forms are: 
* _is_ (positive - present/ future)
* _ní_ (negative - present/ future)
* ba (positive - conditional/ past)
* níor (negative - conditional/ past)
* _an_ (interrogative/ positive - present/ future)
* _ar_ (interrogative/ positive - conditional/ past)
* _nach_ (interrogative/ negative - present/ future)
* _nár_ (interrogative/ negative - conditional/ past).


Our analysis follows a copula-predicate-subject analysis as per Uí Dhonnchadha (2009), which applies to other constructions that we list here: 
* Classificatory constructions: _Is lá deas é_ "It is a nice day"  [lit. `is day nice it']
* Ownership constructions: _Is liomsa é_ "It is mine"  [lit `is with-me it']
* Fronting constructions: _Is ise a chonaic sé_ "It is she whom he saw" [lit. `Is her REL saw he']
* Identification constructions: _Is iad na buaiteoirí_ "They are the winners"  [`is them the winners']
* Idiomatic use: _Is maith liom tae_ "I like tea" [`is good with-me tea']
<!-- Interlanguage links updated Čt lis 12 09:42:51 CET 2020 -->
