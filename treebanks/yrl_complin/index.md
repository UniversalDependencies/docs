---
layout: base
title:  'UD_Nheengatu-CompLin'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Nheengatu CompLin

Language: [Nheengatu](/yrl/index.html) (code: `yrl`)<br/>
Family: Tupian

This treebank has been part of Universal Dependencies since the UD v2.11 release.

The following people have contributed to making this treebank part of UD: Leonel Figueiredo de Alencar.

Repository: [UD_Nheengatu-CompLin](https://github.com/UniversalDependencies/UD_Nheengatu-CompLin)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udyrl_complin215)<br />
Download all treebanks: [UD 2.15](/#download)

License: CC BY-NC-SA 4.0

Genre: spoken, bible, fiction, nonfiction, grammar-examples

Questions, comments?
General annotation questions (either Nheengatu-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Nheengatu-CompLin/issues).
If you want to collaborate, please contact [leonel&nbsp;•&nbsp;de&nbsp;•&nbsp;alencar&nbsp;(æt)&nbsp;ufc&nbsp;•&nbsp;br].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | annotated manually |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

The [UD_Nheengatu-CompLin](https://aclanthology.org/2024.propor-2.8) is a treebank of [Nheengatu](https://glottolog.org/resource/languoid/id/nhen1239) or Nhengatu (ISO-639: `yrl`), also known, inter alia, as Modern Tupi and *Língua Geral Amazônica*. It comprises sentences from diverse published sources, e.g., spontaneous speech, grammatical descriptions, fables, myths, coursebooks, and dictionaries.




To our knowledge, this is the first treebank of Nheengatu. It is a work in progress. The initial release only contained a couple hundred sentences. This new release encompasses more than nine times that number. We plan to continually expand the resource in the next months.

The treebank comprises sentences from diverse published sources freely available on the Internet, e.g., grammatical descriptions, fables, coursebooks, and dictionaries. The sentences were either extracted from PDF text files, transcribed from non-searchable (image-only) PDF files, or manually converted to orthography from phonetic transcriptions. Throughout the treebank, we use the spelling system proposed by Avila (2021). The annotation was performed semi-automatically, i.e., we first applied the Yauti morphosyntactic analyzer (de Alencar 2023) to each sentence and then manually revised the output.

The development of this treebank and related tools and resources is part of the research activities of the Research Group on Computation and Natural Language (*Computação e Linguagem Natural* — CompLin) at the Humanities Center of the Federal University of Ceará in Brazil. The main contributor to this effort is Leonel Figueiredo de Alencar, coordinator of the CompLin group. Additional annotators include Dominick Maia Alexandre, Hélio Leonam Barroso Silva, and Juliana Lopes Gurgel, scholarship holder with the [DACILAT](https://bv.fapesp.br/57063) project, funded by the São Paulo State Research Support Foundation (*Fundação de Amparo à Pesquisa do Estado de São Paulo* — FAPESP) under Process No. 22/09158-5.

The following repository contains the most update development version of the treebank as well as related tools and resources:

https://github.com/CompLin/nheengatu

So far, the treebank includes examples from Seixas (1853), Magalhães (1876), Sympson (1877), Rogrigues (1890), Aguiar (1898), Costa (1909), Studart (1926), Amorim (1928), Hartt (1938), Moore, Facundes, and Pires (1994), Casasnovas (2006), Cruz (2011), Comunidade de Terra Preta (2013), Stradelli (1929/2014), Navarro (2016), Muller et al. (2019), Alencar (2021), Avila (2021), and Melgueiro (2022) as well as from the New Testament (*Novo Testamento na língua Nyengatu*, 1973/2019).

## Acknowledgments

We thank Eduardo de Almeida Navarro (University of São Paulo) for kindly allowing us to use examples and texts from his coursebook (Navarro 2016), whose glossary was the first basis for the morphological analyzer we implemented to annotate the UD_Nheengatu-CompLin treebank.

We owe much to Avila (2021)'s dictionary, from which numerous treebank sentences stem. This dictionary also provided invaluable lexical, grammatical, and semantic information for the further development of the morphological analyzer and related treebank annotation tools. We are much obliged to its author, Marcel Twardowsky Avila, for making the XML version of the dictionary available to us and clarifying many questions about the dictionary entries.

We gratefully acknowledge the scholarships provided to annotators by both the São Paulo State Research Support Foundation (FAPESP) through the [DACILAT](https://bv.fapesp.br/57063) project under Process No. 22/09158-5 and the Foundation for the Support and Development of Research in the State of Ceará (FUNCAP).

We are indebted to Gabriela Lourenço Fernandes and Susan Gabriela Huallpa Huanacuni, internees of the [Biblioteca Brasiliana Guita e José Mindlin](https://www.bbm.usp.br/pt-br/) of the University of São Paulo (USP), as well as to its research specialist and curator João Marcos Cardoso, for transcriptions of stories from Amorim (1928) and Rodrigues (1890).

Thanks are also due to the Federal University of Amazonas Press (*Editora da Universidade Federal do Amazonas* — UFAM), particularly to its director, Sérgio Freire, for granting permission to incorporate texts from Casasnovas (2006) into the treebank.

## License

Copyright of the treebank sentences and their translations belongs to their respective authors. This data is made available here solely to promote research, teaching, and learning of the Nheengatu language. Therefore, it shouldn't be used for any commercial purposes. For more information, see LICENSE.txt.

## References

* Aguiar, Costa. (1898). *Doutrina christã destinada aos naturaes do amazonas em nhihingatu' com traducção portugueza em face*. Pap. e Tip. Pacheco, Silva & C.
* Avila, Marcel Twardowsky.(2021). *Proposta de dicionário nheengatu-português* [Doctoral dissertation, University of São Paulo]. doi:10.11606/T.8.2021.tde-10012022-201925
* Casasnovas, Afonso. (2016). *Noções de língua geral ou nheengatú: Gramática, lendas e vocabulário* (2nd ed.). Editora da Universidade Federal do Amazonas; Faculdade Salesiana Dom Bosco.
* Comunidade de Terra Preta. (2013). *Fábulas de Terra Preta: Uma coletânea bilingüe*.
* Costa, D. Frederico. (1909). *Carta pastoral de D. Frederico Costa bispo do Amazonas a seus amados diocesanos*. Typ. Minerva.
* Cruz, Aline da. (2011). *Fonologia e gramática do nheengatú: A língua falada pelos povos Baré, Warekena e Baniwa*. Netherlands National Graduate School of Linguistics.
* de Alencar, Leonel Figueiredo. (2021). Uma gramática computacional de um fragmento do nheengatu / A computational grammar for a fragment of Nheengatu. _Revista de Estudos da Linguagem, 29_(3), 1717-1777. doi:http://dx.doi.org/10.17851/2237-2083.29.3.1717-1777
* de Amorim, Antonio Brandão. (1928). Lendas em nheêngatú e em portuguez. *Revista do Instituto Historico e Geographico Brasileiro, 154*(100), 9-475.
* de Magalhães, J. V. C. (1876). *O selvagem*. Typographia da Reforma.
* Maslova, Irina. (2018). *Tradução Comentada de Mitos e Lendas Amazônicas do Nheengatu para o Russo*. [Master's thesis, University of São Paulo]. doi:10.11606/D.8.2019.tde-22022019-175350
* Melgueiro, Edilson Martins. (2022). *O Nheengatu de Stradelli aos dias atuais: uma contribuição aos estudos lexicais de línguas Tupí-Guaraní em perspectiva diacrônica*. [Doctoral dissertation, University of Brasília]. http://repositorio2.unb.br/jspui/handle/10482/44655
* Moore, Denny, Facundes, Sidney, & Pires, Nádia. (1994). *Nheengatu (Língua Geral Amazônica), its History, and the Effects of Language Contact*. UC Berkeley: Department of Linguistics. Retrieved from https://escholarship.org/uc/item/7tb981s1
* Muller, Jean-Claude, Dietrich, Wolf, Monserrat, Ruth, Barros, Cândida, Arenz, Karl-Heinz, & Prudente, Gabriel. (Eds.). (2019). *Dicionário De Língua Geral Amazônica*. Universitätsverlag Potsdam; Museu Paraense Emilio Goeldi.
* Navarro, Eduardo de Almeida. (2016). *Curso de Língua Geral (nheengatu ou tupi moderno): A língua das origens da civilização amazônica* (2nd ed.). Centro Angel Rama da Faculdade de Filosofia, Letras e Ciências Humanas da Universidade de São Paulo.
* *Novo Testamento na língua Nyengatu* (2nd ed.). (2019). Missão Novas Tribos do Brasil. (Original work published 1973)
* Rodrigues, João Barbosa. (1890). *Poranduba amazonense ou kochiyma-uara porandub, 1872-1887.* Typ. de G. Leuzinger & Filhos.
* Seixas, Manoel Justiniano de. (1853). *Vocabulario da lingua indigena geral para o uso do Seminario Episcopal do Pará*. Typ. de Mattos e Compª.
* Stradelli, Ermanno. (2014). *Vocabulário português-nheengatu, nheengatu-português*. Ateliê Editorial.(Original work published 1929)
Here is the BibTeX entry formatted according to APA style:
* Studart, Jorge. (1926). Ligeiras noções de língua geral. *Revista do Instituto do Ceará, 40*, 26–38.
* Sympson, Pedro Luiz. *Grammatica da lingua brazilica geral, fallada pelos aborigines das provincias do Pará e Amazonas*. Typographia do Commercio do Amazonas, 1877.


# Statistics of UD Nheengatu CompLin

## POS Tags

[ADJ](yrl_complin-pos-ADJ.html) – [ADP](yrl_complin-pos-ADP.html) – [ADV](yrl_complin-pos-ADV.html) – [AUX](yrl_complin-pos-AUX.html) – [CCONJ](yrl_complin-pos-CCONJ.html) – [DET](yrl_complin-pos-DET.html) – [INTJ](yrl_complin-pos-INTJ.html) – [NOUN](yrl_complin-pos-NOUN.html) – [NUM](yrl_complin-pos-NUM.html) – [PART](yrl_complin-pos-PART.html) – [PRON](yrl_complin-pos-PRON.html) – [PROPN](yrl_complin-pos-PROPN.html) – [PUNCT](yrl_complin-pos-PUNCT.html) – [SCONJ](yrl_complin-pos-SCONJ.html) – [VERB](yrl_complin-pos-VERB.html) – [X](yrl_complin-pos-X.html)

## Features

[AdpType](yrl_complin-feat-AdpType.html) – [AdvType](yrl_complin-feat-AdvType.html) – [Aspect](yrl_complin-feat-Aspect.html) – [Case](yrl_complin-feat-Case.html) – [Clitic](yrl_complin-feat-Clitic.html) – [Compound](yrl_complin-feat-Compound.html) – [Definite](yrl_complin-feat-Definite.html) – [Degree](yrl_complin-feat-Degree.html) – [Deixis](yrl_complin-feat-Deixis.html) – [Derivation](yrl_complin-feat-Derivation.html) – [Evident](yrl_complin-feat-Evident.html) – [ExtPos](yrl_complin-feat-ExtPos.html) – [Foc](yrl_complin-feat-Foc.html) – [Modality](yrl_complin-feat-Modality.html) – [Mood](yrl_complin-feat-Mood.html) – [Number](yrl_complin-feat-Number.html) – [Number[grnd]](yrl_complin-feat-Number-grnd.html) – [Number[psor]](yrl_complin-feat-Number-psor.html) – [NumType](yrl_complin-feat-NumType.html) – [PartType](yrl_complin-feat-PartType.html) – [Person](yrl_complin-feat-Person.html) – [Person[grnd]](yrl_complin-feat-Person-grnd.html) – [Person[psor]](yrl_complin-feat-Person-psor.html) – [Polarity](yrl_complin-feat-Polarity.html) – [Poss](yrl_complin-feat-Poss.html) – [PronType](yrl_complin-feat-PronType.html) – [PunctType](yrl_complin-feat-PunctType.html) – [Red](yrl_complin-feat-Red.html) – [Rel](yrl_complin-feat-Rel.html) – [Style](yrl_complin-feat-Style.html) – [Tense](yrl_complin-feat-Tense.html) – [Typo](yrl_complin-feat-Typo.html) – [VerbForm](yrl_complin-feat-VerbForm.html) – [Voice](yrl_complin-feat-Voice.html)

## Relations

[acl](yrl_complin-dep-acl.html) – [acl:relcl](yrl_complin-dep-acl-relcl.html) – [advcl](yrl_complin-dep-advcl.html) – [advcl:relcl](yrl_complin-dep-advcl-relcl.html) – [advmod](yrl_complin-dep-advmod.html) – [amod](yrl_complin-dep-amod.html) – [appos](yrl_complin-dep-appos.html) – [aux](yrl_complin-dep-aux.html) – [case](yrl_complin-dep-case.html) – [cc](yrl_complin-dep-cc.html) – [ccomp](yrl_complin-dep-ccomp.html) – [conj](yrl_complin-dep-conj.html) – [cop](yrl_complin-dep-cop.html) – [csubj](yrl_complin-dep-csubj.html) – [dep](yrl_complin-dep-dep.html) – [det](yrl_complin-dep-det.html) – [discourse](yrl_complin-dep-discourse.html) – [dislocated](yrl_complin-dep-dislocated.html) – [expl](yrl_complin-dep-expl.html) – [fixed](yrl_complin-dep-fixed.html) – [flat](yrl_complin-dep-flat.html) – [goeswith](yrl_complin-dep-goeswith.html) – [iobj](yrl_complin-dep-iobj.html) – [mark](yrl_complin-dep-mark.html) – [nmod](yrl_complin-dep-nmod.html) – [nmod:poss](yrl_complin-dep-nmod-poss.html) – [nsubj](yrl_complin-dep-nsubj.html) – [nummod](yrl_complin-dep-nummod.html) – [obj](yrl_complin-dep-obj.html) – [obl](yrl_complin-dep-obl.html) – [parataxis](yrl_complin-dep-parataxis.html) – [punct](yrl_complin-dep-punct.html) – [reparandum](yrl_complin-dep-reparandum.html) – [root](yrl_complin-dep-root.html) – [vocative](yrl_complin-dep-vocative.html) – [xcomp](yrl_complin-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1832 sentences, 19037 tokens and 19278 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 5468 tokens (29%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 179 types of words that contain both letters and punctuation. Examples: waá-itá, mira-itá, kwá-itá, amú-itá, kunhã-itá, apigawa-itá, anama-itá, nhaã-itá, taína-itá, maã-itá, pirá-itá, raíra-itá, rimirikú-itá, kunhã-etá, tayera-itá, mirá-piranga, pindá-itá, rundewara-itá, wirá-itá, kariwa-itá, kunhamukú-itá, kurasí-ara, mira-etá, mirá-itá, mú-itá, pirá-mirĩ, suú-itá, taria-itá, taíra-itá, wirá-mirĩ, yawé-yawé, yepé-yepé, amú-etá, amú-tetamawara, amú-wirandé, apigawa-etá, arú-itá, ikewara-itá, iwá-itá, kurabí-itá, kurumiwasú-itá, kurumĩ-itá, kurupira-itá, kuẽma-piranga, mbira-itá, mena-itá, mimbira-itá, mukũi-itá, nheenga-itá, paya-itá</li>
</ul>

<ul>
<li>This corpus contains 241 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 134 types of multi-word tokens. Examples: pitérupi, maita, árupi, wírupi, asú-putari, resú-putari, iwí-pe, kaá-pe, paraname, asú-kwáu, gantime, ipí-pe, kupixá-pe, kupé-pe, putiá-pe, rupitá-pe, uyuká-putari, Maã-ta, Ukiririntu, ambaú-putari, amuriwera, apurakí-putari, marã, resú-kwáu, ripí-pe, rumasá-pe, tatá-pe, ukwáu-putari, unheẽwera, usú-putari, uwatá-kwáu, yakumame, Amaã-putari, Amaãntu, Amunhã-kari, Apiripana-putari, Apituú-putari, Asenúi-kari, Awá-ta, Ayuíri-putari, Igarapé-pe, Indé-ta, Kuíri-ta, Marã-ta, Piauíwara, Rekiri-putari, Remukaturu-kari, Resikari-putari, Reumpuka-putari, Sakakwerantu.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 49 word types tagged as particles (PART): Eẽ, Kusukúi, aikwewara, aikwé, ana, arama, arã, ba, eré, intí, intíu, ipú, katú, ku, kurí, kwera, maã, nti, nẽ, pawa, paá, presizu, pu, pá, ra, rakú, ranhẽ, raĩ, raẽ, rã, rẽ, será, supí, ta, taá, te, tenhẽ, tenki, tenupá, ti, té, tẽ, umbaá, wana, wera, wã, xukúi, yepé, ã</li>
</ul>

<ul>
<li>This corpus contains 37 lemmas tagged as pronouns (PRON): aintá, aité, amú, awá, aé, i, indé, iné, ixé, ixéu, kwaá, kwá, manungara, maã, muiriira, mukũi-itá, muíri, ne, nhaã, panhẽ, pe, penhẽ, se, setá, siiya, siya, siía, ta, turusú, upaĩ, waá, xe, yandé, yané, yawé, yepé, yepé-yepé</li>
</ul>

<ul>
<li>This corpus contains 20 lemmas tagged as determiners (DET): aité, amú, awá, aé, kwaá, kwá, maã, muíri, nhaã, panhẽ, setá, siiya, siya, siía, turusú, upanhẽ, upaĩ, yawé, yepé, yepé-yepé</li>
</ul>

<ul>
<li>Out of the above, 19 lemmas occurred sometimes as PRON and sometimes as DET: aité, amú, awá, aé, kwaá, kwá, maã, muíri, nhaã, panhẽ, setá, siiya, siya, siía, turusú, upaĩ, yawé, yepé, yepé-yepé</li>
</ul>

<ul>
<li>This corpus contains 7 lemmas tagged as auxiliaries (AUX): ikú, kari, kwáu, puderi, putari, sú, yuíri</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: ikú, kwáu, putari, sú, yuíri</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: uikú, usú, asú, aikú, yasú, reikú, yaikú, upuderi, uputari, xaikú</li>
    <li>VERB: unheẽ, usú, usika, umaã, umunhã, upitá, urikú, upisika, umbeú, upurandú</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: putari, kwáu, kari, ikú</li>
    <li>VERB: mukaẽ, nheengari, rasú, suruka, yatiri, yumumeú, Meẽ, Munhã, kamunú, kataka</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: manú</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>




<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX-Fin: yasú, yaikú, pesú, yapuderi, Pekũi, Pepuderi, peikú, taikú, tasú, yayuíri</li>
      <li>DET: kwá-itá, nhaã-itá, amú-itá</li>
      <li>NOUN: mira-itá, kunhã-itá, apigawa-itá, anama-itá, taína-itá, maã-itá, pirá-itá, kunhã-etá, pindá-itá, wirá-itá</li>
      <li>PRON: aintá, ta, yané, yandé, waá-itá, penhẽ, pe, amú-itá, kwá-itá, nhaã-itá</li>
      <li>VERB-Fin: yamunhã, yamaã, yasú, pemunhã, yaú, pemaã, taunheẽ, pesendú, pexari, peú</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX-Fin: asú, aikú, reikú, xaikú, resú, xasú, aputari, Ekũi, Kũi, Repuderi</li>
      <li>DET: nhaã, kwá, amú, kwaá</li>
      <li>NOUN: ara, mira, manha, igara, pituna, kunhã, apigawa, paraná, yautí, kaá</li>
      <li>NOUN-Vnoun: manú</li>
      <li>PRON: i, se, waá, aé, ne, ixé, indé, nhaã, kwá, amú</li>
      <li>VERB-Fin: asú, reputari, remaã, rerikú, resú, amaã, amunhã, akwáu, arikú, remunhã</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc,Nom
    <ul>
      <li>PRON: aé, yandé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>PRON: ixéu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>PRON: i, se, ne, aintá, yané, ta, pe, yandé, Xe, U</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: yepé</li>
      <li>PRON: yepé</li>
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
      <li>NOUN: buyawasú, miráwasú, iwiwasú, kiririwasú, tiapuwasú, yawaratewasú-itá, amanawasú, awawasú, inayawasú, ipawawasú</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADV: piri</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dim
    <ul>
      <li>ADJ: purangamirĩ</li>
      <li>NOUN: Abumirĩ, fardamirĩ, kurumirĩ, kurusamirĩ-etá, makakaí, wirawasumirĩ-etá</li>
      <li>PRON: setaíra</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADV: piri</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: ti, intí, nẽ, te, nti, umbaá, tenhẽ, intíu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>PART: eré, Eẽ</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Compl
    <ul>
      <li>PART: pawa, pá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Freq
    <ul>
      <li>ADV: Asuiwara, Ikewara, kwayewara, sewara, yawewara</li>
      <li>NOUN: arawara, rukawara</li>
      <li>PART: wera, aikwewara</li>
      <li>VERB-Fin: Amanduariwara, Asuwara</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frus
    <ul>
      <li>PART: yepé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Hab
    <ul>
      <li>SCONJ: rametiwa</li>
      <li>VERB-Fin: ambautiwa, ukanhemutiwa, upinaitikatiwa, upurungitatiwa, usutiwa, uyukatiwa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>PART: rẽ, raĩ, raẽ, ranhẽ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Iter
    <ul>
      <li>AUX-Fin: ayuíri, yayuíri</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>PART: ana, ã, wã, wana</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: Pekũi, Ekũi, Kũi, pesú</li>
      <li>VERB-Fin: Iruri, yuri, remaã, ikũi, pemunhã, retirika, Epirari, Epurú, Pemaã, eruri</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp,Ind
    <ul>
      <li>AUX-Fin: reikú, resú, pesú, Pepuderi</li>
      <li>VERB-Fin: Remaã, remunhã, remundú, rerikú, pemaã, rembeú, reruri, Retirika, pemunhã, pemuturusú</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: uikú, usú, asú, aikú, yasú, yaikú, upuderi, uputari, reikú, xaikú</li>
      <li>VERB-Fin: unheẽ, usú, usika, umaã, umunhã, upitá, urikú, upisika, umbeú, upurandú</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>PART: kurí, arama, arã, ku, rã</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>PART: kwera, wera</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADV: Asuiwara, Ikewara, kwayewara, sewara, yawewara</li>
      <li>NOUN: arawara, rukawara</li>
      <li>PART: aikwewara</li>
      <li>VERB-Fin: Amanduariwara, Asuwara</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Mid,Pass
    <ul>
      <li>VERB-Fin: uyumunhã, Uyupurungitá, reyumumeú, uyumuapiri, uyumuaíwa, uyumusangawa, uyumusarái, uyumutawarí, uyumuyuka, uyuputari</li>
      <li>VERB-Inf: yumumeú, yumunhã</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Evident</a></li>
</ul>

<ul>
  <li>Nfh
    <ul>
      <li>PART: paá</li>
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
      <li>DET: yepé</li>
      <li>PRON: yepé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: iké, ape, kwá, akití, aape, Mimi, kí, Ikewara</li>
      <li>DET: nhaã, kwá, kwá-itá, kwaá, aé, nhaã-itá</li>
      <li>PRON: nhaã, kwá, kwá-itá, nhaã-itá, kwaá, aé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: aité</li>
      <li>PRON: aité</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: mairamé, makití, masuí, marupí</li>
      <li>DET: amú, siiya, siía, muíri, maã, setá, yawé, turusú, amú-itá, siya</li>
      <li>PRON: maã, awá, amú, amú-itá, manungara, siiya, siya, mukũi-itá, setá, amú-etá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: mayé, mamé, makití, marupí, mairamé, marama, masuí, maita, mayawé, marã</li>
      <li>DET: Maã, muíri, awá</li>
      <li>PRON: maã, awá, Muíri</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: i, aintá, se, aé, ne, ixé, indé, ta, yané, yandé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: mamé, makití, mayé, mairamé, masuí, marupí</li>
      <li>PRON: waá, waá-itá, awá, maã</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: panhẽ, upaĩ, muíri, upanhẽ</li>
      <li>PRON: panhẽ, muíri, upaĩ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: mukũi, musapiri, yepé, sete, 1930, Oito, nove, oitu, pú-mukũi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADV: mukũisawa, primeru</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: se, i, ne, yané, aintá, ta, pe, yandé, Xe</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: asú, aikú, yasú, yaikú, xaikú, xasú, yapuderi, aputari, apuderi, ayuíri</li>
      <li>PRON: se, ixé, yané, yandé, ixéu, Xe</li>
      <li>VERB-Fin: asú, yamunhã, amaã, amunhã, akwáu, arikú, aputari, yamaã, yasú, ambeú</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: reikú, pesú, resú, Pekũi, Ekũi, Kũi, Pepuderi, Repuderi, peikú, rekwáu</li>
      <li>PRON: ne, indé, penhẽ, pe, iné</li>
      <li>VERB-Fin: reputari, remaã, rerikú, resú, remunhã, pemunhã, reyuri, pemaã, remaú, rembeú</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: uikú, usú, upuderi, uputari, taikú, tasú</li>
      <li>PRON: i, aintá, aé, ta, U</li>
      <li>VERB-Fin: unheẽ, usú, usika, umaã, umunhã, upitá, urikú, upisika, umbeú, upurandú</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: sera, suka, ximirikú, taíra, sawa, sesá, sukwera, sumuara, ximiára, sakakwera</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Post
        <ul>
          <li>ADP: upé, kití, irumu, suí, rupí, supé, arama, xupé, yawé, ramé</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: até, té</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdvType</a>
    <ul>
      <li>Cau
        <ul>
          <li>ADV: nhaãsé, Ape, aresé, aramé, marama, kurumú, marã</li>
        </ul>
      </li>
      <li>Con
        <ul>
          <li>ADV: Ma, nuká</li>
        </ul>
      </li>
      <li>Deg
        <ul>
          <li>ADV: reté, katú, xinga, retana, piri, yuíri, mirĩ, turusú, retã, puru</li>
        </ul>
      </li>
      <li>Loc
        <ul>
          <li>ADV: iké, apekatú, mamé, ape, makití, marupí, masuí, akití, arupí, kwá</li>
        </ul>
      </li>
      <li>Man
        <ul>
          <li>ADV: yawé, mayé, puranga, kwayé, kutara, kirimbawa, puxí, merupí, katú, tiapú</li>
        </ul>
      </li>
      <li>Mod
        <ul>
          <li>ADV: kuité, kuté</li>
        </ul>
      </li>
      <li>Tim
        <ul>
          <li>ADV: asuí, kuíri, ape, aramé, ariré, wirandé, yeperesé, aiwana, aape, kuxiima</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Clitic</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADP: upé, pe, me, wara, arã</li>
          <li>ADV: ntu</li>
          <li>PART: taá, wera, ta</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Compound</a>
    <ul>
      <li>Yes
        <ul>
          <li>AUX-Inf: putari, kwáu, kari</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Deixis</a>
    <ul>
      <li>Prox
        <ul>
          <li>ADV: iké, kwá, kí</li>
          <li>DET: kwá, kwá-itá, kwaá</li>
          <li>PRON: kwá, kwá-itá, kwaá</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADV: ape, akití, aape, Mimi</li>
          <li>DET: nhaã, aé, nhaã-itá</li>
          <li>PRON: nhaã, nhaã-itá, aé</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Derivation</a>
    <ul>
      <li>Coll
        <ul>
          <li>NOUN: itatiwa, kapĩtiwa, mirawasutiwa, sakaitiwa, wakutiwa</li>
        </ul>
      </li>
      <li>Priv
        <ul>
          <li>ADJ: Adana-ima, apisaíma, ara-ima, kiinha-ima, paya-ima, santaíma, sawa-ima, tĩ-ima, ximirikú-ima</li>
          <li>ADV: tiapuíma</li>
          <li>VERB-Fin: kiaíma</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADV
        <ul>
          <li>ADV: Kutara</li>
          <li>PART: aikwé</li>
        </ul>
      </li>
      <li>DET
        <ul>
          <li>ADV: mayé</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>PART: nẽ</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>PRON: waá</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Foc</a>
    <ul>
      <li>Yes
        <ul>
          <li>PART: tẽ, tenhẽ, katú, ra, té</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Modality</a>
    <ul>
      <li>Cond
        <ul>
          <li>PART: maã</li>
        </ul>
      </li>
      <li>Proh
        <ul>
          <li>PART: te, tenhẽ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[grnd]</a>
    <ul>
      <li>Sing
        <ul>
          <li>ADP: sesé, suakí, sesewara, sakakwera, suaxara</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PartType</a>
    <ul>
      <li>Emp
        <ul>
          <li>PART: tẽ, tenhẽ, katú, ra, té</li>
        </ul>
      </li>
      <li>Exs
        <ul>
          <li>PART: aikwé, aikwewara</li>
        </ul>
      </li>
      <li>Int
        <ul>
          <li>PART: taá, será, ta</li>
        </ul>
      </li>
      <li>Mod
        <ul>
          <li>PART: paá, pu, maã, supí, eré, te, tenki, tenupá, ipú, presizu</li>
        </ul>
      </li>
      <li>Neg
        <ul>
          <li>PART: ti, intí, nẽ, nti, umbaá, intíu</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PART: xukúi, Kusukúi</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[grnd]</a>
    <ul>
      <li>3
        <ul>
          <li>ADP: sesé, suakí, sesewara, sakakwera, suaxara</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[psor]</a>
    <ul>
      <li>3
        <ul>
          <li>NOUN: sera, suka, ximirikú, taíra, sawa, sesá, sukwera, sumuara, ximiára, sakakwera</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PunctType</a>
    <ul>
      <li>Elip
        <ul>
          <li>PUNCT: [...]</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Red</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: purapuranga</li>
          <li>DET: yawé-yawé</li>
          <li>NOUN: tapurú-tapurú</li>
          <li>PRON: yawé-yawé</li>
          <li>VERB-Fin: uyawiyawika, Akaá-kaá, Tasuú-suú, Utuká-tuká, aganaganari, atuká-tuká, takaú-kaú, ukaúkaú, ukikiri, upinú-pinú</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Rel</a>
    <ul>
      <li>Abs
        <ul>
          <li>NOUN: uka, tatá, ukara, tetama, timbiú, ukena, tuixawa, tendawa, teapú, tuwí</li>
        </ul>
      </li>
      <li>Cont
        <ul>
          <li>ADP: resé, resewara, ruakí, rakakwera, aresé, rakwera, renundé, ruaxara, rikuyara</li>
          <li>NOUN: ruka, ramunha, raíra, retama, rapé, rupitá, rangawa, riiya, resá, rimirikú</li>
          <li>SCONJ: resewara</li>
          <li>VERB-Fin: rurí, ranhẽ, rakú, rawa, resarái, rikwé</li>
          <li>VERB-Inf: renúi, ripiaka</li>
        </ul>
      </li>
      <li>NCont
        <ul>
          <li>ADP: sesé, suakí, sesewara, sakakwera, suaxara</li>
          <li>NOUN: sera, suka, ximirikú, taíra, sawa, sesá, sukwera, sumuara, ximiára, sakakwera</li>
          <li>VERB-Fin: surí, sakú, sasí, sikwé, setá, tiapú, Ikupukú, sesaíma, tipí, sawa</li>
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
          <li>ADP: aresé, resewara</li>
          <li>AUX-Fin: xaikú, xasú</li>
          <li>AUX-Inf: ikú</li>
          <li>NOUN: ukena, imirikú, manú, rangawa, sakapira, siiya, sikú, tuwí, uka, ukara</li>
          <li>NOUN-Vnoun: manú</li>
          <li>PRON: yandé, ne, aé, se, i, penhẽ</li>
          <li>VERB-Fin: xasú, xarasú, xarikú, Ururi, Uxipiá, Xakitika, Xapiiri, Xaputari, Xasaisú, Xasika</li>
          <li>VERB-Inf: rasú, yumumeú, Meẽ, Munhã, kamunú, kataka, kutuka, muapisí, mundú, puitá</li>
        </ul>
      </li>
      <li>Rare
        <ul>
          <li>NOUN: Yukasara, teapú</li>
          <li>VERB-Inf: maramunhã</li>
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
          <li>ADP: aresé, pu, py, rumu</li>
          <li>NOUN: Mukura, kaziwera, kunhaitãi, miarerú, remiré</li>
          <li>PART: maã</li>
          <li>PRON: U, i</li>
          <li>VERB-Fin: pasú, poréi, repi, ta, uarasú, uimú, uyupi, wasemu</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: ikú.</li>
</ul>

<ul>
<li>This corpus uses 7 lemmas as auxiliaries (<a>aux</a>). Examples: sú, ikú, putari, kwáu, puderi, kari, yuíri.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (657)</li>
      <li>VERB-Fin--PRON (625)</li>
      <li>VERB-Fin--PRON-Gen (51)</li>
      <li>VERB-Inf--NOUN (7)</li>
      <li>VERB-Inf--PRON (8)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (729)</li>
      <li>VERB-Fin--NOUN-ADP(resé) (3)</li>
      <li>VERB-Fin--PRON (347)</li>
      <li>VERB-Fin--PRON-Gen (1)</li>
      <li>VERB-Fin--PRON-Gen-ADP(irumu) (1)</li>
      <li>VERB-Inf--NOUN (2)</li>
      <li>VERB-Inf--PRON-Gen (6)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (3)</li>
      <li>VERB-Fin--NOUN-ADP(supé) (32)</li>
      <li>VERB-Fin--NOUN-ADP(xupé) (5)</li>
      <li>VERB-Fin--NOUN-ADP(xupé)-ADP(arama) (2)</li>
      <li>VERB-Fin--PRON (11)</li>
      <li>VERB-Fin--PRON-ADP(arama) (18)</li>
      <li>VERB-Fin--PRON-ADP(arã) (13)</li>
      <li>VERB-Fin--PRON-ADP(supé) (1)</li>
      <li>VERB-Fin--PRON-ADP(supé)-ADP(arama) (1)</li>
      <li>VERB-Fin--PRON-Dat (3)</li>
      <li>VERB-Fin--PRON-Gen-ADP(supé) (15)</li>
      <li>VERB-Fin--PRON-Gen-ADP(xupé) (36)</li>
      <li>VERB-Fin--PRON-Gen-ADP(xupé)-ADP(arã) (1)</li>
      <li>VERB-Inf--PRON-ADP(supé) (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 3 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>nmod:poss</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a>, <a>orphan</a></li>
</ul>
