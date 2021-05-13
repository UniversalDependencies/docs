---
layout: base
title:  'UD_Indonesian-CSUI'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Indonesian CSUI

Language: [Indonesian](/id/index.html) (code: `id`)<br/>
Family: Austronesian, Malayo-Sumbawan

This treebank has been part of Universal Dependencies since the UD v2.7 release.

The following people have contributed to making this treebank part of UD: Ika Alfina, Jessica Naraiswari Arwidarasti, Muhammad Yudistira Hanifmuti, Arawinda Dinakaramani, Ruli Manurung, Fam Rashel, Andry Luthfi.

Repository: [UD_Indonesian-CSUI](https://github.com/UniversalDependencies/UD_Indonesian-CSUI)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udid_csui28)<br />
Download all treebanks: [UD 2.8](/#download)

License: CC BY-SA 4.0

Genre: nonfiction, news

Questions, comments?
General annotation questions (either Indonesian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Indonesian-CSUI/issues).
If you want to collaborate, please contact [ika&nbsp;•&nbsp;alfina&nbsp;(æt)&nbsp;cs&nbsp;•&nbsp;ui&nbsp;•&nbsp;ac&nbsp;•&nbsp;id].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, not checked manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually in non-UD style, automatically converted to UD |
| Features | assigned by a program, with some manual corrections, but not a full manual verification |
| Relations | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |

## Description

UD Indonesian-CSUI is a conversion from an Indonesian constituency treebank in the Penn Treebank format named [**Kethu**](https://github.com/ialfina/kethu) that was also a conversion from a constituency treebank built by [**Dinakaramani et al. (2015)**](https://github.com/famrashel/idn-treebank). We named this treebank **Indonesian-CSUI**, since all the three versions of the treebanks were built at Faculty of Computer Science, Universitas Indonesia.




UD Indonesian-CSUI treebank was converted automatically from the [**Kethu**](https://github.com/ialfina/kethu) treebank, an Indonesian constituency treebank in the Penn Treebank format. The Kethu treebank itself was converted from a consituency treebank built by [**Dinakaramani et al. (2015)**](https://github.com/famrashel/idn-treebank).

Other characteristics of the treebank:
* Genre: news in formal Indonesian (the majority is economic news)
* This treebank consists of 1030 sentences and 28K words. We divide CSUI treebank into testing and training dataset:
* Testing dataset consists of around 10K words
* Training dataset consists of around 18K words
* Average sentence length is around 27.4 words per-sentence, which is very high compare to the [Indonesian-PUD](https://github.com/UniversalDependencies/UD_Indonesian-PUD) treebank that has average sentence length of 19.4.


## Acknowledgments

* The original constituency treebank was built with manual annotation by [Arawinda Dinakaramani, Fam Rashel, Andry Luthfi, and Ruli Manurung](https://github.com/famrashel/idn-treebank) at Faculty of Computer Science, Universitas Indonesia in 2015.
* The previous treebank was converted to the Penn Treebank format by Ika Alfina and Jessica Naraiswari Arwidarasti at Faculty of Computer Science, Universitas Indonesia in 2019-2020. This PTB version was named [**Kethu**](https://github.com/ialfina/kethu).
* The Kethu treebank was converted to a UD treebank by Ika Alfina et al. in 2020.
* The lemma (LEMMA) and morphological features (FEATS) were generated using [Aksara](https://github.com/bahasa-csui/aksara).

## References
* Ika Alfina, Indra Budi, and Heru Suhartanto. ["**Tree Rotations for Dependency Trees: Converting the Head-Directionality of Noun Phrases**"](http://www.thescipub.com/abstract/jcssp.2020.1585.1597). In Journal of Computer Science, 2020, Vol 16 No 11.
* M. Yudistira Hanifmuti and Ika Alfina. [**"Aksara: An Indonesian Morphological Analyzer that Conforms to the UD v2 Annotation Guidelines"**](https://ieeexplore.ieee.org/document/9310490). In Proceeding of the 2020 International Conference of Asian Language Processing (IALP) in Kuala Lumpur, Malaysia, 4-6 Desember 2020.


# Statistics of UD Indonesian CSUI

## POS Tags

[ADJ](id_csui-pos-ADJ.html) – [ADP](id_csui-pos-ADP.html) – [ADV](id_csui-pos-ADV.html) – [AUX](id_csui-pos-AUX.html) – [CCONJ](id_csui-pos-CCONJ.html) – [DET](id_csui-pos-DET.html) – [INTJ](id_csui-pos-INTJ.html) – [NOUN](id_csui-pos-NOUN.html) – [NUM](id_csui-pos-NUM.html) – [PART](id_csui-pos-PART.html) – [PRON](id_csui-pos-PRON.html) – [PROPN](id_csui-pos-PROPN.html) – [PUNCT](id_csui-pos-PUNCT.html) – [SCONJ](id_csui-pos-SCONJ.html) – [SYM](id_csui-pos-SYM.html) – [VERB](id_csui-pos-VERB.html) – [X](id_csui-pos-X.html)

## Features

[Clusivity](id_csui-feat-Clusivity.html) – [Degree](id_csui-feat-Degree.html) – [Foreign](id_csui-feat-Foreign.html) – [Number](id_csui-feat-Number.html) – [Person](id_csui-feat-Person.html) – [Polarity](id_csui-feat-Polarity.html) – [Poss](id_csui-feat-Poss.html) – [PronType](id_csui-feat-PronType.html) – [Reflex](id_csui-feat-Reflex.html) – [Voice](id_csui-feat-Voice.html)

## Relations

[acl](id_csui-dep-acl.html) – [acl:relcl](id_csui-dep-acl-relcl.html) – [advcl](id_csui-dep-advcl.html) – [advmod](id_csui-dep-advmod.html) – [advmod:emph](id_csui-dep-advmod-emph.html) – [amod](id_csui-dep-amod.html) – [appos](id_csui-dep-appos.html) – [aux](id_csui-dep-aux.html) – [case](id_csui-dep-case.html) – [case:adv](id_csui-dep-case-adv.html) – [cc](id_csui-dep-cc.html) – [cc:preconj](id_csui-dep-cc-preconj.html) – [ccomp](id_csui-dep-ccomp.html) – [clf](id_csui-dep-clf.html) – [compound:a](id_csui-dep-compound-a.html) – [conj](id_csui-dep-conj.html) – [cop](id_csui-dep-cop.html) – [csubj](id_csui-dep-csubj.html) – [csubj:pass](id_csui-dep-csubj-pass.html) – [det](id_csui-dep-det.html) – [discourse](id_csui-dep-discourse.html) – [dislocated](id_csui-dep-dislocated.html) – [fixed](id_csui-dep-fixed.html) – [flat](id_csui-dep-flat.html) – [flat:foreign](id_csui-dep-flat-foreign.html) – [flat:name](id_csui-dep-flat-name.html) – [iobj](id_csui-dep-iobj.html) – [mark](id_csui-dep-mark.html) – [nmod](id_csui-dep-nmod.html) – [nmod:lmod](id_csui-dep-nmod-lmod.html) – [nmod:poss](id_csui-dep-nmod-poss.html) – [nmod:tmod](id_csui-dep-nmod-tmod.html) – [nsubj](id_csui-dep-nsubj.html) – [nsubj:pass](id_csui-dep-nsubj-pass.html) – [nummod](id_csui-dep-nummod.html) – [obj](id_csui-dep-obj.html) – [obl](id_csui-dep-obl.html) – [obl:agent](id_csui-dep-obl-agent.html) – [obl:tmod](id_csui-dep-obl-tmod.html) – [orphan](id_csui-dep-orphan.html) – [parataxis](id_csui-dep-parataxis.html) – [punct](id_csui-dep-punct.html) – [root](id_csui-dep-root.html) – [xcomp](id_csui-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1030 sentences, 27771 tokens and 28263 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 3922 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 148 types of words that contain both letters and punctuation. Examples: rata-rata, APBN-P, masing-masing, Ltd., non-migas, 's, non-keuangan, AA-idn, II/2007, Ka'ban, Pte., langkah-langkah, negara-negara, No., RAPBN-P, bank-bank, baru-baru, idA-, syarat-syarat, C/D, Co., I/2007, II/2003, LLC., S., S/A, Tbk., anak-anak, benar-benar, berbeda-beda, berturut-turut, minus/idn, monyet-monyet, nama-nama, non-residence, obligasi-obligasi, peringkat-peringkat, perusahaan-perusahaan, prinsip-prinsip, rasio-rasio, semata-mata, sumber-sumber, terus-menerus, 03-Oct, 05-May, 10-Jan, 17-Mar, 23-Aug, 26-Sep, 34/PMK.011/2007</li>
</ul>

<ul>
<li>This corpus contains 492 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 200 types of multi-word tokens. Examples: katanya, adanya, menurutnya, ujarnya, laporannya, pihaknya, lainnya, tambahnya, membaiknya, apakah, pernyataannya, sahamnya, jelasnya, masuknya, sisanya, tingginya, bersihnya, walaupun, Keuangannya, besarnya, meningkatnya, meskipun, naiknya, rencananya, ucapnya, Dikatakannya, antaranya, bunganya, jumlahnya, kalinya, nilainya, penjelasannya, persnya, turunnya, usahanya, Dijelaskannya, Disebutkannya, Ditambahkannya, Misalnya, akhirnya, artinya, aslinya, baiknya, banyaknya, bukanlah, halnya, informasinya, inilah, instrumennya, investasinya.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 8 word types tagged as particles (PART): belum, bukan, jangan, kah, lah, pun, tak, tidak</li>
</ul>

<ul>
<li>This corpus contains 19 lemmas tagged as pronouns (PRON): anda, apa, begitu, demikian, dia, diri, ia, ini, itu, kami, kita, mana, masing-masing, mereka, nya, saya, sesuatu, siapa, yang</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as determiners (DET): Seorang, banyak, beberapa, begitu, berbagai, buah, ini, itu, masing-masing, nya, orang, para, sana, sebagian, sebut, sedikit, segala, seluruh, semua, sendiri, setiap, si, suatu</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as PRON and sometimes as DET: begitu, ini, itu, masing-masing, nya</li>
</ul>

<ul>
<li>This corpus contains 14 lemmas tagged as auxiliaries (AUX): adalah, akan, bakal, bisa, boleh, dapat, harus, ialah, mungkin, perlu, sedang, sudah, telah, tengah</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as AUX and sometimes as VERB: dapat, perlu</li>
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
      <li>NOUN: langkah-langkah, negara-negara, bank-bank, syarat-syarat, anak-anak, monyet-monyet, nama-nama, obligasi-obligasi, peringkat-peringkat, perusahaan-perusahaan</li>
      <li>PRON: kita, mereka, kami</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: sebuah, seorang</li>
      <li>NOUN: persen, Rp, tahun, dolar, sebesar, saham, perusahaan, pemerintah, negara, pertumbuhan</li>
      <li>PRON: nya, dia, ia, saya, mana, sesuatu, anda</li>
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
      <li>ADJ: terakhir, terbesar, tertinggi, terbaik, tertentu, terkaya, terdekat, terbanyak, terendah, terutama</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: tidak, belum, bukan, tak, jangan</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>





<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB: kata, menjadi, mencapai, mengatakan, ada, meningkat, naik, lalu, merupakan, turun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: dibandingkan, dibanding, terjadi, dilakukan, diperkirakan, termasuk, terdiri, diharapkan, didorong, diterbitkan</li>
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
      <li>DET: ini, itu, sana</li>
      <li>NOUN: Demikian</li>
      <li>PRON: itu, ini, demikian</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: sebuah, seorang</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: nya, dia, ia, kita, mereka, saya, kami, diri, anda</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: yang</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: segala</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: nya</li>
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
      <li>PRON: kita, saya, kami</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: anda</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: nya, dia, ia, mereka</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


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
          <li>X: rate, year, rating, mortgage, subprime, on, listed, net, netto, outlook</li>
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
<li>This corpus uses 12 lemmas as auxiliaries (<a>aux</a>). Examples: akan, telah, bisa, dapat, sudah, harus, perlu, sedang, mungkin, tengah, bakal, boleh.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (706)</li>
      <li>VERB--PRON (300)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (960)</li>
      <li>VERB--PRON (28)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 5 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: beri diri, daftar diri, tahu diri, tarik diri, tempat diri</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 14 relation subtypes: <a>acl:relcl</a>, <a>advmod:emph</a>, <a>case:adv</a>, <a>cc:preconj</a>, <a>compound:a</a>, <a>csubj:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nmod:lmod</a>, <a>nmod:poss</a>, <a>nmod:tmod</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:tmod</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>compound</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>vocative</a>, <a>expl</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
