---
layout: base
title:  'Northwest Gbaya UD'
udver: '2'
---

# UD for Zaar <span class="flagspan"><img class="flag" src="../../flags/svg/CF.svg" /></span>

## Tokenization and Word Segmentation

(Northwest) Gbaya is an isolating and tonal language with little morphology and no agreement. Gbaya relies minimally on derivation but makes strong use of compounding, marked in writing by a hyphen between components (e.g., _gɛ̰̀ɛ̰́-fìò_ ‘ceremony sp.’), which is also used for adjectives-adverbs with a reduplicated structure (e.g., _bàɗàm-bàɗàm_ ‘irregularly arranged’).

Personal pronouns have clitic forms, which were transcribed in the original corpus with a preceding ‘=’ (for instance, 1SG is transcribed as _ʔám_, _=ám_, _=m_). For consistency, all personal pronouns are treated similarly, even if they do not have a form variation (thus, 2SG is transcribed as _mɛ́_ and _=mɛ́_).
We have attached them to their host (as a direct object of a verb or introduced by a preposition, for instance). Personal pronouns are the only clitics and the only words that display, for some of them, a variation from their free-standing form.

The tokens thus consist of simple words, compounds, or structurally reduplicated words, plus eventually pronominal clitics.

## Morphology

The Gbaya treebank comes from an oral corpus interlinearized and glossed on a morphological basis using Toolbox and Elan, part of which (4.5 hour corpus) has been used to establish a corpus-based grammar of Gbaya. Some grammatical morphemes, especially TAMs and genitive markers (borne by the governing noun), are realized by tons. The original segmentation into morphemes is kept in the feature Mseg, as well as the corresponding glosses in MGloss. The language specific tagset is the original annotation made from the extended version of the Leipzig Glossing Rules. (Available at here). The treebank has been originally annotated into mSUD.

* Some grammatical morphemes are analyzed as suffixes (_-à_ for ‘definite’, _-ɛ̰̀_ for ‘locator’, _-ìí_ for ‘anaphoric’, _-BHi_ for ‘assertive’, for example), some as prefixes (_H-_ for ‘incomplete’, _dɛ́-mɛ́-B-_ for ‘imminent incomplete’, for example).

* There are regular tonal modifications linked to the presence of a supra-segmental high tone (analyzed as a suffix _-H_), which alters the tonal pattern of the preceding word, except in the case of a high pattern, based on the initial tone of the following word according to fixed rules. This floating high tone, glossed as a tonal marker (MT), occurs in two contexts. Either (i) it is structurally attached to certain words (preposition, perfective verbal marker, etc.), involving no choice on the part of the speaker, similar to class markers, for instance; or (ii) it is attached to a noun governing a noun complement.

### Tags

* The UD tagset of POS is based on a conversion from the previous annotation into 18 categories done by Paulette Roulon (Roulon-Doko, 2008).
* Gbaya uses 16 of the universal tags (with the exception of SYM, which is not relevant for oral data).
* Alongside the predicate represented by a conjugated VERB, which always expresses an event or action, with the subject as the agent in the case of a transitive construction (active voice) and as the participant in the case of an intransitive construction (middle voice), Gbaya has two non-verbal predicates that are original invariable terms. One, _nɛ́_, expresses identification, and the other, _ʔá̰_, expresses location. Through composition, these form five additional predicative forms: the impersonal identifier mɛ̀-nɛ́, the existential _ʔá̰-sɛ̀nɛ́_, and three presentatives (PRST)—the locative _ʔá̰à̰_, the anaphoric _ʔà̰ḭ́_, and the consecutive _ʔá̰-hɩ̰̀ḭ́_. These seven predicatives are labeled AUX and analyzed as copulas (cop).
* There are also juxtaposed predicative constructions (such as possessive, similative, and numerative) and the holophrastic use of certain terms (interjections, adverbs), where the pivotal term is identified as the root of the clause they form.
* Verbal inflections are divided into two groups. First (i) obligatory forms, which necessarily involve a tonal pattern applied to the lexically toneless verb. These obligatory forms that constitute the paradigm of conjugated forms combine three moods (Real, Virtual, Command) and two aspects (Imperfective [unbounded] and Perfective [bounded]), producing 21 forms. Tense is not marked on the verb. Then (ii) non-obligatory expansive forms, carried by morphemes that always follow the conjugated verb base, labeled as PART, all of which are linked to the verb base through a ‘mod’ relationship. Negation and associated movement forms are part of it.
* Within verbal forms, six forms have the particularity of giving the clause in which they appear a subordinate status (without any other marker such as a subordinating conjunction, for example).
* The serial verb construction (SVC) is also a case of expansion of a conjugated verb. The verb in the second position must necessarily be in an infinitive form (imperfective, perfective, or virtual), marked by a tonal element alone or combined with a morpheme.
* Given the significant polyfunctionality in Gbaya, labeling is fundamental. Thus, the negation marker _ná_, labeled as PART and directly related by ‘mod’ to the conjugated verb, becomes a discourse marker labeled INTJ when placed after a noun, and is connected to the following noun by ‘discourse.’
* Gbaya makes extensive use of clause coordination. There are seven coordinators labeled as CCONJ. These coordinators can never appear at the absolute beginning of a discourse, but they structure the discourse by specifying the speaker’s chosen orientation for organizing the flow of statements without establishing a hierarchy, introducing independent clauses as well as main clauses.
* The relative clause, which serves as an expansion of a noun, is always introduced by the invariable relativizer _nɛ̀_, labeled SCONJ and analyzed the head of the relative.

---

### Features

Gbaya treebank uses 11 universal features (`Aspect` `Case` `Degree` `Number` `Person` `Polarity` `Polite` `Poss` `PronType` `VerbForm` `Voice`).

3 langage specific features have been added to the scheme (`Logophoric`, `Reported` and `Topicalization`).

* Number: Personal pronouns, which are characterized by referring exclusively to humans when used alone, are distinguished from all other pronouns because they are the only terms that carry a number distinction (1SG, 1PL, 2SG, 2PL, etc.)
* Gbaya has logophoric pronouns used in reported speech for referring to the speaker. They have been analyzed as personal pronouns (`PronType=Prs`) with the additional feature `Logophoric=Yes`.
* Politeness: No feature has been added for politeness, but the optional plural marker _ʔó_ for nouns takes on a politeness value when the noun refers to a single individual (as in the case of a proper noun, for example). Similarly, the plural personal pronouns 2PL and 3PL are used with a singular referent to mark forms of politeness, glossed as 2POL and 3POL.


## Syntax

The dependency analysis is a conversion of the manual annotation to mSUD format. For more information, see SUD guidelines.
* Gbaya is an SVO language with a very strict word order.
* The subject must be present before any conjugated verb, except in two cases: (i) a coordination between two consecutive clauses with the same subject, which is only mentioned before the first verb; (ii) an absence referring to the overall situation, giving it an impersonal meaning that can be rendered as "it" in English (e.g., _kàɗá_ 'it’s over'). See also subject dislocation below.
* Topicalization, which is very frequent in Gbaya, involves moving the topicalized element in front of the subject. This is indicated by a 'dislocated' relation, with a subrelation indicating its initial function (dislocated:subj, dislocated:obj, dislocated:obl).
* The dislocated subject dislocation remains positioned before the verb, but there is an insertion of an element between it and the verb. This could be a resumptive personal pronoun or the topicalization marker _ʔá̰-nɛ̀_ or _ʔá̰_, which may sometimes be followed by a resumptive pronoun.
* Focalization, which is more limited in use, takes the form of a cleft construction in Gbaya. It involves the identifier nɛ́ or the impersonal identifier _mɛ̀-nɛ́_ used without a subject.
* Reported speech is extensively used in Gbaya. It is a structure that combines a first part called the quoting discourse and a second part called the quoted discourse. The quoting discourse is often limited to mentioning the speaker, who is then considered the 'root' of the whole construction, and is linked to the reported speech that follows by the relation 'parataxis:quoter'. It is possible to have the addressee in front of the reported speech, without any mark. It depends on the root of the reported speech by a relation 'obl:quoter'.