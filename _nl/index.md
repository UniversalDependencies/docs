---
layout: base
title:  'Dutch UD'
udver: '2'
---

# UD for Dutch <span class="flagspan"><img class="flag" src="../../flags/svg/NL.svg" /></span>

## Tokenization and Word Segmentation


* Words are delimited by whitespace or punctuation
* Words do not contain spaces, although some lemma's for multi-word expressions do (_au serieux, dat wil zeggen, onder ander, onder veel, ter plaatse, tot en met_)
* Words (e.g. abbreviations, names, URLs etc.) may contain arbitrary punctuation signs (http://www.speelgoedmuseum.be, vroeg-renaissance, o.a., ex-VU&ID)
* No multiword tokens occur (i.e. forms like _ten_ are treated as a single token, not as _te+een_)

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.


---

## Morphology


### Tags

* **ADJ** (XPOS=ADJ) is used for adjectives. Adjectives occur as prenominal modifiers, as predicates, as seperable verb-particles, as adverbs, as part of fixed expressions and names. Also, in cases where an adjective functions as noun (_om Nederlandstaligen te pesten_) the POS is still ADJ. Ordinal number words such as _eerste, 60ste_ (XPOS=TW|rang) are also ADJ.
* **ADP** (XPOS=VZ) is used for prepositions and postpositions. They introduce nominal and verbal modifiers. They also occur as seperable verb-particles, as part of fixed expressions and names. The verbal inflexion element _te_ is also an ADP.  In prepositional phrases such as _ten opzichte van_ _ten_ and _van_ are ADP and _opzichte_ is a NOUN. 
* **ADV** (XPOS=BW) is used for adverbs. Also, some adverbial pronouns (R-pronouns) such as _daar, er, ergens, waar_ are ADV. 
* **AUX** (XPOS=WW) is used for 
    * perfect tense auxiliaries _hebben_ and _zijn_
    * the passive tense auxiliaries _worden_ and _zijn_ and _krijgen_ (in so-called cases of _krijgen-passive_ such as _U krijgt een bewegwijzering toegezonden_)
    * the modal verbs _kunnen, zullen, moeten, mogen_ (The treebank annotation on which the conversion to UD is based does not distinguish between auxiliaries and main verbs. Here we take a conservative approach in labeling only these modals as auxiliaries. )
    * the copula verb _zijn_ (UD allows only one copula verb per language, even though traditional Dutch syntax lists several verbs as copula-verbs.)
* **CCONJ** (XPOS=VG|neven) is used for coordinating conjunctions such as _en_ and _of_, _zowel_ (X _als_ Y). (ISSUE: Note that _als_ in this context is labeled SCONJ as it is XPOS=VG|onder)
* **DET** (XPOS=LID, XPOS=VNW|prenom) is used for words that are part of a noun phrase and function as determiner. They are:
   * words that have XPOS LID in the original data (_de, het, een_). These are words traditionally seen as determiners in Dutch
   * Prenominal pronouns (_deze, welke, meerdere, sommige_) with the exception of possessive pronouns (_mijn_). They are labeled PRON. 
   * ISSUE: In multi-word determiner expressions such as _maar weinig_, _helemaal geen_, _al mijn_, both words are DET. The modifiers should be ADV and _mijn_ should be PRON. 
   * ISSUE: Numeric elements such as +11,77 or 26% (XPOS=SPEC|symb) are labeled as DET if their grammatical function is det, where this should be NUM. (Note that regular numeric values such as 11 or 26 have XPOS=TW and are labeled NUM.)
* **INTJ** (XPOS=TSW) Elements that are not part of the syntactic structure such as _ach, verrek, jazeker_
* **NOUN** (XPOS=N|soort) Nouns can be the head of a variety of dependents, such as subject, object, oblique, etc. 
* **NUM** (XPOS=TW|hoofd). Tokens such as _1, 0,80, +4,20 -1, 1.000, 040-12280, drieduizend, iv, twaalf_. Note that elements such as _eerste_ are labeled ADJ. 
* **PART** is not used. In particular, seperable verb prefixes are assigned their regular POS and are a compound:prt dependent of the verb. 
* **PRON** (XPOS=VNW) is used for 
   * possessive pronouns
   * pronominal elements that do not occur in prenominal position but are depedents of a verb, like personal and impersonal pronouns (_ik, u, iemand _)
* **PROPN** (XPOS=N|eigen, SPEC|deeleigen) is used for proper names (_Achterberg_) and the parts of multi-word names (_ Gerrit Achterberg_). When used as adjective (_Amsterdamse_), names are labeled ADJ. 
* **PUNCT** (XPOS=LET) is used for punctuation. 
* **SCONJ** (XPOS=VG|onder) is used for subordinating conjunctions (_als, dat, of, omdat, toen_).  
   * ISSUE: in multi-word expressions such as _dan wel_ _dan_ is VG|onder but could also be VG|neven and thus CCONJ with seems more appropriate as it also introduces a cc in syntax. 
* **SYM** (XPOS=SPEC|sym, SPEC|afgebr, SPEC|vreemd, LET) is used for symbols (), foreign words (_unit, vici, walkover_), incomplete words (_welzijns-, zorg-_) and interpunction that does not introduce a punc relation in syntax (i.e. as it is part of a name/title (_ZinderZlam !_) or a multi-word unit (_en / of_) ). 
* **VERB** (XPOS=WW) is used for verbs that are not AUX. Note that adjectively used verbs and nominalized verbs are VERB (_passende maatregelen, het verplaatsen van voorwerpen_).  
* **X** (XPOS=SPEC|afk) is used for abbreviations (_ v.Chr., o.a., nr._) 

Detailed documentation of the decisions w.r.t. POS-tags in the original data can be found in the [D-COI POS-tagging and lemmatization manual](https://www.let.rug.nl/vannoord/Lassy/POS_manual.pdf)

### Features

* **Abbr=Yes** for abbreviations (POS=X, XPOS=SPEC|afk)
* **Case=Acc,Nom** for PRON (Nom for XPOS=VNW|nomin, Acc for XPOS=VNW|obl). 
* **Definite=Def,Ind** for DET (Def for XPOS=LID|bep, Ind for XPOS=LID|onbep)
* **Degree=Pos,Cmp,Sup** for adjectives (POS=ADJ, Pos for XPOS=ADJ|basis, Sup for ADJ|sup, Cmp for ADJ|comp) 
* **Gender=Com,Neut** for NOUN and PROPN, Com for N|onz, Neut for N|onz, Com,Neut for N|genus 
* **Person=1,2,3** for PRON (1 for XPOS=VNW|1, 2 for XPOS=VNW|2,2v,2b, 3 for XPOS=VNW|3,3p,3v,3p,3o
* **PronType=Int,Prs,Ind,Rel,Dem** for PRON (Dem for demonstratives, VNW|aanw, Rel for relative pronouns, VNW|betr, Prs for personal and possessive pronouns, VNW|pers and VNW|bez, Ind for indefinite pronouns,  VNW|onbep, Int for interoggative pronouns, VNW|vb). 
* **Number=Sing,Plur** for AUX, NOUN, VERB, PROPN, Sing for WW|ev, WW|met-t, N|ev, Plur for WW|mv, N|mv 
* **Poss=Yes** for PRON with VNW|bez 
* **Reflex=Yes** for PRON with VNW|refl 
* **VerbForm=Inf,Fin,Part** for AUX and VERB with Inf for WW|inf, Fin for WW|pv and Part for WW|od or WW|vd 

Detailed documentation of the decisions w.r.t. features in the original data can be found in the [D-COI POS-tagging and lemmatization manual](https://www.let.rug.nl/vannoord/Lassy/POS_manual.pdf)

## Syntax

The Dutch treebanks are automatically converted from annotated and manually corrected treebanks. Detailed documentation of the  the original syntactic annotation is in the [syntactic annotation manual](http://www.let.rug.nl/~vannoord/Lassy/sa-man_lassy.pdf) of the Lassy project. The data included in the UD treebanks can be explored using the [PaQu](https://paqu.let.rug.nl:8068/xpath) interface, which supports querying both the original and UD annotation. 

* **acl, acl:relcl** acl is used for phrases headed by a verb modifying a noun. These can be prenominal (as in _thans geldende rentestand_) postnominal (as in _de vraag of de rente zal stijgen_). acl:relcl is used for relative clauses. In the original syntactic annotation these are nodes with an _mod_ dependency relation that occur as sister to a nominal head, and which have a category ppres, ppart (prenominal), or cp, oti (postnominal) or rel (relative clauses). Verbs without dependents in prenominal position are considered to be amod. 
* **advcl**  is used for phrases that occur as modifying phrases (adjuncts) and are dependents of a verbal head. In the original annotation they have relation _mod_ and they can be of category cp, oti, ppart, among others. 
* **advmod**  is used for adverbs and adverbial phrases modifying a verb. The POS of advmod elements is almost always ADV or ADJ. 
* **amod**  is used for adjectives and other elements modifying a noun. The POS of amod elements is usually ADJ, but ADV and NOUN and others occur as well. ADV is used for elements such as _slechts (5 euro), vele (kookboeken), zo'n (25 optredens)_ and occurs in nominalisations (_het niet doen terugkeren_, where _niet_ is amod of the verb _terugkeren_, which itself is being used nominatively), and is used for adverbial pronouns (_de verlenging ervan_) 
* **appos** is used for appositions. In the original annotation, the relation app is used for a wide range of nominal phrases occurring in postnominal position (_de fotograaf Philip Mechanicus, Nooteboom's debuut 'Philip en de anderen', de jaren 1979-1981, de wethouder cultuur, presentatie Slibreeks, Hans Groenewegen, dichter en publicist, ZUiderzinnen, Festival van het woord, zondag 18 september 2005_. All these are mapped to the appos dependency relation, even though this stretches the intended use of appos in UD. 
* **aux, aux:pass** aux is used for auxiliaries as defined above in the section on POS tags. Note that this implies that auxiliaries are dependents of the main verb with which they co-occur. In the original annotation, no distinction between verbs and auxiliaries is made, and auxiliaries always have a sister that is a clause headed by the main verb. Note that this also means that elements such as subjects, complementizers, and even the marker '_te_' become dependents of the main verb, and not the auxiliary. 
* **case** is used for prepositions (ADP) that introduce a prepositional phrase. The preposition is a dependent of the head of the nominal phrase. Where there is both a preposition and a postposition (_door de eeuwen heen_, _om hem heen_) both elements are case dependents of the nominal head. In cases where the nominal element is replaced by an R-pronoun (_er_ etc), the R-pronoun precedes the preposition, and may be nonadjacent to the preposition  (_U doet er verstandig aan_). Note that this is a source of non-projective annotations. 
* **cc** is used for coordination words such as _en, of, maar_. 
* **ccomp** is used for complement clauses that are dependents of a verb. Complement clauses are phrases with relation vc in the original annotation and that are headed by a finite verb or a te-infinitive, so they can be of category cp, whsub, ti, oti. In ccomp clauses, there is no controlled subject. 
* compound:prt is used for seperable verbal prefixes (_ groeide uit, aan te wijzen_) and the non-verbal part of phrasal verbs (_ op prijs stellen, bekend staan, kenbaar maken_)
* **conj** is used for conjuncts. 
* **cop** is used for the copula _zijn_ only. Thus, the copula is a dependent of the predicate. If the copula is preceded by the inflection marker _te_, the marker also becomes a dependent of the predicate (In _ wordt aangeraden waakzaam te zijn_, we have (waakzaam,mark,te) ) 
* **csubj** is used for clausal subjects. Clausal subjects are sometimes introduced by expletive _het_ (marked as expl), as in _het blijft onduidelijk wat Japix bedoelt_. Clausal subjects can be of category cp, whsub, ti, or oti in the original annotation. 
* **det** is used for determiners, ie for elements with DET POS-tag, as explained above. 
* **expl, expl:pv** Expletives are _het_ or _er_ when used to introduce a clausal subject (_het is verstanding u te laten adviseren_, _u dient er rekening mee te houden dat..._) expl:pv is used for inherent reflexives (_ richt zich op, bevindt zich in, scheidt zich af, jaagt NP tegen zich in het harnas_) 
* **fixed** is used for the non-initial parts of multi-word expressions, such as _ten aanzien van_, _voor zover_, _dan wel_, _fine fleur_) Also, titles of books and other works of art and some institutions are annotated as fixed expressions (_De ontdekking van de hemel, Faculteit Kunst en Cultuur_) and some amounts (_EUR  37,50, 15 uur_) Note that the decision on what to label as fixed or not follows largely from the original annotation (ie phrases with category mwu where the parts are not labeled as proper names).  Also note that fixed elements can in fact be coordinated (_ maandag 18 t/m zaterdag 23 april 2005_, where _april 2005_ is shared between to two conjuncts in the original annotatin) and that discontinous fixed expressions exist (exclusively in the so-called _wat-voor_ construction as in _wat is dit voor een kutfilm_)
* **flat** is used for the non-initial tokens of multi-word proper names (_Kees van Kooten_) and other multi-word expressions that contain at least one proper name. In particular, in dates like _20 augustus 2000_ , 20 is the head with augustus and 2000 as flat dependents, as augustus is a name. Also, some titles of works of art are labeled flat, if at least one of the tokens was labeled as SPEC|deeleigen in the original annotation. ISSUE: there is some inconsistency between when a multi-word unit introduces flat or fixed dependents, but this is caused at least in part by the underlying annotation.
* **iobj** is used for indirect objects that are NOT introduced by a preposition. The original annotation has both prepositional (_geef het boek aan haar_) and nominal (_geef haar het boek_) obj2 constituents. In UD, only the latter are iobj, while the former are obl dependents. 
* **mark** is used for subordinating conjunctions (_dat, omdat, wanneer, hoewel, etc._). The word _om_ is also a mark if it introduces a te-infinitive. The word _te_ preceding a verb is also a mark dependent of the verb. As auxiliaries take no dependents, the _te_ that may precede an auxiliary is attached, somewhat counterintuitively, to the main verb (_na door het moeras gedwaald te hebben_, here _te_ is a dependent of _gedwaald_)
* **nmod, nmod:poss** nmod is used for nominal and prepositional phrases modifying a noun (_een neiging to dalen, de rente in de VS_). In _het Dow Jones gemiddelde_, Dow is an nmod dependent of _gemiddelde_. Note also that some nouns can be used as adjective as in _de afzijdige waarnemer_, where _afzijdige_ is a NOUN and thus an nmod dependent of _waarnemer_. In _Enkele malen_ the pronoun _Enkele_ is a modifier of the noun in the original annotation, and thus also labeled as nmod.  Nmod:poss is used for possessive pronouns (_hun oude boeken_) en genitives (_Nootebooms debuut_). 
* **nsubj, nsubj:pass** Nsubj is used for the nominal subject of finite sentences. Nsubj:pass is used for the subject of passives. Clausal subjects are labeled csubj.
* nummod Nummod is used for NUM elements occurring in pre-nominal position (_tien arrestaties, 450.000 mark_) In _zeven miljard gulden_ we have _zeven_ as nummod dependent of _miljard_, while _miljard_ (a NOUN) is a nmod of _gulden_. 
* **obj** is used for the direct object of verbal heads (_winst boeken, _een shock oplopen_). Note that reflexives are labeled as obj if the verb is not inherently reflexive (in _zich emanciperen_, _zich_ is an obj). 
* **obl, obl:agent** Obl is used for prepositional arguments and adjuncts of a verbal head (_klopt met de werkelijkheid,_ ). In (temporal) nominal adjuncts can appear without preposition (_enkele malen_), these are also obl. Obl:agent is used for the door-phrase that can be present in passives (_hij moet door zijn vrouw tot kalmte worden gebracht_). As the underlying annotation does not mark such prepositional phrases, the labeling is based on heuristics and may contain errors. 
* **orphan** is used in elliptic constructions where the syntactic head has been elided and more than one dependent remains. The leftmost dependent is attached to the preceding constituent, while the remaining dependents are attached as orphan to the initial dependent (In _850 fondsen boekten winst tegenover 512 een verlies_, _een verlies_ is an orphan dependent of _512_ which itself is a _conj_ dependent of _boekten_). 
* **parataxis** is used to label utterances that do not form a syntactic unit, but consist of a number of phrases for which no obvious dependency label can be given( In _dit in verband met de langere levensduur van de vrouw_, _dit_ is the root, with the rest of the phrase headed by _levensduur_ being a parataxis dependent of _dit_). Note that in cases of ellipsis, there is a preceding conjunction which also contains a predicate that can be seen as identical to the elided element. In parataxis constructions, this is not the case. Parataxis is also used in attribution, as in _Het deksel was er afgeslagen, zei Rijkers_ where the speech verb _zei_ is a parataxis dependent of _afgeslagen_. 
* **punct** is used for punctuation signs. 
* **root** is the root of the utterance. This is usually the main verb, but in copula constructions it is the head of the predicate. 
* **xcomp** is used for the head of non-finite verbal complements of verbs (_de burgemeester wil een traditie handhaven_, _de debiteuren staan te dringen_, _hij vraagt om een krediet beschikbaar te stellen_), and for predicative complements of non-copula verbs (_Fennema werd raadslid_, _de aandeelhouders vonden het bod onaanvaardbaar_). In the enhanced dependencies, the subject of xcomp dependents that are non-finite clauses are added. For other predicative elements no controlled subject is identified. 



---

## Treebanks

There are [2](../treebanks/nl-comparison.html) Dutch UD treebanks:

  * [UD_Dutch-Alpino](../treebanks/nl_alpino/index.html)
  * [UD_Dutch-LassySmall](../treebanks/nl_lassysmall/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code and the treebank code in the file name.

---
