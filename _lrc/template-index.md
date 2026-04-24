---
layout: base
title:  'Northern Luri UD'
udver: '2'
---
# UD for Northern Luri <span class="flagspan"><img class="flag" src="../../flags/svg/IR.svg" /></span>
## Tokenization and Word Segmentation

* Words are delimited by whitespace. Punctuation marks (periods, question marks) are segmented as separate tokens.
* There are no multiword tokens in this treebank.
* There are no empty nodes used.
* Clitic pronouns and enclitic copulas are written attached to their host with `=` or `-` (e.g., `=mo`, `=ēm`, `-é`), but are tokenized as separate tokens in the treebank. Each such clitic receives its own line with the appropriate UPOS tag (PRON or AUX) and morphological features.

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---
## Morphology
### Tags

* The following UPOS tags are used in this treebank: ADJ, ADP, ADV, AUX, CCONJ, DET, NOUN, NUM, PART, PROPN, PRON, PUNCT, SCONJ, VERB.
* The following UPOS tags are **not** used: INTJ, SYM, X.
* **PART** is used for clitics and particles that function as case markers or discourse particles. These include the negation/object marker *né*, enclitic definiteness/specificity markers (e.g., `=ê`, `=ē`, `=é`, `-é`), and the discourse particle *Na*. Many PART tokens carry `ExtPos=ADP` when functioning as postpositions or case markers.
* **AUX** covers the copula *būdan* (to be) and its enclitic present-tense forms (e.g., `=ēm`, `=a`), the progressive auxiliary *dāštan*, and the prospective/future auxiliary *xāstan*. The clitic copula forms (e.g., `=a`, `=ēm`) can appear as the sole root of a clause and are tagged AUX even in that position.
* **DET** is used for demonstratives (e.g., *i*, *ū*, *ya*) and quantifiers (e.g., *gérd* `PronType=Tot`, *hama* `PronType=Tot`, *yé* `Definite=Ind`). These are distinguished from PRON by their attributive (prenominal) function. Pronouns that stand alone as nominal heads are tagged PRON.
* **PRON** includes personal pronouns (free and enclitic possessive forms such as `=mo`, `=m`, `=ēš`), reflexive pronouns (*xot*), and indefinite pronouns (*hiška*). Possessive clitics carry `Poss=Yes`.
* Adjectives (ADJ) appear as both prenominal modifiers (`amod`) and as predicative complements (`xcomp`). Comparative adjectives carry `Degree=Cmp`; base forms carry `Degree=Pos`.
* There are no verbal forms tagged as ADV or NOUN. Verbal nouns and infinitival forms are tagged VERB with `VerbForm=Inf`.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---
### Features

* **NOUN**: inflects for `Number` (Sing, Plur) and `Definite` (Def, Spec). Definiteness is typically marked by enclitic suffixes rather than free-standing articles.
* **VERB**: carries a rich set of inflectional features. The following are attested:
  * `Aspect`: Imp (imperfective), Perf (perfect), Prog (progressive), Prosp (prospective)
  * `Mood`: Ind (indicative), Imp (imperative), Sub (subjunctive), Opt (optative)
  * `Tense`: Pres, Past, Fut
  * `Person`: 1, 2, 3
  * `Number`: Sing, Plur
  * `VerbForm`: Fin, Inf
  * `Voice`: Act (active), Pass (passive)
  * `Polarity`: Pos, Neg (negation encoded on the verb itself)
* **PRON**: encodes `PronType` (Prs, Ind), `Person` (1–3), `Number` (Sing, Plur), `Poss` (Yes), `Reflex` (Yes), and `Case` (Acc) for reflexive forms.
* **ADJ**: attests `Degree` (Pos, Cmp).
* **DET**: encodes `PronType` (Dem, Tot, Art) and `Definite` (Ind) for the indefinite article *yé*.
* **ADP**: carries `ExtPos=ADP` on PART tokens that function as postpositions in a larger phrase.
* **NUM**: no features beyond POS are annotated in the current release.

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---
## Syntax

* The primary word order is SOV. The root of a sentence is almost always a finite VERB or a clitic copula (AUX).
* **Subjects** are tagged `nsubj` (for active clauses) and `nsubj:pass` (for passive clauses). Subjects are predominantly NOUN, PRON, or PROPN.
* **Objects** are tagged `obj` (direct object) and `iobj` (indirect object). The object marker *né* (PART) is used to mark specific/definite direct objects, attached via the `case` relation.
* **Oblique arguments** use `obl`, with the subtype `obl:tmod` for temporal modifiers.
* **Copula constructions**: non-verbal predication is handled via the copula *būdan* and its clitic forms, tagged AUX with the relation `cop`. Predicate nominals and predicate adjectives are the head of the clause, with the copula attached as a dependent. Clitic copulas (e.g., `=ēm`, `=a`) can also appear as the root of the clause directly.
* **Light verb constructions**: complex predicates consisting of a nominal or adjectival element plus a light verb are annotated using `compound:lvc` (e.g., *némâz mēka* 'prays'). The nominal element is the `compound:lvc` dependent of the light verb.
* **xcomp** is used for predicative complements — both nominal (NOUN) and adjectival (ADJ) — in secondary predication constructions.
* **Possessive clitics** (e.g., `=mo`, `=m`, `=ēš`) attach to their nominal host and are annotated as `nmod:poss`.
* The following relation subtypes are used:
  * `nsubj:pass` — passive subject
  * `nmod:poss` — possessive nominal modifier
  * `compound:lvc` — light verb construction
  * `acl:relcl` — relative clause modifier
  * `acl:lvc` — adjectival light verb construction
  * `obl:tmod` — temporal oblique modifier

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---
## Treebanks

There are [N](../treebanks/lrc-comparison.html) Northern Luri UD treebanks:
  * [Northern Luri-A](../treebanks/lrc_a/index.html)
  * [Northern Luri-B](../treebanks/lrc_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
