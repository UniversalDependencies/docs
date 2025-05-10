---
layout: base
title:  'UD_Greek-Lesbian'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Greek Lesbian

Language: [Greek](/el/index.html) (code: `el`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.16 release.

The following people have contributed to making this treebank part of UD: Stavros Bompolas, Stella Markantonatou, Antonios Anastasopoulos, Vivian Stamou.

Repository: [UD_Greek-Lesbian](https://github.com/UniversalDependencies/UD_Greek-Lesbian)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udel_lesbian216)<br />
Download all treebanks: [UD 2.16](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples, spoken, fiction

Questions, comments?
General annotation questions (either Greek-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Greek-Lesbian/issues).
If you want to collaborate, please contact [s&nbsp;•&nbsp;bompolas&nbsp;(æt)&nbsp;athenarc&nbsp;•&nbsp;gr].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

A Universal Dependencies (UD) treebank for the dialect of Lesbos, a low-resource living Northern variety of Modern Greek. The treebank currently contains 270 sentences with manual annotations following the Universal Dependencies framework, representing the first UD treebank for a Northern Modern Greek dialect.



The Lesbos dialect belongs to the Northern Modern Greek dialect group, characterized by distinctive phonological features collectively known as "Northern vocalism." These features include:

* Raising of unstressed mid vowels /e/ and /o/ into [i] and [u], respectively (e.g., πιδί [piˈði] instead of SMG παιδί [peˈði] 'child', κάτου [ˈkatu] instead of SMG κάτω [ˈkato] 'down')

* Deletion of unstressed high vowels /i/, /u/ (e.g., φίδ [ˈfið] instead of SMG φίδι [ˈfiði] 'snake', βνό [ˈvno] instead of SMG βουνό [vuˈno] 'mountain')

These features significantly distinguish the dialect of Lesbos from Southern dialects, including Standard Modern Greek (SMG). The dialect has been historically shaped by extensive contact with Italo-Romance (particularly Venetian) during 1355-1462 and Turkish during the Ottoman period (1462-1912), resulting in numerous loanwords and morphological elements. Unlike most Modern Greek dialects, Lesbian remains vital today, serving as the primary means of communication throughout the island.

This treebank represents the first Universal Dependencies resource for a Northern Modern Greek dialect.

## Annotation Process

The treebank follows the UD annotation guidelines established for UD_Greek-GUD, complemented by grammatical descriptions and dialect dictionaries. Key annotation features include:

### Tokenization

* Unlike GUD's approach of pre-tokenizing contracted forms, the Lesbian treebank maintains merged word sequences as written in the original sources and treats them as multi-word tokens. In this line, adposition-determiner contractions are segmented as multi-word tokens (e.g., στο [sto] 'in/to the' is tokenized as two syntactic words, σ [s] 'in/to' and το [to] 'the')

* Clitics frequently attached to verbs in written dialectal texts are handled as multi-word tokens (e.g., τάμπλιξις [ˈtabliksis] '(you) mixed them up' → τά + μπλιξις)

* Possessive pronouns frequently attached to nouns are similarly treated as multi-word tokens (e.g., πατέρασιτς [paˈterasits] 'her father' → πατέρας + ιτς)

* Erroneously split tokens in the original sources are not merged, but instead linked using the "goeswith" relation following UD guidelines

### Lemmatization

* Words diverging from SMG counterparts are assigned lemma forms that preserve dialectal characteristics

* Apostrophes are eliminated from lemmas to standardize representation across inconsistent source texts

* For inconsistently spelled dialectal features, the dialectologically expected form (with vowel raising and deletion) is consistently used as the lemma

* SMG orthography is applied to lemmas regardless of orthographic errors in source materials

### Special Annotations

* Voicing and euphonic annotations in the MISC column using MSeg|MGloss format to document these phenomena explicitly

* Orthographic standardization integrated with annotations, preserving original dialectal forms in the FORM column while providing standardized forms in the MISC column

* Parallel translations of each sentence in SMG to facilitate comparative research

## Data Sources

The corpus draws from six main sources representing different text types and dialectal variants from across Lesbos. The treebank consists of randomly shuffled sentences coming from these sources:

### Dialectal Dictionaries (example sentences)

* Papanis, D. and Papanis, G. D. (2004). Lexiko tou Agiasotikou Glosikou Idiomatos [Dictionary of the Agiasos Dialect], 3rd improved and expanded edition. Private edition, Mytilene.

* Ralli, A. (2017). Lexiko dialektikis poikilias. Kydonion-Moschonision kai Voreioanatolikis Lesvou [Dictionary of dialectal variety. Kydonies-Moschonisia and Northeastern Lesbos]. Hellenic Foundation for Historical Studies, Athens.

* Anagnostopoulou, M. A. (2021). Thematiko Lexiko tis Lesviakis Dialektou [Thematic Dictionary of the Lesbos Dialect]. Mythos BOOKS, Mytilene.

### Contemporary Lesbian Literature

* Tsokarou-Mitsioni, E. (1998). Palies Istories ap tn Agiasiou [Old Stories from Agiasio], 2nd edition. Private Edition, Mytilene.

* Anagnostou, V. T. (2014). Tsi sta th'ka mas: Komodia sta k'stariot'ka [Tsi sta th'ka mas: Comedy in the K'stariot'ka Dialect], first edition. Estia Technon Skoutarou "T'Apono to Scholio".

* Tsokarou-Mitsioni, E. (2019). Prosfygiá [Refugeehood], first edition. D. Doukas & Sia O.V.E.E.

## Acknowledgments

This work has been carried out within the Archimedes Research Unit of the Athena Research Center, Greece. It has been partially supported by project MIS 5154714 of the National Recovery and Resilience Plan Greece 2.0, funded by the European Union under the NextGenerationEU Program. It also received support from the CA21167 COST action UniDive, funded by COST (European Cooperation in Science and Technology).


# Statistics of UD Greek Lesbian

## POS Tags

[ADJ](el_lesbian-pos-ADJ.html) – [ADP](el_lesbian-pos-ADP.html) – [ADV](el_lesbian-pos-ADV.html) – [AUX](el_lesbian-pos-AUX.html) – [CCONJ](el_lesbian-pos-CCONJ.html) – [DET](el_lesbian-pos-DET.html) – [INTJ](el_lesbian-pos-INTJ.html) – [NOUN](el_lesbian-pos-NOUN.html) – [NUM](el_lesbian-pos-NUM.html) – [PART](el_lesbian-pos-PART.html) – [PRON](el_lesbian-pos-PRON.html) – [PROPN](el_lesbian-pos-PROPN.html) – [PUNCT](el_lesbian-pos-PUNCT.html) – [SCONJ](el_lesbian-pos-SCONJ.html) – [VERB](el_lesbian-pos-VERB.html) – [X](el_lesbian-pos-X.html)

## Features

[Aspect](el_lesbian-feat-Aspect.html) – [Case](el_lesbian-feat-Case.html) – [Definite](el_lesbian-feat-Definite.html) – [Degree](el_lesbian-feat-Degree.html) – [ExtPos](el_lesbian-feat-ExtPos.html) – [Gender](el_lesbian-feat-Gender.html) – [Mood](el_lesbian-feat-Mood.html) – [Number](el_lesbian-feat-Number.html) – [NumType](el_lesbian-feat-NumType.html) – [Person](el_lesbian-feat-Person.html) – [Polarity](el_lesbian-feat-Polarity.html) – [Poss](el_lesbian-feat-Poss.html) – [PronType](el_lesbian-feat-PronType.html) – [Style](el_lesbian-feat-Style.html) – [Tense](el_lesbian-feat-Tense.html) – [Typo](el_lesbian-feat-Typo.html) – [VerbForm](el_lesbian-feat-VerbForm.html) – [Voice](el_lesbian-feat-Voice.html)

## Relations

[acl](el_lesbian-dep-acl.html) – [acl:relcl](el_lesbian-dep-acl-relcl.html) – [advcl](el_lesbian-dep-advcl.html) – [advcl:relcl](el_lesbian-dep-advcl-relcl.html) – [advmod](el_lesbian-dep-advmod.html) – [amod](el_lesbian-dep-amod.html) – [appos](el_lesbian-dep-appos.html) – [aux](el_lesbian-dep-aux.html) – [case](el_lesbian-dep-case.html) – [cc](el_lesbian-dep-cc.html) – [ccomp](el_lesbian-dep-ccomp.html) – [compound](el_lesbian-dep-compound.html) – [compound:redup](el_lesbian-dep-compound-redup.html) – [conj](el_lesbian-dep-conj.html) – [cop](el_lesbian-dep-cop.html) – [csubj](el_lesbian-dep-csubj.html) – [det](el_lesbian-dep-det.html) – [discourse](el_lesbian-dep-discourse.html) – [dislocated](el_lesbian-dep-dislocated.html) – [expl](el_lesbian-dep-expl.html) – [fixed](el_lesbian-dep-fixed.html) – [flat](el_lesbian-dep-flat.html) – [goeswith](el_lesbian-dep-goeswith.html) – [iobj](el_lesbian-dep-iobj.html) – [mark](el_lesbian-dep-mark.html) – [nmod](el_lesbian-dep-nmod.html) – [nsubj](el_lesbian-dep-nsubj.html) – [nsubj:pass](el_lesbian-dep-nsubj-pass.html) – [nummod](el_lesbian-dep-nummod.html) – [obj](el_lesbian-dep-obj.html) – [obl](el_lesbian-dep-obl.html) – [obl:agent](el_lesbian-dep-obl-agent.html) – [orphan](el_lesbian-dep-orphan.html) – [parataxis](el_lesbian-dep-parataxis.html) – [punct](el_lesbian-dep-punct.html) – [root](el_lesbian-dep-root.html) – [vocative](el_lesbian-dep-vocative.html) – [xcomp](el_lesbian-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 270 sentences, 3200 tokens and 3333 syntactic words.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 243 types of words that contain both letters and punctuation. Examples: τ’, μ’, απ’, τ’ς, τσ’, σ’, τ’ν, π’, γ’, ντ’, έχ’, ’γώ, κάν’, λέγ’ς, ξέρ’ς, γι’, κόρ’, λάδ’, μέσ’, ν’, γυρίσ’, γ’ναίκα, δ’λειά, κουμάτ’, ν-του, ν-τουν, ξέρ’, ούλ’, πάγ’, σπίτ’, Β’ναριώτις, Γιάνν’, Γιάνν’ς, Γιώργ’, ανοίγ’, γέμ’σι, γι-Απουστόλ’ς, θέλ’, θέλ’ς, θρώπ’, καζάντ’σι, κουμμάτ’, ουλ’, πάρ’, τιλιώσ’, τσιφάλ’, φέρ’, φ’λάγου, χέρ’, χουργ-ιό</li>
</ul>

<ul>
<li>This corpus contains 133 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 80 types of multi-word tokens. Examples: στου, στα, στ’, γιεμ, κουρούδαμ, κόρημ, μπάτσι, πας, στη, στουν, στ’ν, τνώρα, τόχιτι, Πατέρασιτς, ήξιρειντα, ίσιαμ, ίσιαμι, αμί, απόξου, βρακουζώνς, γιομ, είπντα, εμπουρεί, εμπουρώ, ηφτσήμ, θκάς, θκος, ιφστήμ, κοντάμ, κόρηντ, λέγαντα, μάτιασ’, μήπι, μουρέλιμ, μουρφιάτσ, μουρόμ, νάβγει, νάν’, νάρτ, νέρτ, νήνταν, νανάψουν, νανοίξειν, ναπουμείνουμι, να’ρθείς, νείνη, ντάκανι, ντιπέρνη, πάγεντου, πάς.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 15 word types tagged as particles (PART): Ένι, Μπα, Οχ, ένη, δα, δε, δεν, ε, εν, μη, μην, μπά, να, όχ’, ’εν</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as pronouns (PRON): ιγώ, μ, ν-του, π, ποιος, που, ς, τί, τι, τις</li>
</ul>

<ul>
<li>This corpus contains 27 lemmas tagged as determiners (DET): άλλος, άλλους, έγιουτους, έγιτουτους, έγιτσεινους, ένας, έφτους, αυτός, η, κάθα, κάθε, κάθι, κάτι, καθένας, κανένας, ο, ου, ούλους, πουλύς, τίπουτα, τα, τι, τις, του, τούτους, όποιους, όσους</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: τι, τις</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as auxiliaries (AUX): ας, είμι, θα, να</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: γιλώντας, κλέγουντας, τραγδώντας</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: είνι, ήνταν, ήταν, είναι, ένι, είμι, είνη, ήμν-ταν, είμη, ν’</li>
    <li>VERB: έλα, έχ’, κάν’, λέγ’ς, ξέρ’ς, ήρτι, είπι, είχι, κάνου, πήγι</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: πέρνη</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: αγαπμέν, αγισμένους, λαδουμένου, λοιμ’τσιασμένους, μιτσ’μένους, σπασμένα, στιναχουρημέν, συκλινσμέν, τσ’στάμινους</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: καλή, αγιά, κυρά, Αγ’, Ρήνιω, αχριγιάννα, καημέν’, καλουσνάτ’, κατάβαρ’, κατακότσιν</li>
      <li>DET: η, γη, τ’, τ’ς, μια, τ’ν, τν, τη, ντ’, ντ</li>
      <li>INTJ: μουρή, βουρή, Καληνύχτα, μουρ</li>
      <li>NOUN: μέρα, μάνα, ώρα, κόρη, κόρ’, γναίτσις, γ’ναίκα, δ’λειά, νύχτα, αλήθεια</li>
      <li>NUM: μια, 2, 3, μιαν, τρεις</li>
      <li>PRON: τ’ς, που, πού, τσ’, τ’, Ποια, ιτζ, ιτς, ντι, ντουν</li>
      <li>PROPN: Ανθή, Αντρόνα, Παναγιά, Ρουζαλία, Ανάστασ, Αφρουδίτ, Βαρβάρα, Θουδώρα, Καλλουνή, Κατιρίνα</li>
      <li>VERB-Part: αγαπμέν, στιναχουρημέν, συκλινσμέν</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: καημένους, Αγιού, Ελληνις, Ζουντανοί, Κύριοι, Πιδέξους, έρμου, έρμους, ήσυχους, αγαπσκό</li>
      <li>DET: του, γιου, τουν, η, ένας, τ’, γ’, γι, γη, ι</li>
      <li>INTJ: Βούρ’, μουρ, μουρέ</li>
      <li>NOUN: άθριπους, γιε, γιατρός, άντρα, γιο, γιος, θρώπ’, κάμπου, καφινέ, κόσμους</li>
      <li>NUM: ένα</li>
      <li>PRON: τουν, τ’, ντ, ιμ, ιτ, μ, ν-τουν, Τις, ήμ, ημ</li>
      <li>PROPN: Β’ναριώτις, Γιάνν’, Γιάνν’ς, Γιώργ’, Δησέφ, Χατζικουμής, γι-Απουστόλ’ς, 15, Απουστόλς, Βαγγέλ’</li>
      <li>VERB: αγισμένους, κουλουξυρ’σμένους, λοιμ’τσιασμένους, μιτσ’μένους, τσ’στάμινους, ψουφμένοι</li>
      <li>VERB-Part: αγισμένους, λοιμ’τσιασμένους, μιτσ’μένους, τσ’στάμινους</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: καλό, κακό, ξύλου, Αγροτικό, Β’ναριώτ’κου, Χρυσό, αξ’πόλ’του, απανουγυρισ’κά, αύριγιου, γεμάτου</li>
      <li>DET: του, τα, τ’, ούλα, αυτό, έγιουτα, το, ένα, έφτα, έφτου</li>
      <li>INTJ: μουρά</li>
      <li>NOUN: χουριό, μουρό, λάδ’, μουρά, πουρνό, βράδ, σπίτ’, χέρ, αλιφουρείου, κτσιά</li>
      <li>NUM: δυο, ένα, 100, 200, δέκα, τριγιά</li>
      <li>PRON: τα, τι, του, ντα, π’, τό, ντου, τά, ν-του, ντ’</li>
      <li>PROPN: Μπουτέλ, Ατζιλικό, Ακλιδιού, Ασπασέλ’, Ατζιλικο, Γιουργή, Γληγουρέλ’, Κατιρίνη, Μαριγώ, Ν’κουλέλ’</li>
      <li>SCONJ: τι</li>
      <li>VERB-Part: λαδουμένου, σπασμένα</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: Ελληνις, Ζουντανοί, Κύριοι, απανουγυρισ’κά, θκά, ιμκρά, καημένοι, καυτά, μιγάλα, μιγάλις</li>
      <li>AUX-Fin: ήνταν, είνι, ν’, ’μαστι, ’νι</li>
      <li>DET: τα, ούλα, τ’ς, έγιουτα, γη, τσ’, οι, τ’, έφτα, γι</li>
      <li>INTJ: μουρά</li>
      <li>NOUN: γναίτσις, μουρά, αυγές, βδουμάδις, θρώπ’, ιλιές, κτσιά, μέρις, μπούτσια, πουδάρια</li>
      <li>NUM: δυο, 100, 2, 200, 3, δέκα, τρεις, τριγιά</li>
      <li>PRON: τα, μας, ντα, σας, τά, μεις, ντουν, πού, ντά, ντούν</li>
      <li>PROPN: Β’ναριώτις, Ατζιλικο, Στρατήγς</li>
      <li>VERB: έχουμι, ήβραν, ήρταν, κάναν, κάνιτι, λουγιάζαν, ξέρουμι, πιάσιν, χιτι, Ήρτα</li>
      <li>VERB-Fin: έχουμι, ήβραν, ήρταν, κάναν, κάνιτι, λουγιάζαν, ξέρουμι, πιάσιν, χιτι, Ήρτα</li>
      <li>VERB-Part: σπασμένα</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: καημένους, καλή, καλό, αγιά, κακό, κυρά, ξύλου, Αγιού, Αγροτικό, Αγ’</li>
      <li>AUX-Fin: είνι, ήνταν, ήταν, είναι, ένι, είμι, είνη, ήμν-ταν, είμη, ταν</li>
      <li>DET: του, τ’, η, γη, γιου, μια, τουν, τ’ν, αυτό, τν</li>
      <li>INTJ: μουρή, βουρή, μουρ, Βούρ’, Καληνύχτα, μουρέ</li>
      <li>NOUN: μέρα, χουριό, άθριπους, μάνα, μουρό, ώρα, γιε, κόρη, κόρ’, λάδ’</li>
      <li>NUM: ένα, μια, μιαν</li>
      <li>PRON: μ’, τ’, τουν, μι, μ, σ’, τι, του, γω, ντ</li>
      <li>PROPN: Ανθή, Μπουτέλ, Αντρόνα, Ατζιλικό, Γιάνν’, Γιάνν’ς, Γιώργ’, Δησέφ, Μαριγώ, Παναγιά</li>
      <li>SCONJ: τι</li>
      <li>VERB-Fin: έλα, έχ’, κάν’, λέγ’ς, ξέρ’ς, ήρτι, είπι, είχι, κάνου, πήγι</li>
      <li>VERB-Part: αγαπμέν, αγισμένους, λαδουμένου, λοιμ’τσιασμένους, μιτσ’μένους, στιναχουρημέν, συκλινσμέν, τσ’στάμινους</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: κακό, καλό, ξύλου, Αγροτικό, Αγ’, Β’ναριώτ’κου, Ελληνις, έρμου, αγαπσκό, αγιά</li>
      <li>DET: του, τα, τ’, τουν, τ’ν, τν, αυτό, μια, ούλα, τ’ς</li>
      <li>INTJ: Καληνύχτα</li>
      <li>NOUN: μέρα, χουριό, λάδ’, ώρα, βράδ, δ’λειά, νύχτα, πουρνό, σπίτ’, χέρ</li>
      <li>NUM: ένα, δυο, 100, 2, 200, 3, δέκα, μια, μιαν, τρεις</li>
      <li>PRON: τουν, τα, μι, τι, του, μας, μ’, σι, ντα, που</li>
      <li>PROPN: Δησέφ, Ακλιδιού, Ατζιλικό, Βαγγέλ’, Βασίλ’, Γιάνν’, Γιουργή, Γιώργ’, Δικαπινταύγουστου, Θεμιστουκλή</li>
      <li>SCONJ: τι</li>
      <li>VERB: κουλουξυρ’σμένους, λαδουμένου, σπασμένα</li>
      <li>VERB-Part: λαδουμένου, σπασμένα</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: Αγιού</li>
      <li>DET: τ’, τ’ς, αλλουνού, τ, του, τσ’</li>
      <li>NOUN: ακκλησάς, ιγτουνιάσ’, καβγά, μηχανής, σπιτιού, φαγιού, χρουνό</li>
      <li>PRON: μ’, τ’, μ, σ’, ντ, τ’ς, ιμ, μας, ς, ιτ</li>
      <li>PROPN: Βασ’λειού, Γιάνν’, Θιού, Κουλουμαρίγιας, Μιλπουμέν’ς, Παναγιάς, Πληγουνιάτ’, Ρουζαλίας, Σουφέλ’, Στρατ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: καημένους, Καλή, Ζουντανοί, Καλό, Πιδέξους, Χρυσό, έρμους, ήσυχους, αδιάντροπους, ακάλιστους</li>
      <li>DET: η, του, γη, γιου, τα, γ’, ένας, γι, μια, ούλα</li>
      <li>INTJ: μουρή</li>
      <li>NOUN: άθριπους, γιατρός, γναίτσις, κόρ’, μουρό, αλήθεια, γιος, κόρη, κόσμους, μάνα</li>
      <li>NUM: μια</li>
      <li>PRON: γω, συ, ’γώ, μεις, που, πού, π’, Ποια, Τί, Τις</li>
      <li>PROPN: Μπουτέλ, Ανθή, Αντρόνα, Β’ναριώτις, Γιάνν’ς, Χατζικουμής, γι-Απουστόλ’ς, 15, Ανάστασ, Απουστόλς</li>
      <li>SCONJ: τι</li>
      <li>VERB: αγαπμέν, αγισμένους, λοιμ’τσιασμένους, μιτσ’μένους, στιναχουρημέν, συκλινσμέν, τσ’στάμινους, ψουφμένοι</li>
      <li>VERB-Part: αγαπμέν, αγισμένους, λοιμ’τσιασμένους, μιτσ’μένους, στιναχουρημέν, συκλινσμέν, τσ’στάμινους</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: κυρά, Αγιά, Κύριοι, Ρήνιω, απρόκουφτι, αχριγιάννα, κυρ, κ’μπάρι</li>
      <li>INTJ: μουρή, βουρή, μουρ, Βούρ’, μουρά, μουρέ</li>
      <li>NOUN: γιε, θρώπ’, μάνα, άθρουπι, άντρα, γ’ναίκα, θειά, θεια, κόρη, κόρ’</li>
      <li>PROPN: Ρουζαλία, Ανθή, Ατζιλικο, Βαρβάρα, Γιώργ’, Δημητρό, Θιέ, Θιμιστουκλή, Κόπ’, Μαριγώ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: του, τα, τ’, η, γη, τ’ς, γιου, τουν, τ’ν, τν</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: μια, ένας, ένα, καμιά</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Aug
    <ul>
      <li>ADV: ταχτέρ, ίσια, γύρου</li>
      <li>NOUN: πουρνό, άνια, μπέλι, μπούτσια, παλιουπουτανάρα, χειρούκλις</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADV: πιο</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dim
    <ul>
      <li>NOUN: κουρούδα, ακκλησιούδα, γαβανέλ, καμαρούδα, καφιδέλ, κουπηλούδια, κουπιλούδια, κουπιλούδ’, μισαλέλε, μουρέλ</li>
      <li>PROPN: Μπουτέλ, Ατζιλικό, Ασπασέλ’, Ατζιλικο, Γληγουρέλ’, Κατιρίνη, Μαριγώ, Ν’κουλέλ’, Ξινέλ’, Πιρσιφόν</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>INTJ: Όχ’</li>
      <li>PART: δεν, δε, ε, μη, εν, μην, Ένι, όχ’, ’εν, Οχ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>INTJ: ναι</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: είνι, ήνταν, ήταν, ένι, ήμν-ταν, είμι, είναι, είνη, ταν</li>
      <li>VERB-Conv: γιλώντας, κλέγουντας, τραγδώντας</li>
      <li>VERB-Fin: έχ’, λέγ’ς, ξέρ’ς, είχι, κάν’, έχου, έχουμι, θέλου, λέγου, μπουρώ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Fin: έλα, ήρτι, είπι, κάνου, πήγι, γυρίσ’, δω, είδι, Έφαγα, Κάτσι</li>
      <li>VERB-Inf: πέρνη</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: έλα, Κάτσι, Σώπα, άγι, βάλι, πάνι, Έχε, Ακ’σι, Απόβγαζί, Ας</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: είνι, ήνταν, ήταν, είναι, ένι, είμι, είνη, ήμν-ταν, είμη, ν’</li>
      <li>VERB-Fin: έχ’, κάν’, λέγ’ς, ξέρ’ς, ήρτι, είπι, είχι, κάνου, πήγι, έχου</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: θα, α</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: ήνταν, ήταν, ένι, ήμν-ταν, ταν</li>
      <li>VERB-Fin: ήρτι, είπι, είχι, πήγι, είδι, Έπριπι, Έφαγα, έκλαψι, έφγει, έφγι</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: είνι, είναι, είμι, είνη, ένι, είμη, ν’, ’μαστι, ’νι</li>
      <li>VERB-Fin: έχ’, λέγ’ς, ξέρ’ς, κάν’, έχου, έχουμι, θέλου, λέγου, μπουρώ, ξέρ’</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB-Conv: γιλώντας, κλέγουντας, τραγδώντας</li>
      <li>VERB-Fin: έχ’, κάν’, λέγ’ς, ξέρ’ς, είπι, είχι, κάνου, πήγι, έχου, έχουμι</li>
      <li>VERB-Inf: πέρνη</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX-Fin: είνι, ήνταν, ήταν, είναι, ένι, είμι, είνη, ήμν-ταν, είμη, ν’</li>
      <li>VERB-Fin: έλα, ήρτι, Κάτσι, ήρτα, ήρταν, τσμούντου, φαίνητι, Έγινι, Έχε, Αθουώθ’κα</li>
      <li>VERB-Part: αγαπμέν, αγισμένους, λαδουμένου, λοιμ’τσιασμένους, μιτσ’μένους, σπασμένα, στιναχουρημέν, συκλινσμέν, τσ’στάμινους</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Art
    <ul>
      <li>DET: του, τα, τ’, η, γη, τ’ς, γιου, μια, τουν, τ’ν</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: τόσου</li>
      <li>DET: αυτό, έγιουτα, έφτα, έφτου, τούτους, φτος, Αυτός, Φτη, Εγίτιου, Τούτ’</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: άλλου, που</li>
      <li>DET: κανέ, πουλλά, άλλοι, άλλου, πουλλοί</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: πότι, πού, τίλιγια, πώς, τι</li>
      <li>DET: τι, αλλουνού, τη</li>
      <li>PRON: τι, τί, Ποια, Τις, ποιον, ποιος</li>
      <li>SCONJ: τι</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: κανέναν, κανείς, τίπουτα, κανέ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: μ’, τ’, τουν, τα, μας, μι, μ, σ’, του, γω</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: που, Όσου</li>
      <li>DET: όποιους, Όσις, όσα</li>
      <li>PRON: που, π’, πού</li>
      <li>SCONJ: που, π’</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: ούλου, πάντα</li>
      <li>DET: ούλα, ούλ, ούλου, ούλ’, κάθι, ουλ’, κάθα, κάθε, καθένας, ούλους</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: 100, ένα, δυο, μια, 50, 2, 200, 3, δέκα, μιαν</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: μ’, τ’, μ, ντ, σ’, ιμ, τ’ς, μας, ς, ιτ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: είμι, είμη, ’μαστι</li>
      <li>PRON: μ’, μας, μι, μ, γω, ιμ, ’γώ, μεις, ήμ, γώ</li>
      <li>VERB-Fin: κάνου, έχου, έχουμι, δω, θέλου, λέγου, μπουρώ, Έφαγα, ήρτα, βάλου</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: σ’, σι, συ, ς, σ, σας, μ’, ση, ισύ, σένα</li>
      <li>VERB-Fin: έλα, λέγ’ς, ξέρ’ς, Κάτσι, Σώπα, άγι, βάλι, θέλ’ς, κάνιτι, ξερς</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: είνι, ήνταν, ήταν, είναι, ένι, είνη, ήμν-ταν, ν’, ταν, ’νι</li>
      <li>DET: φτος, Αυτός, έφτοι, έφτου</li>
      <li>PRON: τ’, τουν, τα, του, ντ, τ’ς, ντα, τό, ιτ, ν-τουν</li>
      <li>VERB-Fin: έχ’, κάν’, ήρτι, είπι, είχι, πήγι, γυρίσ’, είδι, ξέρ’, πα</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>ADP: απ</li>
          <li>ADV: ίσια, πα, πριν, Ύστιρα, Απάνου, ανάμισα, ιδώ, πά</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADV: Σαν, Σιγά, άλλου, μο</li>
          <li>NOUN: καλού</li>
          <li>NUM: 100</li>
          <li>PART: μπά, Μπα</li>
          <li>SCONJ: π’</li>
        </ul>
      </li>
      <li>INTJ
        <ul>
          <li>X: Εις</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: για</li>
          <li>SCONJ: που</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Style</a>
    <ul>
      <li>Arch
        <ul>
          <li>X: αναδράμου</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: Ελληνις, Ρήνιω, αχριγιάννα, καταμισ’νος</li>
          <li>ADP: μέσ’, μη</li>
          <li>ADV: κουμάτ, κουμάτ’, πού, άναβλα, πλ-ια, πως, πά</li>
          <li>AUX-Fin: είνη, ήμν-ταν, είμη</li>
          <li>CCONJ: τσί, τσι’</li>
          <li>DET: τσ’, γη, γι, ι, κατ’, Φτη, έγτσιν, γή, πουλι, τα</li>
          <li>INTJ: άγντη</li>
          <li>NOUN: Αφουρμί, γ-κόσμου, δλεια, δυουλιά, ηφτσή, καφαλτή, κουπηλούδια, μ-προυκουπή, μάννα, μιθύσς</li>
          <li>PART: Οχ, ένη</li>
          <li>PRON: ’γώ, τό, ν-τουν, πού, τά, ση, τί, τσ, Γω, ήμ</li>
          <li>PROPN: 15, Ατζιλικο, Γνάτσ, Θρασίβουλου, Κατιρίνη, Ξυνόφς, Σμυρν’, Φρουσήν, τσιριατσή</li>
          <li>SCONJ: νά</li>
          <li>VERB-Conv: κλέγουντας</li>
          <li>VERB-Fin: έφγει, λόγιαζει, ξερς, πήγει, πιάσει, φαίνητι, φώναζει, Ανέβτσει, Κοίτιτι, έδξει</li>
          <li>VERB-Inf: πέρνη</li>
          <li>VERB-Part: συκλινσμέν</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: είμι.</li>
</ul>

<ul>
<li>This corpus uses 3 lemmas as auxiliaries (<a>aux</a>). Examples: θα, να, ας.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (12)</li>
      <li>VERB-Fin--NOUN-Nom (57)</li>
      <li>VERB-Fin--PRON-Nom (32)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Acc (117)</li>
      <li>VERB-Fin--NOUN-Nom (5)</li>
      <li>VERB-Fin--PRON-Acc (86)</li>
      <li>VERB-Fin--PRON-Gen (1)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON-Acc (12)</li>
      <li>VERB-Fin--PRON-Gen (7)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>compound:redup</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
