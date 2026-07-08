---
layout: base
title:  'Middle Persian UD'
udver: '2'
---

# UD for Middle Persian <span class="flagspan"><img class="flag" src="../../flags/svg/IR-KAVIANI.svg" /></span>

## Tokenization and Word Segmentation

- We have separated words by space. In the manuscripts depending on a scribe's preferences, words are separated by space, are directly adjacent, written together, or ligatures of a single word are separated by space (i.e. one word can look like many).
- Punctuation exists in Pahlavi texts with divergent use: for highlighting, for indicating a semantic unit, a change of language, or it can be a reading device. We have annotated punctuation as an independent token (represented by ",") unless it appears inside a word (represented by ";" following the given word). It is related to its nearest suitable head unless it clearly marks the end of the sentence, in case of which it depends on the root.
- Compounds are annotated as one word.

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags

The MPCD makes use of all PoS categories except for SYM (as of February 2026). Naturally, interjections ([u-dep/INTJ]()) are rare in a historical corpus of written texts.
- PART is used for
-- verbal negation ([u-dep/Neg]()) *nē* and the prohibitive particle ([u-dep/Mod](),[u-dep/Neg]()) *ma*, 
-- the optative particles ([u-dep/Mod]()), e.g. *ēw*, 
-- the enclitic focus marker ([u-dep/Emp]()) *=iz*,
--  and the grammatical particles ([u-dep/Vbp]()) *be* and *hamē*.
- Pronouns and determiners have been manually distinguished based on the syntactic analysis.
-- Attributes are linked by the so-called Ezāfe particle to their headword. In contrast to New Iranic languages, this is still an independent word, though it tends to be enclitic. This particle has been annotated as a determiner ([u-dep/DET]()). 
- Adpositions can be prepositions ([u-dep/Prep]()), postpositions ([u-dep/Post]()), and circumpositions ([u-dep/Prep,Circ]() and [u-dep/Post,Circ]()).
- Auxiliaries include the copula and tense-aspect marking auxiliaries. Even though Persian auxiliaries allow for a hierarchical analysis, we follow UD in annotating a flat structure (e.g. *raft ēstād hēnd* with *hēnd* as person number marker of the auxiliary *ēstād* forming the pluperfect of the verb *raft*).
-- Modal verbs are considered full verbs due to the different case frame they establish, which is identical to their independent use (e.g., *abāyistan* 'to be necessary' and 'must').
-- The existential verb 'to be there, to exist', which is also used in the possessive construction of the *mihi-est* type, is considered a full verb.
- We distinguish the following non-finite verb forms:
-- participle, which can also be used as a converb, and as an adjective or a noun;
-- infinitive (both the long and short infinitive), which can also be used as a necessitative and as a noun;
-- verbal noun in *-išn*, which can also be used as a necessitative and as a noun.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Agreement<br>
Middle Persian has little inflection.
- Adjectives and determiners rarely agree in plurality with their head.
- Subject and verb always agree in person. Number agreement is facultative in the 3rd person. Note that Middle Persian exhibits an ergative construction where the object is in agreement with the verb derived from the perfective participle.
- In nominal clauses, the copula can be omitted, which is very common with a 3rd person subject.


### Nominal Features (nouns, pronouns)

- Middle Persian nominals are neither marked for case, nor gender, with the following exceptions:
-- enclitic pronouns are inherently oblique ([u-dep/Acc]());
-- the 1SG personal pronoun generalised the oblique form *man* but there are few examples of the direct form *an* (marked as [u-dep/Nom]());
-- remnants of substantival case forms (notably kinship terms). We have annotated that form which is not continued in New Persian with the respective case marker ([u-dep/Nom]() for direct case; [u-dep/Acc]() for oblique case) as remnants are rare and often not used as would be expected.
-- there are a handful of nominals marked for sexus (e.g. *ašōnī* 'righteous ([u-dep/Fem]())'), probably in imitation of Avestan, the holy language of the Zoroastrians.
-- Proper names have been annotated for sexus if known.
- Number marking: marking of plurality is optional so that we only mark plurality ([u-dep/Plur]()) but not singularity ([u-dep/Sing]()).
- Definiteness: Middle Persian does not exhibit articles. However, the numeral 'one' develops to a marker of specificity, which has been annotated accordingly if applicable ([u-dep/Ind]() or [u-dep/Spec]()).
- Animacy has been annotated facultatively as a semantic feature. It is not morphologically marked but is known to have lexical effects, e.g., selection of adpositions.
- PronType is used with pronouns ([u-dep/PRON]()), determiners ([u-dep/DET]()), and in the case of the relativizers with subordinators ([u-dep/SCONJ]()).
- The [u-dep/Person]() feature is only annotated for personal pronouns (and verb forms). The pronoun of the 3SG can also appear as a demonstrative. It has been manually differentiated.
- The [u-dep/Reflex]() feature is only used with explicit reflexive pronouns, which are not marked for person and number and usually refer to the logical subject of the clause. All reflexive pronouns are phoric, i.e. there are no inherently reflexive verbs.
- Middle Persian texts make frequent use of resumptive pronouns and placeholders, which are annotated as [u-dep/dislocated:res](). Beside regular demonstratives, this also applies to the emphasizers *hamāg* 'all' (as in German _ich habe die Bücher <b>alle</b> gelesen_) or *xwad* 'self' (as in German _ich habe dieses Buch <b>selbst</b> geschrieben_).
- Politeness
-- Middle Persian can use the 2PL and possibly also the 3PL as a [u-dep/Polite]() form for a 2SG, or 3SG respectively (as with New Persian). There is an archaic enclitic pronoun for the 1PL *=n*, which can be used as a pluralis majestatis, which has also been annotated as a polite form.
-- Nouns can be used instead of pronouns in order to mark politeness, e.g. *bandag* 'servant' for a 1SG or *xwadāy* 'lord' for a 2SG.

### Degree and Polarity<br>
- Adjectives and adverbs are marked for degree by suffixes while few words preserve an inflected form.
- Polarity is used for the negative particles *nē* and *ma* and the 3SG.PRES.IND of the existential/copula verb *nēst* 'there is not'/'is not'.

### Determiners and Quantifiers<br>
- NumType is used with numerals ([u-dep/Num]()), adjectives ([u-dep/ADJ]()), and adverbs ([u-dep/ADV]()).
- The [u-dep/Poss]() feature appears with personal pronouns as [u-dep/DET](), e.g. _<b>man</b> pid_ 'my father', and reflexive pronouns, e.g. _<b>xwēš</b> pid_ '(someone's) own father' interpreted as 'her father' if the subject is 3SG.FEM.

### Verbal Features
- Diathesis is not morphologically annotated except for the present participle ([u-dep/Act]()), see syntax for analytic expressions of the passive diathesis.
- Verb stems in Middle Persian were originally marked for aspect (perfective vs. imperfective) but changed their semantics during the Middle Persian period. Tradition considers them marked for tense (present and past), which we follow purely for practical reasons.

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

### Participants
- Subjects can be phrasal ([u-dep/nsubj]()) or clausal ([u-dep/csubj]()). Phrasal subjects are headed by a nominal. If case marking is possible, the nominal subject is in direct case ([u-dep/Nom]()) and may agree in person and number with the verb in an accusative construction. In an ergative construction, the nominal subject is in oblique case ([u-dep/Acc]()) if case marking is possible. Clausal subjects are headed by a finite or infinite verb form. Since infinitives can also be used as nouns, the decision depends on the encoding of the infinitival dependents (clausal or nominal dependency). Subjects are frequently omitted.
-- Passive subjects are manually annotated as there is no unambiguous morphosyntactic indication of the passive diathesis. The ergative construction is mostly understood as active irrespective of whether the logical subject is expressed or omitted.
- Objects can be phrasal ([u-dep/obj]()) or clausal ([u-dep/ccomp]()). Phrasal objects are headed by a nominal. If case marking is possible, the nominal object is in oblique case ([u-dep/Acc]()) in an accusative construction. In an ergative construction, the nominal object is in direct case ([u-dep/Nom]()), if case marking is possible, and may agree in person and number with the verb. Clausal objects are predominantly finite and introduced by a subordinator ([u-dep/mark]()). Objects are frequently omitted.
- There are few examples of indirect objects ([u-dep/iobj](), mostly in translations of Avestan). They are formally realised like direct objects. In an ergative construction, they, too, can agree with the verb in person and number (instead of the direct object).
- All other participants are ([u-dep/obl]()), if phrasal, or ([u-dep/xcomp]()), if clausal.
-- Obliques are facultatively specified as spatial modifiers ([u-dep/obl:lmod]()) or temporal modifiers ([u-dep/obl:tmod]()). They are mostly flagged by adpositions but temporal or spatial obliques in particular can appear unflagged (e.g. *rōz=ēw* 'one day', cf. German *eines Tages*).
- Adpositions can be specified, e.g. the directive preposition *ō* 'to(wards)' may appear as *abar ō* 'up(wards) to' or *andar ō* 'into'. UD forces us to related the adverbial modifier to the head of the adposition, which has the undesirable effect that the two different structure 'to the place above' and 'up to the place' cannot be distinguished except by the word order. An alternative solution would have been the analysis of complex adpositions as [u-dep/fixed]() structures, which is misleading as they are all subpatterns of the directive adposition (*abar ō* can be substituted by simple *ō* but not by simple *abar*).
- Names are given as typical examples for a flat structure. In Middle Persian, however, names often display a morphologically marked hierarchical structure, either with the father's name in a specially derived form (called a patronymikon) or in an Ezāfe construction that links attributes to their head. Thus, parts of a name can be in an [u-dep/nmod]() relation to the head.

### Diathesis
- Diathesis: there is no established grammatical pattern to form passive or middle diatheses.
-- Intransitive pairs: Authors can pick an intransitive equivalent (e.g. _ō kār burdan_ 'to apply, use' lit. 'to carry to use' vs. _ō kār <b>šudan<\b>_ 'to be applied, used' lit. 'to go to use') or inherited intransitivized verbs (so-called inchoative verbs, cf. *bōxt-/bōz-* 'to save, redeem' vs. *bōxt-/bōxt-*, or *bōxt-/bōxs-* in Manichaean Middle Persian, 'to be saved, to escape').
-- Intransitivization: the suffix *-īh* added to a noun or adjective forms an intransitive verb; added to the present stem of an intransitive verb, it forms a middle, added to the present stem of a transitive verb, it forms a passive. Some texts make frequent use of this derivation, which may be a sign of grammaticalisation as a passive formation (which finds its continuation in some New Iranic languages, but not in New Persian).
-- Ergative construction: The ergative construction is indifferent to the active/passive diathesis (Thomas Jügel 2015, *Die Entwicklung der Ergativkonstruktion im Alt- und Mitteliranischen*, Harrassowitz). If the subject is not expressed, the ergative construction can have an active interpretation with an omitted subject (topic continuation) or a passive interpretation. If the logical subject is expressed by a prepositional phrase (agent: *az*, causer: *pad*), the passive interpretation is certain.
-- Subject demotion: as with New Persian, it is possible to demote the subject in an active construction. The verb is inflected as a 3rd person (both singular or plural) and the subject position is left void.
-- Analytic construction: the combination of the perfective participle with the verb *būdan* 'to become' can be used to express a terminative but may be rendered by a passive in the target language of translation. Its grammaticalization as a passive formation remains uncertain.

### Coordination & subordination
- Relative clauses are introduced by a relativizer. All relativizers either derive from interrogative pronouns or inherited relative pronouns. In Middle Persian, the relativizer does not have argument status unless it is a so-called free relative clause (few excpetions exist in both ways). The headword of the relative clause can be resumed by a pronoun or pronominal adverb in the relative clause. Hence, relativizers are annotated as [u-dep/SCONJ]() with the pronominal feature [u-dep/Rel]().
- Coordination is not a flat structure in Middle Persian but underspecified.
-- Coordination can link a series of events, which can be flat but are often temporally sequential ('and then'), or implicitly dependent (typically consecutive 'so that' or purposive 'in order to').
-- Coordination can link phrases, which often have a flat structure, but the first member can be the anchor for the following ('together with'), especially if following members are characterised as dependent ('humans and the angels *as their guards*').
-- Coordinators are also used as connectives (at the beginning of an utterance, connecting a subclause with its matrix clause).
-- Since the subject can be omitted, and object and verb tend to appear towards the end of a clause, coordination with head-deletion usually displays the most complete member at the end. Applying the UD principle that the root is the first member results in a quirky annotation with truncated root clauses. We therefore use the [u-dep/dep:conj]() relation.
- Apposition [u-dep/appos]() applies as expected with two special cases. A part of our corpus consists of Middle Persian translations of Avestan texts. The translators usually imitated Avestan to the highest degree possible, which often results in an incomprehensible or ambiguous structure or expression, which is then repeated in idiomatic Persian linked to the first by a subordinator or a discourse particle. We treat the relation of two synonymous expressions as appositional:
-- [u-dep/appos]() for nominal phrases rephrased by a nominal phrase;
-- [u-dep/apposcl]() for nominal phrases or clauses rephrased by a clause (i.e. appositional clause).
  
---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Enhanced Dependencies:
- In predicative structures ([u-dep/advcl]()), the enhanced relation is [u-dep/acl]() to its logical subject ([u-dep/nsubj:xsubj]()).

## Treebanks

There are [N](../treebanks/pal-comparison.html) Middle Persian UD treebanks:

  * [Middle Persian-A](../treebanks/pal_a/index.html)
  * [Middle Persian-B](../treebanks/pal_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
