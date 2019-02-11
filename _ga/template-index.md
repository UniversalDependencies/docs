---
layout: base
title:  'Irish UD'
udver: '2'
---

# UD for Irish <span class="flagspan"><img class="flag" src="../../flags/svg/AQ.svg" /></span>

## Tokenization and Word Segmentation

In Irish, in general, words are delimited by whitespace characters. Description of exceptions follows:

* Some punctuation marks are attached to a neighbouring word. The word and the punctuation mark are taken together as one token. For example,  _D'_  (contraction for _do_ in _d'ith_ "ate"), _b'_ (in _b'fhearr_ "would prefer") and _O'_ (in surnames) are recognised as single tokens. Abbreviations surch as _srl._ "etc." or _i.n._ "p.m." are also recognised as one token. 

* Note that compound prepositions (_os\_cionn_ "above", _in\_aice_ "beside", etc)  are split into two tokens for UD v2, as are some placenames that the tagger recognises (e.g. _Cill\_Dara_) or a limited number of mwes (_chomh\_fada\_is_ "as long as; _cé\_is\_moite_ "except for"). 

The Irish POS-tagger used in the Irish Dependency Treebank retains these as single tokens and so must be mapped accordingly as the treebanks develop concurrently.

## Morphology

### POS Tags

The UD part-of-speech (POS) tagset is an extension of the The Google Universal POS tagset (Petrov
et al., 2012) and contains 17 POS tags. 
The tags for the Irish Dependency Treebank is based on the PAROLE Morphosyntactic Tagset (ITÉ,
2002). 

(Table to be inserted here) A mapping from this tagest to the UD tagset for use in the IUDT is given in: Lynn, Teresa and Jennifer Foster, _Universal Dependencies for Irish_ In Proceedings of the 2nd Celtic Language Technology Workshop 2016, Paris, France.

The following is a summary of some specific/ unintuitive choices made to map Irish data conform to Universal POS tags for UDv2:

* The AUX tag is used for the Copula only. All other verbs (including substantive verb _bí_ "to be" are tagged as VERB).
* Verbal adjectives are tagged as ADJ
* The following particles are tagged as PART: adverbial (_go mall_), verbal (_ná déan_), vocative (_a Sheosamh_), comparative (níos déanaí), superlative (_is déanaí_), numeral (_a haon_), relative (_a chonaic sé_), infinitive (_a dhéanamh_), degree (_a luaithe), name (Seosamh Mac Grianna)
* Verbal nouns are tagged as NOUN
* _ag_ in use with verbal nouns to form a gerund in progressive aspectual phrases are tagged as ADP
* demonstrative pronouns are tagged as PRON (_sin an fadhb_, _Thug sé sin faoi deara_)
* demonstrative determiners, on the other hand, are tagged as DET along with all other determiners (_an leabhar sin_)



---

### Features

---

Inflection in Irish mainly occurs through suffixation, but initial mutation through lenition and eclipsis is also common. Lenition is a phonological change that softens or weakens the articulation of a consonant. The eclipsis process renders voiced segments as nasalised and voiceless segments as being voiced (Stenson, 1981, p.18). A prominent feature of Irish which influences inflection, is the existence of two sets of consonants,
referred to as "broad" and "slender" consonants. Consonants can be slenderised by accompanying the consonant with a slender vowel, either _e_ or _i_. Broadening occurs through the use of broad vowels; _a_, _o_ or _u_. In general, there needs to be vowel harmony (slender or broad) between stem endings and the initial vowel in a suffix. 

* _buail_ "hit"  _ag bualadh na liathróide_ "hitting the ball" (Verbal Noun)
* _buail_ "hit"  _buaileadh an liathróid_ "the ball was hit" (Impersonal Form)

#### VERBS

Verbs inflect for number and person, as well as mood and tense. Verbs can incorporate their subject, inflecting for person and number through suffixation. Such forms are referred to as synthetic verb forms. Most verbs tend to incorporate a subject when it is first person singular or plural. These synthetic forms are generally restricted to the Present Tense, Imperfect Tense, Conditional Mood and Imperative Mood.

* _scríobh_ "write"
* _scríobhaim_ "I write"
* _scríobhfaimid_ "we will write"

However, second person singular and plural subjects are incorporated in some verb tenses and moods:
* _nigh_ "wash"
* _niteá_ "you used to wash" (Past Habitual)
* _nígí!_ "(you pl.) wash!" (Imperative)

Tense is also marked by lenition on some verb forms:
* _dún_ "close"
* _dhún mé_ "I closed"
* dhúnfainn "I would close"


Lenition occurs after the negative particle _ní_:
* _tugaim_ "I give"
* _ní thugaim_ "I do not give"
* _tabharfaidh mé_ "I will give"
* _ní thabharfaidh mé_ "I will not give"

Eclipsis (initial mutation) occurs following clitics such as interrogative particles (an, nach); complementisers (go, nach); and relativisers (a, nach) (Stenson, 1981,pp. 21-26). 

* _an dtuigeann sé?_ "does he understand?"
* _nach dtuigeann sé_ "that he does not understand".
* _go dtabharfadh sé_ "that he would give"





#### NOUNS

Modern Irish uses three cases: Nominative, Genitive and Vocative. The nominative form is sometimes
regarded as the "common form" as it is now also used for accusative and dative forms (See [Case]() for a description of 'Case=NomAcc'). Nouns in Irish are divided into five classes, or declensions, depending on the manner in which the genitive case is formed. In addition, there are two grammatical genders in Irish - masculine and feminine. Case, declension and gender are expressed
through noun inflection. For example, _páipéar_ "paper" is a masculine noun in the first declension. Both lenition and slenderisation are used to form the genitive singular form: pháipéir. 

* _an dochtúir_ "the doctor"
* _cóta an dochtúra_ "the doctor's coat"
* _an fheoil_ "the meat"
* _boladh an feola_ "the smell of the meat"
* _an coinín_ "the rabbit"
* _eireaball an choinín_ "the rabbit's tail"
* _an siopa_ "the shop"
* _cúl an tsiopa_ "the back of the shop"
* _Máire_ "Mary"
* _a Mháire!_ "Mary!" (Vocative)

In addition, possessive determiners cause nominal inflection through lenition, eclipsis and prefixation. 

* _teach_ "house"
* _mo theach_ "my house"
* _ár dteach_ "our house"
* _ainm_ "name"
* _a hainm_ "her name"
* _a n-ainm_ "their name"



#### Adjectives 

In general, adjectives follow nouns and agree in number, gender and case. Depending on the noun they modify, adjectives can also inflect. The Christian Brothers (1988, p.63) note eight main declensions of adjectives. They can decline
for genitive singular masculine, genitive singular feminine and nominative plural.

* _bacach_ "lame"
* _bacaigh_ (Gen.Sg.Masc)
* _bacaí_ (Gen.Sg.Fem)
* _bacacha_ (Nom.PL).

Comparative adjectives are also formed through inflection:

* _láidir_ "strong" / _níos láidre_ "stronger"
* _déanach_ "late" / _is déanaí_ "latest"


#### Prepositions 

Irish has simple prepositions (e.g. _ar_ "on|) and compound prepositions (e.g. _in aghaidh_ "against"). Most of the simple prepositions can inflect for a pronominal object that indicates person and number (known as prepositional pronouns or pronominal prepositions), thus including a nominal element. Compare _le_ and _leis_:

* _bhí sé ag labhairt le fear_ "he was speaking with a man"
* _bhí sé ag labhairt leis_ "he was speaking with him"

These forms are used quite frequently, not only with regular prepositional attachment where pronominal prepositions operate as arguments of verbs or modifiers of nouns and verbs, but also in idiomatic use where they express emotions and states.

* _tá brón orm_ "I am sorry"  (lit. `is sorrow on-me')
* _tá súil agam_ "I hope"



---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/LCODE-comparison.html) LANGUAGE UD treebanks:

  * [LANGUAGE-A](../treebanks/LCODE_a/index.html)
  * [LANGUAGE-B](../treebanks/LCODE_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
