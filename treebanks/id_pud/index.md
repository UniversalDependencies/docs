---
layout: base
title:  'UD_Indonesian-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Indonesian PUD

Language: [Indonesian](/id/index.html) (code: `id`)<br/>
Family: Austronesian, Malayo-Sumbawan

This treebank has been part of Universal Dependencies since the UD v2.2 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Ruli Manurung, Muh Shohibussirri, Martin Popel, Daniel Zeman, Ika Alfina, Arawinda Dinakaramani, Muhammad Yudistira Hanifmuti, Jessica Naraiswari Arwidarasti, Yogi Lesmana Sulestio.

Repository: [UD_Indonesian-PUD](https://github.com/UniversalDependencies/UD_Indonesian-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udid_pud27)<br />
Download all treebanks: [UD 2.7](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Indonesian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Indonesian-PUD/issues).
If you want to collaborate, please contact [ika&nbsp;•&nbsp;alfina&nbsp;(æt)&nbsp;cs&nbsp;•&nbsp;ui&nbsp;•&nbsp;ac&nbsp;•&nbsp;id].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

This is a part of the Parallel Universal Dependencies (PUD) treebanks created
for the [CoNLL 2017 shared task on Multilingual Parsing from Raw Text to
Universal Dependencies](http://universaldependencies.org/conll17/).




There are 1000 sentences in each language, always in the same order. (The sentence
alignment is 1-1 but occasionally a sentence-level segment actually consists
of two real sentences.) The sentences are taken from the news domain (sentence
id starts in ‘n’) and from Wikipedia (sentence id starts with ‘w’). There are
usually only a few sentences from each document, selected randomly, not
necessarily adjacent. The digits on the second and third position in the
sentence ids encode the original language of the sentence. The first 750
sentences are originally English (01). The remaining 250 sentences are
originally German (02), French (03), Italian (04) or Spanish (05) and they
were translated to other languages via English. Translation into German,
French, Italian, Spanish, Arabic, Hindi, Chinese, Indonesian, Japanese,
Korean, Portuguese, Russian, Thai and Turkish has been provided by DFKI and
performed (except for German) by professional translators. Then the data has
been annotated morphologically and syntactically by Google according to Google
universal annotation guidelines; finally, it has been converted by members of
the UD community to UD v2 guidelines.

Additional languages have been provided (both translation and native UD v2
annotation) by other teams: Czech by Charles University, Finnish by University
of Turku and Swedish by Uppsala University.

The entire treebank is labeled as test set (and was used for testing in the
shared task). If it is used for training in future research, the users should
employ ten-fold cross-validation.

## Acknowledgments

## From Google:
We are greatful to the many people who made this dataset possible:
Fernando Pereira, Hans Uszkoreit, Aljoscha Burchardt, Vivien Macketanz,
Ali Elkahky, Abhijit Barde, Tolga Kayadelen, ...

## From UI:
We thank the contributors of the revision project of the Indonesian PUD:
* Designers of the Indonesian annotation guidelines: Ika Alfina, Daniel Zeman, Arawinda Dinakaramani
* Annotators: Ika Alfina, Arawinda Dinakaramani, Muhammad Yudistira Hanifmuti, Jessica Naraiswari Arwidarasti, Yogi Lesmana Sulestio

## References
* Ika Alfina, Daniel Zeman, Arawinda Dinakaramani, Indra Budi, and Heru Suhartanto. "**Selecting the UD v2 Morphological Features for Indonesian Dependency Treebank**". In Proceedings of the 2020 International Conference of Asian Language Processing (IALP) in Kuala Lumpur, Malaysia, 4-6 Desember 2020. (_accepted_)
* Ika Alfina, Arawinda Dinakaramani, Mohamad Ivan Fanany, and Heru Suhartanto. ["**A Gold Standard Dependency Treebank for Indonesian**"](https://waseda.repo.nii.ac.jp/?action=repository_action_common_download&item_id=48059&item_no=1&attribute_id=101&file_no=1). In Proceedings of 33rd Pacific Asia Conference on Language, Information and Computation (PACLIC) 2019 in Hakodate, Japan, 13-15 September 2019.
* Ryan McDonald, Joakim Nivre, Yvonne Quirmbach-Brundage, Yoav Goldberg, Dipanjan Das, Kuzman Ganchev, Keith Hall, Slav Petrov, Hao Zhang, Oscar Tackstrom, Claudia Bedini, Nuria Bertomeu Castello and Jungmee Lee. "**Universal Dependency Annotation for Multilingual Parsing**". In Proceedings of ACL 2013.



# Statistics of UD Indonesian PUD

## POS Tags

[ADJ](id_pud-pos-ADJ.html) – [ADP](id_pud-pos-ADP.html) – [ADV](id_pud-pos-ADV.html) – [AUX](id_pud-pos-AUX.html) – [CCONJ](id_pud-pos-CCONJ.html) – [DET](id_pud-pos-DET.html) – [INTJ](id_pud-pos-INTJ.html) – [NOUN](id_pud-pos-NOUN.html) – [NUM](id_pud-pos-NUM.html) – [PART](id_pud-pos-PART.html) – [PRON](id_pud-pos-PRON.html) – [PROPN](id_pud-pos-PROPN.html) – [PUNCT](id_pud-pos-PUNCT.html) – [SCONJ](id_pud-pos-SCONJ.html) – [SYM](id_pud-pos-SYM.html) – [VERB](id_pud-pos-VERB.html) – [X](id_pud-pos-X.html)

## Features

[Abbr](id_pud-feat-Abbr.html) – [Clusivity](id_pud-feat-Clusivity.html) – [Degree](id_pud-feat-Degree.html) – [Foreign](id_pud-feat-Foreign.html) – [Mood](id_pud-feat-Mood.html) – [Number](id_pud-feat-Number.html) – [NumType](id_pud-feat-NumType.html) – [Person](id_pud-feat-Person.html) – [Polarity](id_pud-feat-Polarity.html) – [Poss](id_pud-feat-Poss.html) – [PronType](id_pud-feat-PronType.html) – [Reflex](id_pud-feat-Reflex.html) – [Typo](id_pud-feat-Typo.html) – [Voice](id_pud-feat-Voice.html)

## Relations

[acl](id_pud-dep-acl.html) – [acl:relcl](id_pud-dep-acl-relcl.html) – [advcl](id_pud-dep-advcl.html) – [advmod](id_pud-dep-advmod.html) – [advmod:emph](id_pud-dep-advmod-emph.html) – [amod](id_pud-dep-amod.html) – [appos](id_pud-dep-appos.html) – [aux](id_pud-dep-aux.html) – [case](id_pud-dep-case.html) – [case:adv](id_pud-dep-case-adv.html) – [cc](id_pud-dep-cc.html) – [cc:preconj](id_pud-dep-cc-preconj.html) – [ccomp](id_pud-dep-ccomp.html) – [compound](id_pud-dep-compound.html) – [compound:a](id_pud-dep-compound-a.html) – [conj](id_pud-dep-conj.html) – [cop](id_pud-dep-cop.html) – [csubj](id_pud-dep-csubj.html) – [csubj:pass](id_pud-dep-csubj-pass.html) – [det](id_pud-dep-det.html) – [discourse](id_pud-dep-discourse.html) – [dislocated](id_pud-dep-dislocated.html) – [fixed](id_pud-dep-fixed.html) – [flat](id_pud-dep-flat.html) – [flat:foreign](id_pud-dep-flat-foreign.html) – [flat:name](id_pud-dep-flat-name.html) – [goeswith](id_pud-dep-goeswith.html) – [iobj](id_pud-dep-iobj.html) – [mark](id_pud-dep-mark.html) – [nmod](id_pud-dep-nmod.html) – [nmod:lmod](id_pud-dep-nmod-lmod.html) – [nmod:poss](id_pud-dep-nmod-poss.html) – [nmod:tmod](id_pud-dep-nmod-tmod.html) – [nsubj](id_pud-dep-nsubj.html) – [nsubj:pass](id_pud-dep-nsubj-pass.html) – [nummod](id_pud-dep-nummod.html) – [obj](id_pud-dep-obj.html) – [obl](id_pud-dep-obl.html) – [obl:agent](id_pud-dep-obl-agent.html) – [obl:tmod](id_pud-dep-obl-tmod.html) – [orphan](id_pud-dep-orphan.html) – [parataxis](id_pud-dep-parataxis.html) – [punct](id_pud-dep-punct.html) – [root](id_pud-dep-root.html) – [vocative](id_pud-dep-vocative.html) – [xcomp](id_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences, 19030 tokens and 19440 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2402 tokens (13%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 176 types of words that contain both letters and punctuation. Examples: rata-rata, laki-laki, orang-orang, baru-baru, negara-negara, undang-undang, anak-anak, bertahun-tahun, masing-masing, A.S., batas-batas, 1970-an, Nn., No., St., Tn., bagian-bagian, batu-batu, benar-benar, bersama-sama, bulan-bulan, kira-kira, kota-kota, paru-paru, puing-puing, pulau-pulau, satu-satu, 1960-an, 1980-an, 1990-an, 60-an, B.C., Joliot-Curie, Ms., asal-muasal, bangsa-bangsa, benda-benda, berhati-hati, besar-besaran, gereja-gereja, hal-hal, hati-hati, ide-ide, jelas-jelas, ke-16, ke-3, ke-5, lagi-lagi, n't, partikel-partikel</li>
</ul>

<ul>
<li>This corpus contains 410 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 292 types of multi-word tokens. Examples: apakah, lainnya, dirinya, kalinya, istrinya, katanya, meskipun, semuanya, hidupnya, itulah, kepadanya, menyebutnya, terakhirnya, terjadinya, ujarnya, dalamnya, dengannya, jabatannya, kariernya, keduanya, kemampuannya, membuatnya, satu-satunya, sebabnya, adanya, akhirnya, artinya, ayahnya, banyaknya, bawahnya, berkembangnya, demikianlah, depannya, filmnya, harganya, hasilnya, inilah, kaitannya, kematiannya, kesehatannya, kurangnya, laki-lakinya, membawanya, menontonnya, negaranya, neneknya, pasukannya, pemerintahannya, putrinya, sejarahnya.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 7 word types tagged as particles (PART): belum, bukan, kah, lah, pun, tak, tidak</li>
</ul>

<ul>
<li>This corpus contains 27 lemmas tagged as pronouns (PRON): _, aku, anda, apa, begitu, demikian, dia, diri, ia, ini, itu, kalian, kami, kamu, kita, ku, mana, mereka, nya, orang, sana, saya, semua, siapa, sini, suatu, yang</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as determiners (DET): bagai, bagi, banyak, berapa, buah, ini, itu, jenis, masing-masing, nya, orang, para, pasang, rangkai, sang, sebut, segala, seluruh, semua, sendiri, si, suatu, tiap</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as PRON and sometimes as DET: ini, itu, nya, orang, semua, suatu</li>
</ul>

<ul>
<li>This corpus contains 11 lemmas tagged as auxiliaries (AUX): adalah, akan, bisa, boleh, dapat, harus, mampu, mungkin, sedang, sudah, telah</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as AUX and sometimes as VERB: boleh, dapat, mungkin</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>




<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: para, banyak, beberapa, berbagai, serangkaian, sepasang</li>
      <li>NOUN: orang-orang, negara-negara, anak-anak, batas-batas, bagian-bagian, batu-batu, bertahun-tahun, bulan-bulan, kota-kota, puing-puing</li>
      <li>PRON: mereka, kami, kita, kalian</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: sebuah, seorang, suatu</li>
      <li>NOUN: tahun, orang, bulan, bagian, hari, negara, kota, laut, perang, hal</li>
      <li>PRON: nya, ia, saya, dia, Anda, Aku, ku, diri, kamu</li>
      <li>PROPN: Marxisme</li>
    </ul>
  </li>
</ul>




<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: terakhir, terbaik, terbesar, tertinggi, terutama, teratas, terburuk, terawal, terbanyak, terbaru</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: tidak, tak, belum, bukan</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>VERB: menjadi, ada, memiliki, membuat, mulai, mengatakan, merupakan, ujar, digunakan, mendapatkan</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB: menjadi, ada, memiliki, membuat, mulai, mengatakan, merupakan, ujar, mendapatkan, bekerja</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: digunakan, terjadi, termasuk, terletak, diberi, didirikan, diikuti, dikenal, diperlukan, terbuka</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: ini, itu, tersebut, sang, si</li>
      <li>PRON: itu, ini, sana, begitu, demikian, sini</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: sendiri</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: kadang, kadang-kadang</li>
      <li>DET: sebuah, para, banyak, beberapa, seorang, berbagai, sebagian, suatu, kebanyakan, sejenis</li>
      <li>PRON: seseorang, sesuatu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: bagaimana</li>
      <li>PRON: apa, siapa, mana</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: nya, ia, mereka, saya, kami, dia, kita, Anda, diri, Aku</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: saat, ketika, mengapa, bagaimana, berapa, kapan, seberapa</li>
      <li>PRON: yang, apa, mana, siapa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: selalu</li>
      <li>DET: semua, seluruh, setiap, masing-masing, segala</li>
      <li>PRON: semua</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: satu, dua, kedua, tiga, juta, empat, 1, 10, 3, puluh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: pertama, kedua, ketiga, I, III, II, IV, ke-16, ke-3, ke-5</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: nya, mereka, kita, Anda, saya, kami, ku</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: diri</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: saya, kami, kita, Aku, ku</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: Anda, kalian, kamu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: nya, ia, mereka, dia</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: SM, AIDS, ATM, BC, C, DFB, GIF, HFC, M, MLA</li>
          <li>PROPN: AS, A.S., BBC, CNN, Nn., Tn., B.C., DNA, GCA, GOP</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Clusivity</a>
    <ul>
      <li>Ex
        <ul>
          <li>PRON: kami</li>
        </ul>
      </li>
      <li>In
        <ul>
          <li>PRON: kita</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: estate, landmark, real, Energies, International, Investors, MultiStrategy, Organization, Renewable, Return</li>
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
          <li>NOUN: mercu, suar, Kontituensi, konsulate</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: adalah.</li>
</ul>

<ul>
<li>This corpus uses 10 lemmas as auxiliaries (<a>aux</a>). Examples: telah, akan, bisa, sudah, dapat, harus, mungkin, sedang, boleh, mampu.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (478)</li>
      <li>VERB--PRON (460)</li>
      <li>VERB--PRON-ADP(dari) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (687)</li>
      <li>VERB--NOUN-ADP(hingga) (1)</li>
      <li>VERB--PRON (70)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (4)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 7 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: nyata diri, bentuk diri, dapat diri, kukuh diri, lindung diri, puas diri, tenggelam diri</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 14 relation subtypes: <a>acl:relcl</a>, <a>advmod:emph</a>, <a>case:adv</a>, <a>cc:preconj</a>, <a>compound:a</a>, <a>csubj:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nmod:lmod</a>, <a>nmod:poss</a>, <a>nmod:tmod</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:tmod</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>expl</a>, <a>clf</a>, <a>list</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
