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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udel_lesbian218)<br />
Download all treebanks: [UD 2.18](/#download)

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

A Universal Dependencies (UD) treebank for the dialect of Lesbos, a low-resource living Northern variety of Modern Greek. The treebank currently contains 625 sentences with manual annotations following the Universal Dependencies framework, representing the first UD treebank for a Northern Modern Greek dialect.



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

* When multiple intra-dialectal phonological variants correspond to the same lexical item, a single common lemma is used and the surface phonological difference is recorded in the MISC column using `PhonVariant` (e.g., `PhonVariant=Deaffricated`).

* Apostrophes are eliminated from lemmas to standardize representation across inconsistent source texts

* For inconsistently spelled dialectal features, the dialectologically expected form (with vowel raising and deletion) is consistently used as the lemma

* SMG orthography is applied to lemmas regardless of orthographic errors in source materials

### Special Annotations

* Voicing and euphonic annotations appear in the `MISC` column using the `MSeg|MGloss` format to explicitly document these phenomena.
* Orthographic standardization is integrated with annotations, preserving original dialectal forms in the `FORM` column while providing standardized forms in `MISC`.
* Parallel translations of each sentence in SMG facilitate comparative research.
* Metadata fields such as `sent_id` and `source` identify whether a sentence originates from written or oral data.

## Data Sources

The corpus draws from six main sources representing different text types and dialectal variants from across Lesbos. The treebank consists of randomly shuffled sentences coming from these sources:

### Dialectal Dictionaries (example sentences)

* Papanis, D. and Papanis, G. D. (2004). Lexiko tou Agiasotikou Glosikou Idiomatos [Dictionary of the Agiasos Dialect], 3rd improved and expanded edition. Private edition, Mytilene.

* Ralli, A. (2017). Lexiko dialektikis poikilias. Kydonion-Moschonision kai Voreioanatolikis Lesvou [Dictionary of dialectal variety. Kydonies-Moschonisia and Northeastern Lesbos]. Hellenic Foundation for Historical Studies, Athens.

* Anagnostopoulou, M. A. (2021). Thematiko Lexiko tis Lesviakis Dialektou [Thematic Dictionary of the Lesbos Dialect]. Mythos BOOKS, Mytilene.

### Contemporary Lesbian Literature

* Tsokarou-Mitsioni, E. (1998). Palies Istories ap tn Agiasiou [Old Stories from Agiaso], 2nd edition. Private Edition, Mytilene.

* Anagnostou, V. T. (2014). Tsi sta th'ka mas: Komodia sta k'stariot'ka [Tsi sta th'ka mas: Comedy in the K'stariot'ka Dialect], first edition. Estia Technon Skoutarou "T'Apono to Scholio".

* Tsokarou-Mitsioni, E. (2019). Prosfygiá [Refugeehood], first edition. D. Doukas & Sia O.V.E.E.

### Oral Corpus (Field Research 2023–2024)

In addition to written sources, the dataset includes **oral sentences transcribed from recordings collected during fieldwork conducted across multiple villages of Lesbos between 2023 and 2024**.
These recordings capture speakers of different ages and local varieties, reflecting the living use and intra-island variation of the dialect.


## Acknowledgments

This work has been carried out within the Archimedes Research Unit of the Athena Research Center, Greece. It has been partially supported by project MIS 5154714 of the National Recovery and Resilience Plan Greece 2.0, funded by the European Union under the NextGenerationEU Program. It also received support from the CA21167 COST action UniDive, funded by COST (European Cooperation in Science and Technology).


# Statistics of UD Greek Lesbian

## POS Tags

[ADJ](el_lesbian-pos-ADJ.html) – [ADP](el_lesbian-pos-ADP.html) – [ADV](el_lesbian-pos-ADV.html) – [AUX](el_lesbian-pos-AUX.html) – [CCONJ](el_lesbian-pos-CCONJ.html) – [DET](el_lesbian-pos-DET.html) – [INTJ](el_lesbian-pos-INTJ.html) – [NOUN](el_lesbian-pos-NOUN.html) – [NUM](el_lesbian-pos-NUM.html) – [PART](el_lesbian-pos-PART.html) – [PRON](el_lesbian-pos-PRON.html) – [PROPN](el_lesbian-pos-PROPN.html) – [PUNCT](el_lesbian-pos-PUNCT.html) – [SCONJ](el_lesbian-pos-SCONJ.html) – [VERB](el_lesbian-pos-VERB.html) – [X](el_lesbian-pos-X.html)

## Features

[Aspect](el_lesbian-feat-Aspect.html) – [Case](el_lesbian-feat-Case.html) – [Definite](el_lesbian-feat-Definite.html) – [Degree](el_lesbian-feat-Degree.html) – [ExtPos](el_lesbian-feat-ExtPos.html) – [Gender](el_lesbian-feat-Gender.html) – [Mood](el_lesbian-feat-Mood.html) – [Number](el_lesbian-feat-Number.html) – [NumType](el_lesbian-feat-NumType.html) – [Person](el_lesbian-feat-Person.html) – [Polarity](el_lesbian-feat-Polarity.html) – [Poss](el_lesbian-feat-Poss.html) – [PronType](el_lesbian-feat-PronType.html) – [PunctType](el_lesbian-feat-PunctType.html) – [Tense](el_lesbian-feat-Tense.html) – [Typo](el_lesbian-feat-Typo.html) – [VerbForm](el_lesbian-feat-VerbForm.html) – [Voice](el_lesbian-feat-Voice.html)

## Relations

[acl](el_lesbian-dep-acl.html) – [acl:relcl](el_lesbian-dep-acl-relcl.html) – [advcl](el_lesbian-dep-advcl.html) – [advcl:relcl](el_lesbian-dep-advcl-relcl.html) – [advmod](el_lesbian-dep-advmod.html) – [amod](el_lesbian-dep-amod.html) – [appos](el_lesbian-dep-appos.html) – [aux](el_lesbian-dep-aux.html) – [case](el_lesbian-dep-case.html) – [cc](el_lesbian-dep-cc.html) – [ccomp](el_lesbian-dep-ccomp.html) – [compound](el_lesbian-dep-compound.html) – [compound:redup](el_lesbian-dep-compound-redup.html) – [conj](el_lesbian-dep-conj.html) – [cop](el_lesbian-dep-cop.html) – [csubj](el_lesbian-dep-csubj.html) – [det](el_lesbian-dep-det.html) – [discourse](el_lesbian-dep-discourse.html) – [dislocated](el_lesbian-dep-dislocated.html) – [expl](el_lesbian-dep-expl.html) – [fixed](el_lesbian-dep-fixed.html) – [flat](el_lesbian-dep-flat.html) – [goeswith](el_lesbian-dep-goeswith.html) – [iobj](el_lesbian-dep-iobj.html) – [mark](el_lesbian-dep-mark.html) – [nmod](el_lesbian-dep-nmod.html) – [nsubj](el_lesbian-dep-nsubj.html) – [nsubj:pass](el_lesbian-dep-nsubj-pass.html) – [nummod](el_lesbian-dep-nummod.html) – [obj](el_lesbian-dep-obj.html) – [obl](el_lesbian-dep-obl.html) – [obl:agent](el_lesbian-dep-obl-agent.html) – [orphan](el_lesbian-dep-orphan.html) – [parataxis](el_lesbian-dep-parataxis.html) – [punct](el_lesbian-dep-punct.html) – [reparandum](el_lesbian-dep-reparandum.html) – [root](el_lesbian-dep-root.html) – [vocative](el_lesbian-dep-vocative.html) – [xcomp](el_lesbian-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 625 sentences, 6624 tokens and 6840 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 991 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 447 types of words that contain both letters and punctuation. Examples: τ’, απ’, μ’, τσ’, σ’, τ’ς, έχ’, όχ’, ντ’, π’, τ’ν, σπίτ’, κάν’, γ’, γι’, είν’, ν’, χέρ’, ότ’, ‘γού, ‘μείς, ’γώ, έτσ’, ανθρώπ’, θέλ’, λάδ’, λέγ’ς, ξέρ’ς, ούλ’, πάρ’, σπίκ’, ‘δώ, έπρεπ’, είχ’, κουμμάτ’, κόρ’, μέσ’, ξέρ’, πάγ’, τσιφάλ’, ό,τ’, Σίγρ’, αθρώπ’, βλέπ’, γίν’, γυρίσ’, γ’ναίκα, δ’λειά, κάν’ς, κουμάτ’</li>
</ul>

<ul>
<li>This corpus contains 216 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 90 types of multi-word tokens. Examples: στου, στα, στο, στ’, σν, στς, στη, γιεμ, κουρούδαμ, κόρημ, μπάτσι, πας, στον, στουν, στους, στ’ν, τνώρα, τόχιτι, Πατέρασιτς, ήξιρειντα, ίσιαμ, ίσιαμι, αμί, απόξου, βάλτου, βρακουζώνς, γέμστου, γιομ, είπντα, εμπουρεί, εμπουρώ, ηφτσήμ, θκάς, θκος, ιφστήμ, κοντάμ, κόρηντ, λέγαντα, μάναμ, μάτιασ’, μήπι, μουρέλιμ, μουρφιάτσ, μουρόμ, νάβγει, νάν’, νάρτ, νέρτ, νήνταν, νακλσησιά.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 22 word types tagged as particles (PART): Ένι, Δηλαδή, Μπα, Οχ, έ, έν, έν-ι, ένη, δα, δε, δεν, δ’, ε, εν, μή, μη, μην, μπά, νά, να, όχ’, ’εν</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as pronouns (PRON): η, ιγώ, μι, π, ποιος, που, σι, τι, τις</li>
</ul>

<ul>
<li>This corpus contains 37 lemmas tagged as determiners (DET): άλλους, έγιουτους, έγιτσεινους, ένας, αυτός, εύτους, η, ιγώ, κάθα, κάθι, κάμπουσους, κάτ, καθένας, κανένας, κανείς, μ, μιρκός, ου, ούλους, πάν, πουλύς, πόθα, πόσους, τέτοιους, τίπουτα, τα, τι, τις, του, τούτους, τσείνους, τόσουνας, τόσους, ό,τ, όλους, όποιους, όσους</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as PRON and sometimes as DET: η, ιγώ, τι, τις</li>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as auxiliaries (AUX): έχου, ας, είμι, θα, να</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: έχου</li>
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
    <li>AUX: ήνταν, είνι, ήταν, είναι, είν’, είμαι, ένι, είμι, είν, είνη</li>
    <li>VERB: είχε, έχ’, κάν’, λέει, έλα, έχουν, κάνου, πάμι, πω, έπρεπε</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: ακούσ’, διαβάσ’, μείν’, πάει, πάρ’, πέρνη, φύγ’</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: Ευχαριστημέν’, Παντρεμένος, αβανουκαμένος, αγαπμέν, αγισμένους, γεννμέν’, ιρουτιβμένους, καμωμένα, καμωμένο, λαδουμένου</li>
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
      <li>ADJ: καλή, αγιά, μεγάλ’, κυρά, φτουχές, Αγ’, Μικρά, Μικράς, Ρήνιω, έγκυος</li>
      <li>DET: η, μια, τ’, γη, τς, τ’ς, τν, τη, τ’ν, ντ’</li>
      <li>INTJ: μουρή, βουρή, Καληνύχτα, Μούρ, μουρ</li>
      <li>NOUN: μάνα, μέρα, ώρα, γναίκα, κόρη, κόρ’, νύχτα, φουτιά, βαλανιδιά, γιαγιά</li>
      <li>NUM: μια, δυο, τρεις, 2, 3, μιαν</li>
      <li>PRON: που, τς, τ’ς, τ’, ντουν, πού, τν, τσ’, Ποια, ιτζ</li>
      <li>PROPN: Ανθή, Αντρόνα, Βαρβάρα, Γκαλλονή, Ερσσό, Μυτιλήν, Μυτιλήν’, Παναγιά, Παναγιούδα, Ρουζαλία</li>
      <li>VERB: Ευχαριστημέν’, αγαπμέν, ασπρουγάνιασις, γεννμέν’, στιναχουρημέν, συκλινσμέν</li>
      <li>VERB-Part: Ευχαριστημέν’, αγαπμέν, γεννμέν’, στιναχουρημέν, συκλινσμέν</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: καημένους, Τούρκους, κακός, καλός, μεγάλου, Άγαρμπους, Άγιο, Άν’φτους, Αγιού, Ελληνις</li>
      <li>DET: του, οι, τουν, η, γιου, ι, ένας, ο, τ’, γη</li>
      <li>INTJ: Βούρ’, μουρ, μουρέ</li>
      <li>NOUN: άθριπους, άντρα, ανθρώπ’, γιατρός, γιε, κόσμους, άντρας, αθρώπ’, γιο, γιος</li>
      <li>NUM: ένα, δυο</li>
      <li>PRON: τ’, τουν, ιτ, τ, ντ, που, του, ν-τουν, ντον, ντουν</li>
      <li>PROPN: Β’ναριώτις, Γιάνν’, Γιάνν’ς, Γιώργ’, Δησέφ, Χατζικουμής, γι-Απουστόλ’ς, 15, Αλέκου, Απουστόλς</li>
      <li>VERB: Παντρεμένος, αβανουκαμένος, αγισμένους, ιρουτιβμένους, κουλουξυρ’σμένους, λοιμ’τσιασμένους, μιτσ’μένους, μπαντρεμένος, παντρεμέν’, τσ’στάμινους</li>
      <li>VERB-Part: Παντρεμένος, αβανουκαμένος, αγισμένους, ιρουτιβμένους, λοιμ’τσιασμένους, μιτσ’μένους, μπαντρεμένος, παντρεμέν’, τσ’στάμινους</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: καλό, μαύρα, θκα, θκο, κακό, λίγα, μσό, ξύλου, Αγροτικό, Β’ναριώτ’κου</li>
      <li>DET: του, τα, το, τ’, αυτό, ούλα, ένα, τ, άλλου, πουλλά</li>
      <li>INTJ: μουρά</li>
      <li>NOUN: μουρό, σπίτ’, χρόνια, χουριό, πράμα, χωριό, μουρά, πράματα, χέρ’, λάδ’</li>
      <li>NUM: δυο, ένα, τρία, 100, 200, δέκα, τριγιά</li>
      <li>PRON: τα, του, τι, το, που, ντα, ντου, π’, τ’, τί</li>
      <li>PROPN: Μπουτέλ, Σίγρ’, Ατζιλικό, Μουσχουν’ήσ, Χίδερα, Ακλιδιού, Ασπασέλ’, Ατζιλικο, Αϊβαλί, Γιουργή</li>
      <li>SCONJ: τι</li>
      <li>VERB-Part: καμωμένα, καμωμένο, λαδουμένου, μπαντρεμένα, ξετσλιασμένου, σπασμένα, στρμωγμένα, χτισμένου</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: μαύρα, θκα, λίγα, φτουχές, Ελληνις, Ζουντανοί, Κύριοι, Τούρτσ’, απανουγυρισ’κά, αρχαία</li>
      <li>AUX-Fin: ήνταν, ήταν, είναι, είνι, Έχουν, έχουμ’, είμαι, είμαστε, ν’, ’μαστι</li>
      <li>DET: τα, οι, ούλα, τς, τ’ς, πουλλά, έγιουτα, γη, τσ’, τ’</li>
      <li>INTJ: μουρά</li>
      <li>NOUN: χρόνια, πράματα, ανθρώπ’, μουρά, χουράφια, χωριά, αδέρφια, αθρώπ’, γναίτσις, μάτια</li>
      <li>NUM: δυο, τρία, τρεις, 100, 2, 200, 3, δέκα, τριγιά</li>
      <li>PRON: τα, μας, που, ‘μείς, ντα, ντουν, σας, πό, τά, μεις</li>
      <li>PROPN: Β’ναριώτις, Χίδερα, Ατζιλικο, Μαλάματα, Παράκοιλα, Χάνια, Χουχλιά</li>
      <li>VERB: έχουν, πάμι, είχαν, έχουμι, κάναν, πήραν, φύγαν, ήβραν, ήρταν, βάλουμε</li>
      <li>VERB-Fin: έχουν, πάμι, είχαν, έχουμι, κάναν, πήραν, φύγαν, ήβραν, ήρταν, βάλουμε</li>
      <li>VERB-Part: καμωμένα, μπαντρεμένα, παντρεμέν’, σπασμένα, στρμωγμένα</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: καλή, καλό, καημένους, Τούρκους, αγιά, μεγάλ’, θκο, κακό, κακός, καλός</li>
      <li>AUX-Fin: ήνταν, είνι, ήταν, είναι, είν’, είμαι, ένι, είμι, είν, είνη</li>
      <li>DET: του, η, το, τ’, μια, αυτό, γη, τουν, γιου, ένα</li>
      <li>INTJ: μουρή, βουρή, μουρ, Βούρ’, Καληνύχτα, Μούρ, μουρέ</li>
      <li>NOUN: μάνα, μέρα, μουρό, σπίτ’, χουριό, ώρα, πράμα, χωριό, άθριπους, χέρ’</li>
      <li>NUM: ένα, μια, μιαν</li>
      <li>PRON: μ’, τ’, του, τουν, μ, μι, που, σ’, τι, ιμ</li>
      <li>PROPN: Ανθή, Μπουτέλ, Σίγρ’, Αντρόνα, Ατζιλικό, Βαρβάρα, Γιάνν’, Γιάνν’ς, Γιώργ’, Γκαλλονή</li>
      <li>SCONJ: τι</li>
      <li>VERB: είχε, έχ’, κάν’, λέει, έλα, κάνου, πω, έπρεπε, έχου, ήρτι</li>
      <li>VERB-Fin: είχε, έχ’, κάν’, λέει, έλα, κάνου, πω, έπρεπε, έχου, ήρτι</li>
      <li>VERB-Part: Ευχαριστημέν’, Παντρεμένος, αβανουκαμένος, αγαπμέν, αγισμένους, γεννμέν’, ιρουτιβμένους, καμωμένο, λαδουμένου, λοιμ’τσιασμένους</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: καλό, μαύρα, αγιά, θκα, κακό, λίγα, μεγάλου, μεγάλ’, ξύλου, φτουχές</li>
      <li>DET: του, τα, τ’, το, τουν, μια, αυτό, ούλα, τη, τν</li>
      <li>INTJ: Καληνύχτα</li>
      <li>NOUN: μέρα, σπίτ’, χρόνια, χουριό, ώρα, χέρ’, πράματα, χωριό, άντρα, λάδ’</li>
      <li>NUM: ένα, δυο, μια, τρία, τρεις, 100, 2, 200, 3, δέκα</li>
      <li>PRON: τα, του, τουν, μι, τι, το, που, σι, μας, μ’</li>
      <li>PROPN: Γκαλλονή, Μουσχουν’ήσ, Μυτιλήν, Μυτιλήν’, Σίγρ’, Χίδερα, Ακλιδιού, Αλέκου, Αμερική, Βαγγέλ’</li>
      <li>SCONJ: τι</li>
      <li>VERB: καμωμένο, κουλουξυρ’σμένους, λαδουμένου, μπαντρεμένα, ξετσλιασμένου, σπασμένα</li>
      <li>VERB-Part: καμωμένο, λαδουμένου, μπαντρεμένα, ξετσλιασμένου, σπασμένα</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: Αγιού, Μικράς, αναγκαίου</li>
      <li>DET: τ’, τς, τ’ς, του, τ, αλλουνού, της, τσ’</li>
      <li>NOUN: σπιτιού, χρονών, ακκλησάς, αντρού, γειτουνιάς, θειά, ιγτουνιάσ’, καβγά, μάνα, μάνας</li>
      <li>PRON: μ’, τ’, μας, μ, ιμ, σ’, ιτ, ντ, τ, τ’ς</li>
      <li>PROPN: Άγρας, Ασίας, Βασ’λειού, Γιάνν’, Γώγου, Θιού, Θιρμής, Ιουλίου, Καλλονής, Κουλουμαρίγιας</li>
      <li>VERB: ασπρουγάνιασις</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: καημένους, καλή, Τούρκους, Καλό, κακός, καλός, μσό, Άγαρμπους, Άν’φτους, Ζουντανοί</li>
      <li>DET: η, του, τα, γη, οι, γιου, το, ι, ένας, ο</li>
      <li>INTJ: μουρή</li>
      <li>NOUN: μάνα, μουρό, άθριπους, ανθρώπ’, γιατρός, κόσμους, πράμα, άντρας, αθρώπ’, γιαγιά</li>
      <li>NUM: δυο, μια</li>
      <li>PRON: που, γω, συ, ‘γού, ‘μείς, ’γώ, ιγώ, πού, π’, εσύ</li>
      <li>PROPN: Μπουτέλ, Ανθή, Αντρόνα, Ατζιλικό, Β’ναριώτις, Γιάνν’ς, Ερσσό, Χατζικουμής, γι-Απουστόλ’ς, 15</li>
      <li>SCONJ: τι</li>
      <li>VERB: Ευχαριστημέν’, Παντρεμένος, αβανουκαμένος, αγισμένους, γεννμέν’, ιρουτιβμένους, καμωμένα, λοιμ’τσιασμένους, μιτσ’μένους, μπαντρεμένος</li>
      <li>VERB-Part: Ευχαριστημέν’, Παντρεμένος, αβανουκαμένος, αγισμένους, γεννμέν’, ιρουτιβμένους, καμωμένα, λοιμ’τσιασμένους, μιτσ’μένους, μπαντρεμένος</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: κυρά, Αγιά, Κύριοι, Ρήνιω, απρόκουφτι, αχριγιάννα, κυρ, κ’μπάρι</li>
      <li>INTJ: μουρή, βουρή, μουρ, Βούρ’, Μούρ, μουρά, μουρέ</li>
      <li>NOUN: γιε, μάνα, θρώπ’, μουρέλλ’, άθρουπι, άντρα, αγουρουφά, γναίκα, γρουσούζα, γ’ναίκα</li>
      <li>PROPN: Παναγιούδα, Ρουζαλία, Ανθή, Ατζιλικο, Βαρβάρα, Γιώργ’, Δημητρό, Εύα, Θιέ, Θιμιστουκλή</li>
      <li>VERB-Part: αγαπμέν</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: του, τα, η, τ’, το, γη, οι, τουν, τς, γιου</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: μια, ένα, ένας, έναν, έν’, καμιά, μνιαν</li>
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
      <li>ADJ: λίγα</li>
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
      <li>ADV: λιγάκ’</li>
      <li>NOUN: κουρούδα, μουρέλλ’, ακκλησιούδα, γαβανέλ, εκκλησέλ, καμαρούδα, καφιδέλ, κουπηλούδια, κουπιλούδια, κουπιλούδις</li>
      <li>PROPN: Μπουτέλ, Ατζιλικό, Παναγιούδα, Ασπασέλ’, Ατζιλικο, Γληγουρέλ’, Κατιρίνη, Μαριγώ, Ν’κουλέλ’, Ξινέλ’</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>CCONJ: μήδ, μήδι</li>
      <li>INTJ: όχ’, Όχι, Όχ</li>
      <li>PART: δεν, δε, εν, ε, μη, έ, όχ’, μην, έν, μή</li>
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
      <li>AUX-Fin: ήνταν, ήταν, είνι, είν’, είμαι, είναι, είν, είχε, νταν, ένι</li>
      <li>VERB-Conv: γιλώντας, κλέγουντας, τραγδώντας</li>
      <li>VERB-Fin: είχε, έχ’, λέει, έχουν, έπρεπε, έχου, είχαν, θέλ’, κάν’, λέγ’ς</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Fin: έλα, πω, ήρτι, βάλι, είπι, κάνου, κάτσι, δω, είπε, κάν’</li>
      <li>VERB-Inf: ακούσ’, διαβάσ’, μείν’, πάει, πάρ’, πέρνη, φύγ’</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: έλα, βάλι, κάτσι, πάνι, Σώπα, άγι, πλύνι, στρώσε, Άκου, Έχε</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: ήνταν, είνι, ήταν, είναι, είν’, είμαι, ένι, είμι, είν, είνη</li>
      <li>VERB-Fin: είχε, έχ’, κάν’, λέει, έχουν, κάνου, πάμι, πω, έπρεπε, έχου</li>
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
      <li>AUX-Fin: ήνταν, ήταν, είχε, νταν, ένι, ήμν-ταν, νι, ταν</li>
      <li>VERB-Fin: είχε, έπρεπε, ήρτι, είπι, είχαν, έπρεπ’, είπε, είχι, πήγι, έκανε</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: είνι, είναι, είν’, είμαι, είμι, είν, είνη, Έχεις, Έχουν, Έχς</li>
      <li>VERB-Fin: έχ’, λέει, έχουν, έχου, θέλ’, κάν’, λέγ’ς, ξέρ’ς, θέλου, λέγου</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX-Fin: είχε, Έχεις, Έχουν, Έχς, έχουμ’, ‘χω</li>
      <li>VERB-Conv: γιλώντας, κλέγουντας, τραγδώντας</li>
      <li>VERB-Fin: είχε, έχ’, κάν’, λέει, έχουν, κάνου, πάμι, πω, έπρεπε, έχου</li>
      <li>VERB-Inf: ακούσ’, διαβάσ’, μείν’, πάει, πάρ’, πέρνη, φύγ’</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: έλα, ήρτι, κάτσι, ήρτα, ήρταν, γίνται, γίνταν, γίν’, γεννήθκα, θμάσαι</li>
      <li>VERB-Part: Ευχαριστημέν’, Παντρεμένος, αβανουκαμένος, αγαπμέν, αγισμένους, γεννμέν’, ιρουτιβμένους, καμωμένα, καμωμένο, λαδουμένου</li>
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
      <li>DET: του, τα, η, τ’, το, γη, μια, οι, τουν, τς</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: τόσου</li>
      <li>DET: αυτό, αυτός, φτος, έγιουτα, έφτου, έφτα, αυτή, τούτους, φκοι, Φτη</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: πουλύ, που, άλλου, λίγου</li>
      <li>DET: άλλου, πουλλά, κάκ’, κάτ’, άλλους, κανέ, άλλα, κάτ, άλλο, άλλοι</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: πού, πότι, γιατί, πώς, τίλιγια, τι, Τίλουγια, Τ, Τίλια</li>
      <li>DET: τι, Τί, αλλουνού, πόθα, πόσα, τη</li>
      <li>PRON: τι, τί, ποιος, Ποια, Ποιός, Τις, κι, ποιον, πού</li>
      <li>SCONJ: τι</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: πουτέ</li>
      <li>DET: κανείς, καμιά, τίπουτα, κανέναν, κάνα, κίποτα, καμιάν, κανέ, κανένας, καν’είς</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: μ’, τ’, τα, του, μας, τουν, μ, μι, σ’, ιμ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: που, όπως, Όσου, π</li>
      <li>DET: ό,τ’, όποιους, Όσις, όποιος, όσα</li>
      <li>PRON: που, π’, πού, πό, π</li>
      <li>SCONJ: που, π’</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: ούλου, πάντα</li>
      <li>DET: ούλα, ούλ’, ούλου, ούλ, πάντα, κάθα, κάθι, ουλ’, ούλις, κάθε</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: δυο, ένα, μια, 100, 1912, 9, τρία, 12, 120, 13</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: πρώτους</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: μ’, τ’, μας, μ, ιμ, σ’, ιτ, ντ, ς, τ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: είμαι, είμι, έχουμ’, είμαστε, είμη, ‘χω, ’μαστι</li>
      <li>PRON: μ’, μας, μ, μι, ιμ, γω, ‘γού, ‘μείς, ’γώ, ιγώ</li>
      <li>VERB-Fin: κάνου, πάμι, πω, έχου, δω, θέλου, λέγου, μπουρώ, έχουμι, είδα</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: Έχεις, Έχς</li>
      <li>PRON: σ’, σι, σ, συ, ς, σας, σε, εσύ, μ’, ση</li>
      <li>VERB-Fin: έλα, βάλι, κάτσι, λέγ’ς, ξέρ’ς, θες, κάν’ς, λες, ξέρς, πάνι</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: ήνταν, είνι, ήταν, είναι, είν’, ένι, είν, είνη, είχε, νταν</li>
      <li>DET: αυτός, φτος, έφτοι, έφτου, αυτοί</li>
      <li>PRON: τ’, τα, του, τουν, το, ιτ, τ, ντ, τς, τ’ς</li>
      <li>VERB-Fin: είχε, έχ’, κάν’, λέει, έχουν, έπρεπε, ήρτι, είπι, είχαν, θέλ’</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>ADV: Απάνου, ίσια, ανάμισα, ιδώ</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADJ: καλού</li>
          <li>ADP: απ, σ</li>
          <li>ADV: άλλου</li>
          <li>NUM: 100</li>
          <li>PART: μπά, Μπα</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>ADV: ακόμα</li>
        </ul>
      </li>
      <li>INTJ
        <ul>
          <li>X: Εις</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: για, Μι</li>
          <li>SCONJ: παρόλο</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PunctType</a>
    <ul>
      <li>Brck
        <ul>
          <li>PUNCT: (, )</li>
        </ul>
      </li>
      <li>Colo
        <ul>
          <li>PUNCT: :</li>
        </ul>
      </li>
      <li>Comm
        <ul>
          <li>PUNCT: ,</li>
        </ul>
      </li>
      <li>Dash
        <ul>
          <li>PUNCT: -</li>
        </ul>
      </li>
      <li>Excl
        <ul>
          <li>PUNCT: !</li>
        </ul>
      </li>
      <li>Peri
        <ul>
          <li>PUNCT: ., ...</li>
        </ul>
      </li>
      <li>Qest
        <ul>
          <li>PUNCT: ;</li>
        </ul>
      </li>
      <li>Quot
        <ul>
          <li>PUNCT: «, »</li>
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
          <li>ADV: κουμάτ, κουμάτ’, πού, άναβλα, πά, πλ-ια, πως</li>
          <li>AUX-Fin: είνη, ήμν-ταν, είμη</li>
          <li>CCONJ: τσί, τσι’</li>
          <li>DET: τσ’, γη, γι, ι, Φτη, έγτσιν, γή, κατ’, πουλι, τα</li>
          <li>INTJ: άγντη</li>
          <li>NOUN: Αφουρμί, ακλσησιά, γ-κόσμου, δλεια, δυουλιά, δ’λιά, ηφτσή, καφαλτή, κουπηλούδια, κουρούδα</li>
          <li>PART: Οχ, ένη</li>
          <li>PRON: ’γώ, τό, ν-τουν, πού, τά, μ, ση, τί, τσ, Γω</li>
          <li>PROPN: 15, Ατζιλικο, Γνάτσ, Θρασίβουλου, Κατιρίνη, Ξυνόφς, Σμυρν’, Φρουσήν, τσιριατσή</li>
          <li>SCONJ: μι, νά</li>
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
<li>This corpus uses 4 lemmas as auxiliaries (<a>aux</a>). Examples: θα, να, έχου, ας.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Nom (161)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(σι) (1)</li>
      <li>VERB-Fin--PRON-Nom (62)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Part--NOUN-Nom (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Acc (255)</li>
      <li>VERB-Fin--NOUN-Nom (9)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (171)</li>
      <li>VERB-Fin--PRON-Gen (1)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Inf--PRON-Acc (2)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--PRON-Acc (19)</li>
      <li>VERB-Fin--PRON-Gen (13)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>compound:redup</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>dep</a></li>
</ul>
