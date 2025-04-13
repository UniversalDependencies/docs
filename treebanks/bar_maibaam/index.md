---
layout: base
title:  'UD_Bavarian-MaiBaam'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Bavarian MaiBaam

Language: [Bavarian](/bar/index.html) (code: `bar`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.14 release.

The following people have contributed to making this treebank part of UD: Verena Blaschke, Barbara Kovačić, Siyao Peng, Miriam Winkler, Barbara Plank.

Repository: [UD_Bavarian-MaiBaam](https://github.com/UniversalDependencies/UD_Bavarian-MaiBaam)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udbar_maibaam215)<br />
Download all treebanks: [UD 2.15](/#download)

License: CC BY-SA 4.0

Genre: wiki, social, fiction, nonfiction, grammar-examples

Questions, comments?
General annotation questions (either Bavarian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Bavarian-MaiBaam/issues).
If you want to collaborate, please contact [verena&nbsp;•&nbsp;blaschke&nbsp;(æt)&nbsp;cis&nbsp;•&nbsp;lmu&nbsp;•&nbsp;de].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | not available |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | not available |
| Relations | annotated manually, natively in UD style |

## Description

MaiBaam is manually annotated with part-of-speech tag, syntactic dependencies, and German lemmas.
The treebank encompasses diverse text genres (wiki articles and discussions, grammar examples, fiction, and commands for virtual assistants) and dialects from the North, Central and South Bavarian areas as well as the dialectal transition areas in between.



Although Bavarian is closely related to Standard German, there are morphosyntactic differences, several of which are reflected in the UD annotations. We detail these differences in the documents linked below. As there is no standard orthography for Bavarian, the spelling reflects the phonetic variation between different Bavarian dialects, as well as idiosyncratic spelling-related differences.

We include sentence-level metadata:
- `genre`: One of *wiki* (Wikipedia articles), *social* (Wikipedia discussion pages), *fiction* (fairy tales), *grammar examples* (Tatoeba sentences, example sentences from Wikipedia pages about Bavarian grammar), *non-fiction* (queries for virtual assistants).
- `dialect_group`: One of *north, northcentral, central, southcentral, south* if we know the dialect group (where, e.g., *southcentral* is the transition area between the South Bavarian and Central Bavarian dialect regions), *unk* (unknown) if we do not have any information on the dialect group, and a code like *unk (southcentral/south)* if we can narrow down the options to, in this case, South Bavarian or the South/Central transition area.
- `location`: The city or municipality if known, else the state or province, else the country, else *unk* (unknown).
- `source`: For sentences from Wikipedia or Tatoeba, we include the source URL.
- `author`: The username of a Tatoeba sentence’s author, per [Tatoeba's usage conditions](https://tatoeba.org/en/terms_of_use#section-6).
- `text_en`: The original English sentence, for sentences translated from English (xsid, cairo).

The `sent_id`s indicate what source a sentence was taken from (see below).

The `MISC` column contains manually annotated German-language lemmas (`GermanLemma=...`). Unknown lemmas are annotated with `GermanLemma=<unknown>`.

## Acknowledgments

## Sources and licenses

We include sentences from the following sources, as indicated by different `sent_id` prefixes:
- [Bavarian Wikipedia](https://bar.wikipedia.org/), (`wiki`, `wikitalk`, `wikisource`, `wikisample`) shared under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- [Tatoeba](https://tatoeba.org/en) (`tatoeba`), shared under [CC BY 2.0 FR](https://creativecommons.org/licenses/by/2.0/fr/), with usage conditions also detailed [here](https://tatoeba.org/en/terms_of_use#section-6).
- Translations of [xSID](https://github.com/mainlp/xsid) ([van der Goot et al. 2020](https://aclanthology.org/2021.naacl-main.197/), Winkler et al. 2024: "Slot and Intent Detection Resources for Bavarian and Lithuanian: Assessing Translations vs Natural Queries to Digital Assistants"), shared under [CC BY-SA 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/). **NOTE:** We include different data splits: *xSID dev* for South Tyrolean sentences (`xsid_de-st_dev`), *xSID test* (!) for Central Bavarian sentences (`xsid_de-ba_test`).
- [Non-translated SID data](https://github.com/mainlp/NaLiBaSID), also from Winkler et al. 2024 (`sid_de-ba_natural`).
- A translation of the [Cairo CICLing Corpus](https://github.com/UniversalDependencies/cairo/) (`cairo`).

## References

The data collection and annotation, as well as initial ML experiments are described in the following paper, which also contains a data statement.
Please cite this paper when using the treebank:

- Verena Blaschke, Barbara Kovačić, Siyao Peng, Hinrich Schütze & Barbara Plank. 2024. *MaiBaam: A multi-dialectal Bavarian Universal Dependency treebank.* LREC-COLING 2024. ([pdf](https://aclanthology.org/2024.lrec-main.953/))

For detailed annotation guidelines, please read the following report:

- Verena Blaschke, Barbara Kovačić, Siyao Peng, Barbara Plank. 2024. *MaiBaam Annotation Guidelines.* Report, LMU Munich. ([pdf](https://arxiv.org/pdf/2403.05902.pdf))



# Statistics of UD Bavarian MaiBaam

## POS Tags

[ADJ](bar_maibaam-pos-ADJ.html) – [ADP](bar_maibaam-pos-ADP.html) – [ADV](bar_maibaam-pos-ADV.html) – [AUX](bar_maibaam-pos-AUX.html) – [CCONJ](bar_maibaam-pos-CCONJ.html) – [DET](bar_maibaam-pos-DET.html) – [INTJ](bar_maibaam-pos-INTJ.html) – [NOUN](bar_maibaam-pos-NOUN.html) – [NUM](bar_maibaam-pos-NUM.html) – [PART](bar_maibaam-pos-PART.html) – [PRON](bar_maibaam-pos-PRON.html) – [PROPN](bar_maibaam-pos-PROPN.html) – [PUNCT](bar_maibaam-pos-PUNCT.html) – [SCONJ](bar_maibaam-pos-SCONJ.html) – [SYM](bar_maibaam-pos-SYM.html) – [VERB](bar_maibaam-pos-VERB.html) – [X](bar_maibaam-pos-X.html)

## Features



## Relations

[acl](bar_maibaam-dep-acl.html) – [acl:relcl](bar_maibaam-dep-acl-relcl.html) – [advcl](bar_maibaam-dep-advcl.html) – [advcl:relcl](bar_maibaam-dep-advcl-relcl.html) – [advmod](bar_maibaam-dep-advmod.html) – [amod](bar_maibaam-dep-amod.html) – [appos](bar_maibaam-dep-appos.html) – [aux](bar_maibaam-dep-aux.html) – [aux:pass](bar_maibaam-dep-aux-pass.html) – [case](bar_maibaam-dep-case.html) – [cc](bar_maibaam-dep-cc.html) – [ccomp](bar_maibaam-dep-ccomp.html) – [compound](bar_maibaam-dep-compound.html) – [compound:prt](bar_maibaam-dep-compound-prt.html) – [conj](bar_maibaam-dep-conj.html) – [cop](bar_maibaam-dep-cop.html) – [csubj](bar_maibaam-dep-csubj.html) – [dep](bar_maibaam-dep-dep.html) – [det](bar_maibaam-dep-det.html) – [det:poss](bar_maibaam-dep-det-poss.html) – [discourse](bar_maibaam-dep-discourse.html) – [dislocated](bar_maibaam-dep-dislocated.html) – [expl](bar_maibaam-dep-expl.html) – [expl:pv](bar_maibaam-dep-expl-pv.html) – [fixed](bar_maibaam-dep-fixed.html) – [flat](bar_maibaam-dep-flat.html) – [goeswith](bar_maibaam-dep-goeswith.html) – [mark](bar_maibaam-dep-mark.html) – [nmod](bar_maibaam-dep-nmod.html) – [nsubj](bar_maibaam-dep-nsubj.html) – [nsubj:pass](bar_maibaam-dep-nsubj-pass.html) – [nummod](bar_maibaam-dep-nummod.html) – [obj](bar_maibaam-dep-obj.html) – [obl](bar_maibaam-dep-obl.html) – [obl:agent](bar_maibaam-dep-obl-agent.html) – [obl:arg](bar_maibaam-dep-obl-arg.html) – [orphan](bar_maibaam-dep-orphan.html) – [parataxis](bar_maibaam-dep-parataxis.html) – [punct](bar_maibaam-dep-punct.html) – [reparandum](bar_maibaam-dep-reparandum.html) – [root](bar_maibaam-dep-root.html) – [vocative](bar_maibaam-dep-vocative.html) – [xcomp](bar_maibaam-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1070 sentences, 14678 tokens and 15036 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2470 tokens (17%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 160 types of words that contain both letters and punctuation. Examples: d', 's, s', z', 'n, B., z., 'e, 'm, J-Pop, 'a, C., bzw., d’, Jazz-Rap, das'sd, dt., d‘, s’, ’s, 'd, III., Jh., Tierstückl'n, g'head, g'schrieb'n, g'spült, host', n', za., "ö"-Thema, 'ma, 'mar, 'me, 'r, 'ra, 'schau, .NET, Anime-Fans, Anime-Synchronschbrecha, Annaberg-Lungötz, Arabica-Kafää, B'suach, Bar-, D'rbei, D'råfter, De-Wikipedia, Fabl-Viech, Fasanerie-, G'miat</li>
</ul>

<ul>
<li>This corpus contains 358 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 76 types of multi-word tokens. Examples: im, vom, zum, am, beim, in, ins, zan, zua, aufn, an, fian, zun, auf'm, aum, firn, midn, vam, van, auf'n, aufm, ausm, ausn, durchs, firs, fum, ind, min, mit'n, mitn, vaum, von, üwan, Baim, Bein, Nochm, Unt'ra, Wengam, afd, afs, ans, asn, auf's, aus'm, aus'n, bån, duachn, fürn, gengan, gengas.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 19 word types tagged as particles (PART): a, ned, neda, nem, net, neta, nia, niat, nicht, nid, nit, z, z', za, ze, zi, zou, zu, zua</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as pronouns (PRON): _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as determiners (DET): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: _</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>








<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>










<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: _.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: _.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (246)</li>
      <li>VERB--PRON (536)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (456)</li>
      <li>VERB--NOUN-ADP(_) (2)</li>
      <li>VERB--PRON (149)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 17 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: _ se, _ si, _ mi, _ ma, _ di, _ eich, _ uns, _ da, _ mir, _ sich, _ 'ma, _ eam, _ eana, _ eng, _ me, _ sie, _ z</li>
</ul>



<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>det:poss</a>, <a>expl:pv</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>iobj</a>, <a>clf</a>, <a>list</a></li>
</ul>
