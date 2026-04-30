---
layout: base
title:  'Kadiweu UD'
udver: '2'
---

# UD for Kadiweu <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. No words with spaces inside them occur. Orthographic tokens generally correspond to single syntactic words.

* Some functional words fuse with their syntactic heads, e.g., the negation particle *aG*, the perfective auxiliary *jaG*, the relativizer *ane*, and the complementizer *me*. For example, *mijo* is the contraction of *me* and the determiner *ijo*; both can surface as independent words. Likewise, the perfective marker *jaG* may occur either as a separate word or cliticized, as in *ja wajipata* (`PERF 3SG.ERG.listen=3SG.DAT`) and *jawajipata* (`PERF=3SG.ERG.listen=3SG.DAT`), both meaning 'He has listened to it' (Sandalo 1995:42). 

* In the treebank, such cases are treated as multiword tokens (MWTs), following the practice of the Corpus Kadiwéu (Sandalo et al. 2024) at the Tycho Brahe Platform (Veronesi & Galves 2024). For example, *mijo* is analyzed as two syntactic words: a `SCONJ` node *me* and a `DET` node *ijo*.

## Morphology

### Tags

* The Kadiwéu treebank presently employs 11 of the 17 universal POS tags, namely, ADJ, ADV, AUX, DET, NOUN, PART, PRON, PROPN, PUNCT, SCONJ, and VERB. The language lacks the ADP part of speech altogether; instead, it uses applicative morphology to convey the meaning of sentences that are expressed with prepositions in languages such as Portuguese and English (Galves et al. 2017, Sandalo & Galves 2023, Sandalo & Galves 2025). The remaining tags have not yet been attested in the annotated data. Examples in the literature show that Kadiwéu possesses CCONJ, NUM, and INTJ.

* The particle inventory is still under investigation; currently, the proclitic *aG*, used for negation in main clauses, is the only item consistently annotated as PART. This clitic differs from adverbs in that it attaches to the main clause predicate and has narrow scope over it (Sandalo 1995), whereas adverbs typically occur in the clause left periphery or postverbally, as illustrated in Galves et al. (2017) and Sandalo and Galves (2023). Further analysis is required to determine whether additional items should be annotated as PART, such as the reportative evidential *one* (Sandalo 2023) and the negation marker *daGa*, which is realized immediately after a complementizer and takes scope over the embedded clause (Sandalo & Galves 2025:4).

* Verbal agreement follows a person hierarchy: verbs index either the subject or the object, but not both simultaneously. For Sandalo (1995), tense is not grammaticalized in the language; only mood and aspect are realized by proclitics or independent words. Sandalo (2023) treats *domaGa* as a tense marker, expressing "prospective future". Following UD guidelines, we assign all TAM markers the AUX tag.

* Kadiwéu has personal pronouns for the first and second person. Determiners with anaphoric or deictic meaning can be used as heads of noun phrases to refer to third-person entities. Determiners and non-personal pronouns differ primarily in syntactic behavior, i.e., whether they modify a noun or function as the head of the NP.

* An ADJ or NOUN can be derived from a verb in Kadiwéu by means of certain affixes. Adverbs derived from verbs do not occur in the treebank sentences.


### Features

* As a polysynthetic language, Kadiwéu has a rich, very complex morphology. 

* In Griffiths' (2002) dictionary, nouns are generally marked for masculine or feminine gender. For example, *akiidi* 'river', *diimigi* 'house', and *nodaajo* 'knife', on the one hand, and *etogo* 'boat', *Gonoodo* 'mosquito', and *niale* 'tree', on the other hand, are assigned the labels **subst masc** and **subst fem**, which signal masculine and feminine gender, respectively. Sena (2025) observes that the grammatical gender of nouns designating animals is independent of semantic factors such as biological gender or size. Morphologically, the inherent gender of a noun surfaces in diminutive and plural morphemes. Syntactically, the gender of the head noun manifests itself in determiners with a numeral classifier morpheme (Sandalo & Michelioudakis 2016): *naGada niale* 'that tree' and *niGida nodajo* 'that knife'. In the treebank, all nouns are assigned a gender feature. Nouns which can bear both genders, such as *odawa*, which means 'husband' or 'wife', are assigned `Gender=Fem,Masc`.

* Bare nouns without a plural morpheme denote "a group with 1 or more representative of the kind" (Sandalo & Michelioudakis 2016). In the treebank, these nouns are assigned `Number=Sing`. By contrast, nouns with a plural morpheme are assigned `Number=Plur`. Kadiwéu nouns also inflect for degree — more specifically, the diminutive —, encoded as `Degree=Dim`, and the possessor’s person and number, encoded by means of the layered features Person[psor] and Number[psor]. During the development of the treebank, as more sentences are incorporated, new features will be proposed.

* In Kadiwéu, as Galves et al. (2017:635) state, “there
is no uninflected verbal root.” The language lacks infinitives and participles. All verb forms annotated so far are treated as finite (`VerbForm=Fin`), as no non-finite forms have been identified in the data. 

* A verb receives the feature `Mood=Ind` unless it is marked with the *dGa* and *domaGa* proclitics, which signal the conditional and the desiderative mood, respectively (Sandalo 1995). There is no marker for the imperative mood. One and the same sentence can convey a declarative or directive speech act, depending on context.

* Layered features indicate absolutive or ergative agreement with the subject or object as well as agreement with indirect objects. At least one verb, among the sentences annotated so far, also exhibit gender agreement with the subject. Applicative verb forms are also assigned layered features indicating gender,  person, or number of the applied argument.

* Verb forms with no voice markers are assigned no voice features, which implies they are in the active voice. The treebank presently has verbs with features indicating the inverse voice and the applicative voice. 


## Syntax

* Kadiwéu is both subject and object pro-drop.

* In intransitive clauses with an explicit subject, the nominal referenced by an absolutive prefix on the verb is the subject.

* In transitive clauses, person and number agreement is the main indicator for identifying subjects and objects expressed by a nominal. If both the subject and object are third person, either SVO and OVS is licensed, although the former seems to be more frequent (Sandalo 2023). This can lead to ambiguous sentences, such as *Goti yemaa Ecodi*, which means either “Goti loves Ecodi” or “Ecodi loves Goti” (Sandalo & Galves 2025). However, SOV is obligatory if the object is a first or second person.

* Kadiwéu seems to lack copulas. To assign a quality to an entity referred to by an NP, the language uses a possessive construction, where a possessive NP denoting the quality is juxtaposed to the NP being predicated, e.g., *Ica liwigo libinienigi.* (`M.CL 3POSS.photo 3POSS.beauty.DIM.M` ‘This photo of hers is beautiful.’, literally ‘That photo of hers its beauty.’ or ‘The beauty of that photo of hers.’)

* In the verbless sentences annotated so far, the subject is the leftmost NP, while the rightmost NP is the predicative, as in the above example.

* Presently, 13 dependency relations are used, 2 of them, acl:relcl and nmod:poss, are subtyped.

## References

- Galves, C., Sandalo, F., Sena, T. A. de, & Veronesi, L. (2017). Annotating a polysynthetic language: From Portuguese to Kadiwéu. *Cadernos de Estudos Linguísticos, 59*(3), 631–648. https://doi.org/10.20396/cel.v59i3.8651003

- Griffiths, G. (2002). *Dicionário da língua Kadiwéu: Kadiwéu–Português, Português–Kadiwéu*. Cuiabá, MT: Sociedade Internacional de Linguística (SIL).

- Sandalo, F. (1995). *A grammar of Kadiwéu* (PhD dissertation), University of Pittsburgh.

- Sandalo, F. (2023). Reportative evidentiality, tense, and negation in Kadiwéu. *LIAMES: Línguas Indígenas Americanas, 23*, e023006. https://doi.org/10.20396/liames.v23i00.8671197

- Sandalo, F., & Galves, C. (2023). Anotando sintaticamente uma língua originária do Brasil: O problema de Anchieta. *Cadernos de Estudos Linguísticos, 65*, e023007. https://doi.org/10.20396/cel.v65i00.8673592

- Sandalo, F., & Galves, C. (2025). A brief description and analysis of tense, finiteness, and verbal embedding strategies in Kadiwéu. *Cadernos de Estudos Linguísticos, 67*, e025021. https://doi.org/10.20396/cel.v67i00.8677360

- Sandalo, F., & Michelioudakis, D. (2016). Classifiers and plurality: Evidence from a deictic classifier language. *The Baltic International Yearbook of Cognition, Logic and Communication, 11*, 1–40. https://doi.org/10.4148/1944-3676.1112

- Sandalo, F., Pires, V., Galves, C., Silva, H., Francisco, O., & Silva, S. (2024). *Corpus Kadiwéu*. In L. Veronesi & C. Galves (Eds.), *The Tycho Brahe Platform*. https://www.tycho.iel.unicamp.br/

- Sena, T. A. de. (2025). *Morfologia nominal e gênero em Kadiwéu* (PhD dissertation). Universidade Estadual de Campinas, Instituto de Estudos da Linguagem, Campinas, SP.

- Veronesi, L., & Galves, C. (2024). *The Tycho Brahe Platform*. https://www.tycho.iel.unicamp.br/


## Treebanks

  There is one Kadiwéu UD treebank:

  * [UD_Kadiweu-UNICAMP](../treebanks/kbc_unicamp/index.html)

