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

The following people have contributed to making this treebank part of UD: Leonel Figueiredo de Alencar, Dominick Maia Alexandre.

Repository: [UD_Nheengatu-CompLin](https://github.com/UniversalDependencies/UD_Nheengatu-CompLin)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udyrl_complin218)<br />
Download all treebanks: [UD 2.18](/#download)

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

[UD_Nheengatu-CompLin](https://aclanthology.org/2024.propor-2.8) is a treebank of [Nheengatu](https://glottolog.org/resource/languoid/id/nhen1239), also known as Modern Tupi and *Língua Geral Amazônica* (ISO 639: `yrl`). It comprises sentences drawn from a wide range of published sources, including spontaneous speech, grammatical descriptions, fables, myths, coursebooks, and dictionaries.



This is the first morphosyntactic treebank of Nheengatu. It remains a work in progress, with ongoing expansion planned for the coming months.

The treebank comprises sentences from a wide range of published sources freely available online, including grammatical descriptions, fables, myths, coursebooks, and dictionaries. The sentences were extracted either from PDF text files, transcribed from non-searchable (image-only) PDFs, or manually converted from phonetic transcriptions into orthography. Throughout the treebank, we generally adopt the spelling system proposed by Avila (2021), diverging from it only in a few cases.

The annotation was performed semi-automatically: we first applied the Yauti morphosyntactic analyzer (de Alencar 2023, 2025) to each sentence and then manually revised the output.

The development of this treebank and related tools is part of the research activities of the Research Group on Computation and Natural Language (*Computação e Linguagem Natural* — CompLin) at the Humanities Center of the Federal University of Ceará, Brazil. The main contributor to this effort is Leonel Figueiredo de Alencar, coordinator of the CompLin group. Additional annotators include Dominick Maia Alexandre, Hélio Leonam Barroso Silva, and Juliana Lopes Gurgel, who was a scholarship holder in the DACILAT project funded by the São Paulo Research Foundation (*Fundação de Amparo à Pesquisa do Estado de São Paulo* — FAPESP), Process No. 22/09158-5.

The following repository contains the most up-to-date development version of the treebank, as well as related tools and resources:

https://github.com/CompLin/nheengatu

The treebank currently includes examples from Seixas (1853), Hartt (1872), Magalhães (1876), Sympson (1877), Rodrigues (1890), Aguiar (1898), Costa (1909), Studart (1926), Amorim (1928), Hartt (1938), Moore, Facundes, and Pires (1994), Casasnovas (2006), Cruz (2011), Comunidade de Terra Preta (2013), Stradelli (1929/2014), Navarro (2016), Melgueiro, Câmara, and Martins (2019), Muller et al. (2019), de Alencar (2021), Avila (2021), and Melgueiro (2022), as well as from the *Novo Testamento na língua Nyengatu* (1973/2019) and issues 3 and 17 of the *Leetra Indígena* journal (Universidade Federal de São Carlos, 2014, 2015).

## Acknowledgments

We thank Eduardo de Almeida Navarro (University of São Paulo) for kindly allowing us to use examples and texts from his coursebook (Navarro 2016), whose glossary served as the initial basis for the morphological analyzer used to annotate the UD_Nheengatu-CompLin treebank.

We are greatly indebted to Avila (2021)'s dictionary, from which numerous treebank sentences are drawn. This resource also provided invaluable lexical, grammatical, and semantic information for the further development of the morphological analyzer and related annotation tools. We are especially grateful to its author, Marcel Twardowsky Avila, for making the XML version of the dictionary available to us and for clarifying many questions regarding its entries.

We gratefully acknowledge the scholarships awarded to annotators by the São Paulo Research Foundation (FAPESP), through the [DACILAT](https://bv.fapesp.br/57063) project (Process No. 22/09158-5), and by the Foundation for the Support and Development of Research in the State of Ceará (FUNCAP).

We are indebted to Gabriela Lourenço Fernandes and Susan Gabriela Huallpa Huanacuni, interns at the [Biblioteca Brasiliana Guita e José Mindlin](https://www.bbm.usp.br/pt-br/) of the University of São Paulo (USP), as well as to its research specialist and curator, João Marcos Cardoso, for their transcriptions of stories from Amorim (1928) and Rodrigues (1890).

We also thank the Federal University of Amazonas Press (*Editora da Universidade Federal do Amazonas* — UFAM), particularly its director, Sérgio Freire, for granting permission to incorporate texts from Casasnovas (2006) into the treebank.

## License

The copyright of the treebank sentences and their translations remains with their respective authors. This data is made available solely to support research, teaching, and the learning of the Nheengatu language. It should not be used for commercial purposes. For more information, see LICENSE.txt.

## References

* Aguiar, Costa. (1898). *Doutrina christã destinada aos naturaes do Amazonas em nhihingatu com traducção portugueza em face*. Pap. e Tip. Pacheco, Silva & C.

* Avila, Marcel Twardowsky. (2021). *Proposta de dicionário nheengatu-português* (Doctoral dissertation, University of São Paulo). https://doi.org/10.11606/T.8.2021.tde-10012022-201925

* Casasnovas, Afonso. (2016). *Noções de língua geral ou nheengatú: Gramática, lendas e vocabulário* (2nd ed.). Editora da Universidade Federal do Amazonas; Faculdade Salesiana Dom Bosco.

* Comunidade de Terra Preta. (2013). *Fábulas de Terra Preta: Uma coletânea bilíngue*.

* Costa, D. Frederico. (1909). *Carta pastoral de D. Frederico Costa bispo do Amazonas a seus amados diocesanos*. Typ. Minerva.

* Cruz, Aline da. (2011). *Fonologia e gramática do nheengatú: A língua falada pelos povos Baré, Warekena e Baniwa*. Netherlands National Graduate School of Linguistics.

* de Alencar, Leonel Figueiredo. (2021). Uma gramática computacional de um fragmento do nheengatu / A computational grammar for a fragment of Nheengatu. *Revista de Estudos da Linguagem, 29*(3), 1717–1777. http://dx.doi.org/10.17851/2237-2083.29.3.1717-1777

* de Amorim, Antonio Brandão. (1928). Lendas em nheêngatú e em portuguez. *Revista do Instituto Historico e Geographico Brasileiro, 154*(100), 9–475.

* de Magalhães, J. V. C. (1876). *O selvagem*. Typographia da Reforma.

* Hartt, Charles Frederick. (1872). *Notes on the Lingoa Geral or Modern Tupi of the Amazonas*. *Transactions of the American Philological Association, 3*, 58–76. https://www.jstor.org/stable/310258

* Hartt, Charles Frederick. (1938). *Notas sobre a língua geral, ou tupí moderno do Amazonas*. *Anais da Biblioteca Nacional do Rio de Janeiro, 51*, 305–390. Rio de Janeiro: M. E. S. Serviço Gráfico.

* Maslova, Irina. (2018). *Tradução comentada de mitos e lendas amazônicas do nheengatu para o russo* (Master’s thesis, University of São Paulo). https://doi.org/10.11606/D.8.2019.tde-22022019-175350

* Melgueiro, Edilson Martins, Câmara, Ana Suelly Arruda, & Martins, Marci Fileti. (2019). Orações relativas em Nheengatú ou Ingatú. *Revista Brasileira de Linguística Antropológica, 11*(2), 16. https://doi.org/10.26512/rbla.v11i02.28115

* Melgueiro, Edilson Martins. (2022). *O Nheengatu de Stradelli aos dias atuais: uma contribuição aos estudos lexicais de línguas Tupí-Guaraní em perspectiva diacrônica* (Doctoral dissertation, University of Brasília). http://repositorio2.unb.br/jspui/handle/10482/44655

* Moore, Denny, Facundes, Sidney, & Pires, Nádia. (1994). *Nheengatu (Língua Geral Amazônica), its history, and the effects of language contact*. Department of Linguistics, University of California, Berkeley. https://escholarship.org/uc/item/7tb981s1

* Muller, Jean-Claude, Dietrich, Wolf, Monserrat, Ruth, Barros, Cândida, Arenz, Karl-Heinz, & Prudente, Gabriel (Eds.). (2019). *Dicionário de língua geral amazônica*. Universitätsverlag Potsdam; Museu Paraense Emílio Goeldi.

* Navarro, Eduardo de Almeida. (2016). *Curso de língua geral (nheengatu ou tupi moderno): A língua das origens da civilização amazônica* (2nd ed.). Centro Angel Rama, FFLCH, Universidade de São Paulo.

* *Novo Testamento na língua Nyengatu* (2nd ed.). (2019). Missão Novas Tribos do Brasil. (Original work published 1973)

* Rodrigues, João Barbosa. (1890). *Poranduba amazonense ou kochiyma-uara porandub, 1872–1887*. Typ. de G. Leuzinger & Filhos.

* Seixas, Manoel Justiniano de. (1853). *Vocabulario da lingua indigena geral para o uso do Seminario Episcopal do Pará*. Typ. de Mattos e Compª.

* Stradelli, Ermanno. (2014). *Vocabulário português-nheengatu, nheengatu-português*. Ateliê Editorial. (Original work published 1929)

* Studart, Jorge. (1926). Ligeiras noções de língua geral. *Revista do Instituto do Ceará, 40*, 26–38.

* Sympson, Pedro Luiz. (1877). *Grammatica da lingua brazilica geral, fallada pelos aborigines das provincias do Pará e Amazonas*. Typographia do Commercio do Amazonas.

* Universidade Federal de São Carlos, Laboratório de Linguagens LEETRA. (2014). *Leetra Indígena, 3*(3) [Edição especial: Yasú Yapurũgtitá Yẽgatú]. São Carlos, SP: UFSCar.

* Universidade Federal de São Carlos, Laboratório de Linguagens LEETRA. (2015). *Leetra Indígena, 1*(17) [Edição especial: Escola Kariamã conta umbuesá]. São Carlos, SP: UFSCar.




# Statistics of UD Nheengatu CompLin

## POS Tags

[ADJ](yrl_complin-pos-ADJ.html) – [ADP](yrl_complin-pos-ADP.html) – [ADV](yrl_complin-pos-ADV.html) – [AUX](yrl_complin-pos-AUX.html) – [CCONJ](yrl_complin-pos-CCONJ.html) – [DET](yrl_complin-pos-DET.html) – [INTJ](yrl_complin-pos-INTJ.html) – [NOUN](yrl_complin-pos-NOUN.html) – [NUM](yrl_complin-pos-NUM.html) – [PART](yrl_complin-pos-PART.html) – [PRON](yrl_complin-pos-PRON.html) – [PROPN](yrl_complin-pos-PROPN.html) – [PUNCT](yrl_complin-pos-PUNCT.html) – [SCONJ](yrl_complin-pos-SCONJ.html) – [VERB](yrl_complin-pos-VERB.html) – [X](yrl_complin-pos-X.html)

## Features

[AdpType](yrl_complin-feat-AdpType.html) – [AdvType](yrl_complin-feat-AdvType.html) – [Aspect](yrl_complin-feat-Aspect.html) – [Case](yrl_complin-feat-Case.html) – [Clitic](yrl_complin-feat-Clitic.html) – [Compound](yrl_complin-feat-Compound.html) – [Definite](yrl_complin-feat-Definite.html) – [Degree](yrl_complin-feat-Degree.html) – [Deixis](yrl_complin-feat-Deixis.html) – [Derivation](yrl_complin-feat-Derivation.html) – [Evident](yrl_complin-feat-Evident.html) – [ExtPos](yrl_complin-feat-ExtPos.html) – [Foc](yrl_complin-feat-Foc.html) – [Modality](yrl_complin-feat-Modality.html) – [Mood](yrl_complin-feat-Mood.html) – [Number](yrl_complin-feat-Number.html) – [Number[grnd]](yrl_complin-feat-Number-grnd.html) – [Number[psor]](yrl_complin-feat-Number-psor.html) – [NumType](yrl_complin-feat-NumType.html) – [PartType](yrl_complin-feat-PartType.html) – [Person](yrl_complin-feat-Person.html) – [Person[grnd]](yrl_complin-feat-Person-grnd.html) – [Person[psor]](yrl_complin-feat-Person-psor.html) – [Polarity](yrl_complin-feat-Polarity.html) – [Poss](yrl_complin-feat-Poss.html) – [PronType](yrl_complin-feat-PronType.html) – [PunctType](yrl_complin-feat-PunctType.html) – [Red](yrl_complin-feat-Red.html) – [Rel](yrl_complin-feat-Rel.html) – [Style](yrl_complin-feat-Style.html) – [Tense](yrl_complin-feat-Tense.html) – [Typo](yrl_complin-feat-Typo.html) – [VerbForm](yrl_complin-feat-VerbForm.html) – [Voice](yrl_complin-feat-Voice.html)

## Relations

[acl](yrl_complin-dep-acl.html) – [acl:relcl](yrl_complin-dep-acl-relcl.html) – [advcl](yrl_complin-dep-advcl.html) – [advcl:relcl](yrl_complin-dep-advcl-relcl.html) – [advmod](yrl_complin-dep-advmod.html) – [amod](yrl_complin-dep-amod.html) – [appos](yrl_complin-dep-appos.html) – [aux](yrl_complin-dep-aux.html) – [case](yrl_complin-dep-case.html) – [cc](yrl_complin-dep-cc.html) – [ccomp](yrl_complin-dep-ccomp.html) – [compound](yrl_complin-dep-compound.html) – [conj](yrl_complin-dep-conj.html) – [cop](yrl_complin-dep-cop.html) – [csubj](yrl_complin-dep-csubj.html) – [dep](yrl_complin-dep-dep.html) – [det](yrl_complin-dep-det.html) – [discourse](yrl_complin-dep-discourse.html) – [dislocated](yrl_complin-dep-dislocated.html) – [expl](yrl_complin-dep-expl.html) – [fixed](yrl_complin-dep-fixed.html) – [flat](yrl_complin-dep-flat.html) – [goeswith](yrl_complin-dep-goeswith.html) – [iobj](yrl_complin-dep-iobj.html) – [mark](yrl_complin-dep-mark.html) – [nmod](yrl_complin-dep-nmod.html) – [nmod:poss](yrl_complin-dep-nmod-poss.html) – [nsubj](yrl_complin-dep-nsubj.html) – [nummod](yrl_complin-dep-nummod.html) – [obj](yrl_complin-dep-obj.html) – [obl](yrl_complin-dep-obl.html) – [orphan](yrl_complin-dep-orphan.html) – [parataxis](yrl_complin-dep-parataxis.html) – [punct](yrl_complin-dep-punct.html) – [reparandum](yrl_complin-dep-reparandum.html) – [root](yrl_complin-dep-root.html) – [vocative](yrl_complin-dep-vocative.html) – [xcomp](yrl_complin-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 2839 sentences, 26444 tokens and 26848 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 7905 tokens (30%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 210 types of words that contain both letters and punctuation. Examples: waá-itá, mira-itá, kwá-itá, amú-itá, kunhã-itá, apigawa-itá, anama-itá, maã-itá, nhaã-itá, kunhã-etá, taína-itá, pirá-itá, raíra-itá, rimirikú-itá, kamarara-itá, kariwa-itá, tayera-itá, yawé-yawé, mirá-piranga, pindá-itá, rundewara-itá, wirá-itá, amú-etá, apigawa-etá, kunhamukú-itá, mimbira-itá, mira-etá, mirá-itá, mú-itá, pirá-mirĩ, suú-itá, taria-itá, taíra-itá, tuixawa-etá, wirá-mirĩ, yepé-yepé, amú-tetamawara, amú-wirandé, arú-itá, ikewara-itá, iwá-itá, kunawarú-etá, kurabí-itá, kurasí-ara, kurumiwasú-itá, kurumĩ-itá, kurupira-itá, kuẽma-piranga, mbira-itá, mena-itá</li>
</ul>

<ul>
<li>This corpus contains 404 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 221 types of multi-word tokens. Examples: árupi, pitérupi, maita, wírupi, iwí-pe, kaá-pe, resú-putari, asú-putari, kupixá-pe, paraname, Maã-ta, igarupá-pe, ipí-pe, kupé-pe, rembií-pe, ukwáu-putari, xamunhã-kwáu, Tupayú-pe, asú-kwáu, gantime, marã, pausá-pe, putiá-pe, remenari-putari, rupitá-pe, usú-putari, uwatá-kwáu, uyuká-putari, uyuyuká-putari, xasú-putari, Piauíwara, Ukiririntu, ambaú-putari, amuriwera, apurakí-putari, awá-ta, mixukúi, pawasá-pe, piá-pe, rasú-kwáu, resá-pe, resú-kwáu, ripí-pe, rumasá-pe, tatá-pe, unheẽwera, upisika-putari, xaseruka-kari, xawitá-kwáu, xibentu.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 64 word types tagged as particles (PART): Aikuré, Aé, Eẽ, Kusukúi, Masekúi, Teẽ, aikwewara, aikwé, amú, ana, arama, arã, ba, emú, eré, imú, inté, intí, intíu, ipú, katú, ku, kurí, kwera, maã, nti, nẽ, p, pawa, paá, presizu, pu, pá, páu, ra, rakú, ranhẽ, raĩ, raẽ, rã, rẽ, saĩ, será, supí, ta, taá, taé, te, tenhẽ, tenki, tenupá, ti, tu, té, tẽ, umbaá, wana, warama, wera, wã, wé, xukúi, yepé, ã</li>
</ul>

<ul>
<li>This corpus contains 45 lemmas tagged as pronouns (PRON): aintá, aité, amú, awá, aé, aúna, i, indé, indéu, iné, inéu, ixé, ixéu, kwaá, kwá, manungara, maã, muiriira, mukũi, mukũi-itá, muíri, ne, nhaã, panhẽ, pawé, pe, penhẽ, se, setá, siiya, sitá, siya, siía, ta, turusú, upawé, upaĩ, waá, xe, yandé, yané, yanéu, yawé, yepé, yepé-yepé</li>
</ul>

<ul>
<li>This corpus contains 22 lemmas tagged as determiners (DET): aité, amú, awá, aé, kwaá, kwá, mawaá, maã, muíri, nhaã, panhẽ, paĩ, setá, siiya, siya, siía, turusú, upanhẽ, upaĩ, yawé, yepé, yepé-yepé</li>
</ul>

<ul>
<li>Out of the above, 19 lemmas occurred sometimes as PRON and sometimes as DET: aité, amú, awá, aé, kwaá, kwá, maã, muíri, nhaã, panhẽ, setá, siiya, siya, siía, turusú, upaĩ, yawé, yepé, yepé-yepé</li>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as auxiliaries (AUX): ikú, kari, kwá, kwáu, puderi, putari, sú, yuíri</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as AUX and sometimes as VERB: ikú, kwá, kwáu, putari, sú, yuíri</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: uikú, usú, yasú, asú, xaikú, xasú, aikú, reikú, yaikú, Ekũi</li>
    <li>VERB: unheẽ, usú, usika, umaã, umunhã, urikú, upitá, upisika, umbeú, uri</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: putari, kwáu, ikú, kari, kwá, vutari</li>
    <li>VERB: yumunhã, putari, rasú, yuká, munhã, nupá, watá, kutuka, kwáu, mukaẽ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>VERB: ukwawasawa, pemanduarisawa, remanduarisawa, uyumimisawa, yamanduarisawa, hamanduarisawa, pekwasawa, rekwawasawa, ukaamunusawa, umundisá</li>
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
      <li>AUX-Fin: yasú, yaikú, pesú, yapuderi, Pekũi, Pepuderi, peikú, Tausú, taikú, tasú</li>
      <li>DET: kwá-itá, nhaã-itá, amú-itá</li>
      <li>NOUN: mira-itá, kunhã-itá, apigawa-itá, anama-itá, maã-itá, kunhã-etá, taína-itá, pirá-itá, kamarara-itá, kariwa-itá</li>
      <li>PRON: aintá, yané, ta, yandé, penhẽ, waá-itá, pe, amú-itá, kwá-itá, nhaã-itá</li>
      <li>VERB-Fin: yamunhã, yasú, yamaã, pemunhã, yaú, pemaã, yamanú, taunheẽ, pesendú, yayuká</li>
      <li>VERB-Vnoun: pemanduarisawa, yamanduarisawa, pekwasawa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX-Fin: asú, xaikú, xasú, aikú, reikú, Ekũi, resú, Kũi, Hapuderi, Hasú</li>
      <li>DET: nhaã, kwá, kwaá, amú, amu</li>
      <li>NOUN: ara, mira, apigawa, manha, igara, tupana, paraná, kunhã, pituna, yautí</li>
      <li>PRON: i, se, waá, aé, ne, ixé, indé, nhaã, kwá, amú</li>
      <li>PROPN: Tupayú</li>
      <li>VERB-Fin: xasú, reputari, rerikú, asú, resú, remaã, remunhã, xarikú, amaã, amunhã</li>
      <li>VERB-Vnoun: remanduarisawa, hamanduarisawa, rekwawasawa, xarikusawa</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc,Nom
    <ul>
      <li>PRON: aé, aintá, ixé, indé, ta, penhẽ, yandé, iné, yané, aúna</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>PRON: ixéu, inéu, yanéu, indéu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>PRON: i, se, ne, yané, aintá, pe, ta, xe, yandé, U</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: yepé, muyepé</li>
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
      <li>ADJ: Sepiasú, panemawasú, pixeasú</li>
      <li>NOUN: buyawasú, miráwasú, pitunawasú, kiririwasú, iwawasú, iwiwasú, marikawasú, piawasú, tiapuwasú, yawaratewasú-itá</li>
      <li>VERB-Fin: kirimawausú, xirĩwasú</li>
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
      <li>NOUN: Abumirĩ, fardamirĩ, kunhamirĩ, kurumirĩ, kurusamirĩ-etá, makakaí, wirawasumirĩ-etá, yasimirĩ-itá</li>
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
      <li>PART: ti, intí, te, nẽ, nti, tenhẽ, umbaá, Teẽ, intíu, inté</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>PART: eré, Eẽ, Aé</li>
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
      <li>PART: pawa, pá, páu, p</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cont
    <ul>
      <li>PART: wé</li>
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
      <li>VERB-Fin: ambautiwa, ukanhemutiwa, umundutiwa, upinaitikatiwa, upurungitatiwa, usutiwa, uyukatiwa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>PART: rẽ, ranhẽ, raẽ, raĩ, saĩ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Iter
    <ul>
      <li>AUX-Fin: yayuíri</li>
      <li>VERB-Fin: uyuíri, xayuíri</li>
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
      <li>AUX-Fin: Ekũi, Kũi, resú, Pekũi, pesú</li>
      <li>VERB-Fin: remaã, yuri, Ekũi, Epurú, Iruri, retirika, eyuri, ikũi, pemunhã, remeẽ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp,Ind
    <ul>
      <li>AUX-Fin: reikú, resú, pesú, Pepuderi</li>
      <li>VERB-Fin: rerikú, remunhã, resú, Remaã, remundú, rembeú, reruri, pemaã, pemunhã, pewatá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: uikú, usú, yasú, asú, xaikú, xasú, aikú, yaikú, reikú, upuderi</li>
      <li>VERB-Fin: unheẽ, usú, usika, umaã, umunhã, urikú, upitá, upisika, umbeú, uri</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>PART: kurí, arama, arã, ku, rã, warama</li>
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
      <li>VERB-Fin: uyumunhã, uyuyuká, uyuyumimi, xayumumeú, xayuruyari, Reyumupuranga, Reyuyumimi, Uyupurungitá, Xayumusakú, hayumukwaíra</li>
      <li>VERB-Inf: yumunhã, Yukindawa, Yumuatiri, yemuí, yumumeú, yumuseruka, yumuí, yupiruka, yusalvari</li>
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
      <li>DET: yepé, muyepé</li>
      <li>PRON: yepé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: iké, ape, kwá, akití, aape, mi, kí, Mimi, mikití, ké</li>
      <li>DET: nhaã, kwá, kwaá, kwá-itá, aé, nhaã-itá</li>
      <li>PRON: nhaã, kwá, kwá-itá, kwaá, nhaã-itá, aé</li>
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
      <li>ADV: mairamé, makití, mayé, masuí, marupí</li>
      <li>DET: amú, siiya, maã, siía, muíri, setá, yawé, siya, turusú, yawé-yawé</li>
      <li>PRON: maã, awá, amú, manungara, amú-itá, siya, siiya, mukũi-itá, setá, amú-etá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: mayé, mamé, makití, mairamé, marama, marupí, mayawé, masuí, maita, Maí</li>
      <li>DET: maã, muíri, awá, Mawaá</li>
      <li>PRON: maã, awá, Muíri</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: i, se, aintá, aé, ne, ixé, indé, yané, ta, yandé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: mamé, makití, mayé, marupí, masuí, mairamé</li>
      <li>DET: maã</li>
      <li>PRON: waá, waá-itá, awá, maã</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: panhẽ, upaĩ, muíri, upanhẽ, paiu</li>
      <li>PRON: panhẽ, upaĩ, muíri, pawé, upawé</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: mukũi, musapiri, yepé, pú-mukũi, sete, 1930, Oito, irundí, kwaru, nove</li>
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
      <li>PRON: se, i, ne, yané, aintá, ta, pe, xe, yandé</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: yasú, asú, xaikú, xasú, aikú, yaikú, yapuderi, Hapuderi, Hasú, apuderi</li>
      <li>PRON: se, ixé, yané, yandé, ixéu, xe, yanéu, su</li>
      <li>VERB-Fin: xasú, asú, xarikú, yamunhã, yasú, amaã, amunhã, aputari, xamunhã, yamaã</li>
      <li>VERB-Vnoun: yamanduarisawa, hamanduarisawa, xarikusawa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: reikú, Ekũi, resú, pesú, Kũi, Pekũi, Pepuderi, peikú, repuderi</li>
      <li>PRON: ne, indé, penhẽ, pe, iné, inéu, indéu, intí, n</li>
      <li>VERB-Fin: reputari, rerikú, resú, remaã, remunhã, pemunhã, reyuri, pemaã, renheẽ, rembeú</li>
      <li>VERB-Vnoun: pemanduarisawa, remanduarisawa, pekwasawa, rekwawasawa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: uikú, usú, upuderi, Tausú, taikú, tasú, taupuderi, urikú</li>
      <li>PRON: i, aintá, aé, ta, aúna, U, intá</li>
      <li>VERB-Fin: unheẽ, usú, usika, umaã, umunhã, urikú, upitá, upisika, umbeú, uri</li>
      <li>VERB-Vnoun: ukwawasawa, uyumimisawa, ukaamunusawa, umundisá, upukasawa, uputarisá, usikiesá, uyanasá</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: suka, sera, ximirikú, taíra, ximiára, sesá, suaxara, sakakwera, sawa, sukwera</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Post
        <ul>
          <li>ADP: upé, kití, suí, irumu, rupí, supé, arama, xupé, resé, ramé</li>
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
          <li>ADV: aresé, ape, aramé, nhaãsé, kurumú, marama, Mairamé, marã</li>
        </ul>
      </li>
      <li>Con
        <ul>
          <li>ADV: Ma, nuká</li>
        </ul>
      </li>
      <li>Deg
        <ul>
          <li>ADV: reté, katú, piri, xinga, retana, yuíri, mirĩ, turusú, retã, puru</li>
        </ul>
      </li>
      <li>Loc
        <ul>
          <li>ADV: iké, apekatú, mamé, ape, makití, marupí, kwá, masuí, akití, arupí</li>
        </ul>
      </li>
      <li>Man
        <ul>
          <li>ADV: yawé, mayé, puranga, kwayé, kutara, puxí, kirimbawa, amurupí, katú, kurutẽi</li>
        </ul>
      </li>
      <li>Mod
        <ul>
          <li>ADV: kuité, kuté</li>
        </ul>
      </li>
      <li>Tim
        <ul>
          <li>ADV: asuí, kuíri, ape, aramé, aiwana, yeperesé, wirandé, ariré, kuxiima, aape</li>
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
          <li>ADP: pe, upé, wara, me, arã</li>
          <li>ADV: ntu, mi</li>
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
          <li>AUX-Inf: putari, kwáu, kari, kwá, vutari</li>
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
          <li>ADV: iké, kwá, kí, ké, kwaá</li>
          <li>DET: kwá, kwaá, kwá-itá</li>
          <li>PRON: kwá, kwá-itá, kwaá</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADV: ape, akití, aape, mi, Mimi, mikití, mumi</li>
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
          <li>NOUN: itatiwa, kapĩtiwa, mirawasutiwa, sakaitiwa, siringatiwa, wakutiwa</li>
        </ul>
      </li>
      <li>Priv
        <ul>
          <li>ADJ: iwasuíma, santaíma, uyiima</li>
          <li>ADV: tiapuíma</li>
          <li>NOUN: Adana-ima, apisaíma, ara-ima, kiinha-ima, payaíma, sawa-ima, seraíma, tĩ-ima, ximirikú-ima</li>
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
          <li>ADV: yawé, Kutara, yawewara</li>
          <li>PART: intí, ti, aikwé, nẽ</li>
          <li>PRON: maã</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>CCONJ: u</li>
        </ul>
      </li>
      <li>DET
        <ul>
          <li>ADV: mayé</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>ADV: Maí</li>
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
          <li>PART: tẽ, tenhẽ, té, katú, ra</li>
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
          <li>PART: maã, imú, amú, emú</li>
        </ul>
      </li>
      <li>Proh
        <ul>
          <li>PART: te, tenhẽ, Teẽ</li>
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
          <li>ADP: sesé, suakí, sakakwera, sesewara, suaxara</li>
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
          <li>PART: tẽ, tenhẽ, té, katú, ra</li>
        </ul>
      </li>
      <li>Exs
        <ul>
          <li>PART: aikwé, Aikuré, aikwewara</li>
        </ul>
      </li>
      <li>Int
        <ul>
          <li>PART: taá, será, ta, taé, tu</li>
        </ul>
      </li>
      <li>Mod
        <ul>
          <li>PART: paá, pu, maã, supí, te, eré, tenhẽ, tenupá, tenki, ipú</li>
        </ul>
      </li>
      <li>Neg
        <ul>
          <li>PART: ti, intí, nẽ, nti, umbaá, intíu, inté</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PART: xukúi, Kusukúi, Masekúi</li>
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
          <li>ADP: sesé, suakí, sakakwera, sesewara, suaxara</li>
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
          <li>NOUN: suka, sera, ximirikú, taíra, ximiára, sesá, suaxara, sakakwera, sawa, sukwera</li>
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
          <li>ADJ: purapuranga, aíwa-aíwa, pixuna-pixuna</li>
          <li>DET: yawé-yawé</li>
          <li>NOUN: tapurú-tapurú</li>
          <li>PRON: yawé-yawé</li>
          <li>VERB-Fin: uyawiyawika, Akaá-kaá, Tasuú-suú, Utuká-tuká, aganaganari, atuká-tuká, ipukukapukuka, takaú-kaú, ukaúkaú, ukikiri</li>
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
          <li>NOUN: uka, tatá, ukara, tuixawa, tetama, timbiú, ukena, pé, teapú, tendawa</li>
        </ul>
      </li>
      <li>Cont
        <ul>
          <li>ADP: resé, resewara, ruakí, rakakwera, renundé, aresé, rakwera, ruaxara, renuné, rikuyara</li>
          <li>NOUN: ruka, raíra, ramunha, retama, rimirikú, rapé, rera, rupitá, rangawa, resá</li>
          <li>SCONJ: resewara</li>
          <li>VERB-Fin: rurí, resarái, raisú, rikwé, ranhẽ, rakú, rapí, rawa, renúi</li>
          <li>VERB-Inf: ripiaka</li>
        </ul>
      </li>
      <li>NCont
        <ul>
          <li>ADP: sesé, suakí, sakakwera, sesewara, suaxara</li>
          <li>NOUN: suka, sera, ximirikú, taíra, ximiára, sesá, suaxara, sakakwera, sawa, sukwera</li>
          <li>VERB-Fin: surí, sasí, tiapú, sakú, sikwé, setá, tipí, Ikupukú, sesaíma, sawa</li>
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
          <li>NOUN: suá, tuixawa, ukena, rangawa, Rapé, imirikú, ií, sakapira, sapiá, sera</li>
          <li>PRON: se, yané, ne, yandé, aé, maã, i, pe, ixé, aúna</li>
          <li>SCONJ: kurumu</li>
          <li>VERB-Fin: xasú, xarikú, xamunhã, xaputari, xaú, xakwáu, xanheẽ, xawasemu, xayuíri, raisú</li>
          <li>VERB-Inf: yumunhã, putari, rasú, yuká, munhã, nupá, watá, kutuka, kwáu, yakáu</li>
          <li>VERB-Vnoun: xarikusawa</li>
        </ul>
      </li>
      <li>Rare
        <ul>
          <li>ADP: renuné</li>
          <li>NOUN: Yukasara, teapú</li>
          <li>PRON: Se, ixé</li>
          <li>VERB-Fin: Ururi, upiama, Uxipiá, umunhã, upena-upena</li>
          <li>VERB-Inf: piamu, Xari, maramunhã, piama, puapuãmu</li>
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
          <li>ADJ: Iwatí, katú, menasara, puranga-itá, puriaisúa, suai, xapanema, xapuriaisúa</li>
          <li>ADP: rũ, aresé, pu, suí, aramé, iruma, pipé, rumu</li>
          <li>ADV: Maí, Mairamé, inte, Arareneíma, Mamé, Maramé, iramé, maãkití, mené, mumi</li>
          <li>AUX-Fin: urikú</li>
          <li>AUX-Inf: vutari</li>
          <li>CCONJ: yuri</li>
          <li>DET: muyepé, Maã, amu, paiu, riya</li>
          <li>NOUN: kaxiwer, kunhã, kunhãbukú, mirikú, rupirunawa, uka, Mukura, Sumura-etá, Tapayuma, ara</li>
          <li>NUM: Yepé, muyepé</li>
          <li>PART: Aé, Ti, p, Aikuré, Intí, Masekúi, inté, maã, saĩ, tu</li>
          <li>PRON: maã, i, Nhaã, U, intá, intí, n, se, su</li>
          <li>SCONJ: Sa</li>
          <li>VERB-Fin: ipiama, Humbú, Pempisasúa, Xamuarpakwári, Xapetika, Xenheẽ, Yapituú, a, akanhemu, imaasí</li>
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
<li>This corpus uses 8 lemmas as auxiliaries (<a>aux</a>). Examples: sú, ikú, putari, kwáu, puderi, kari, kwá, yuíri.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (922)</li>
      <li>VERB-Fin--PRON (227)</li>
      <li>VERB-Fin--PRON-Acc,Nom (571)</li>
      <li>VERB-Fin--PRON-Gen (96)</li>
      <li>VERB-Inf--NOUN (40)</li>
      <li>VERB-Inf--PRON (4)</li>
      <li>VERB-Inf--PRON-Acc,Nom (15)</li>
      <li>VERB-Vnoun--NOUN (1)</li>
      <li>VERB-Vnoun--PRON (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (1057)</li>
      <li>VERB-Fin--NOUN-ADP(resé) (3)</li>
      <li>VERB-Fin--PRON (212)</li>
      <li>VERB-Fin--PRON-ADP(irũ) (1)</li>
      <li>VERB-Fin--PRON-Acc,Nom (225)</li>
      <li>VERB-Fin--PRON-Gen (8)</li>
      <li>VERB-Fin--PRON-Gen-ADP(irumu) (1)</li>
      <li>VERB-Inf--NOUN (8)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc,Nom (4)</li>
      <li>VERB-Inf--PRON-Gen (25)</li>
      <li>VERB-Vnoun--PRON (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (2)</li>
      <li>VERB-Fin--NOUN-ADP(resé) (1)</li>
      <li>VERB-Fin--NOUN-ADP(rã) (1)</li>
      <li>VERB-Fin--NOUN-ADP(supé) (43)</li>
      <li>VERB-Fin--NOUN-ADP(supé)-ADP(arama) (1)</li>
      <li>VERB-Fin--NOUN-ADP(xupé) (6)</li>
      <li>VERB-Fin--NOUN-ADP(xupé)-ADP(arama) (2)</li>
      <li>VERB-Fin--PRON (3)</li>
      <li>VERB-Fin--PRON-ADP(supé) (1)</li>
      <li>VERB-Fin--PRON-ADP(supé)-ADP(arama) (1)</li>
      <li>VERB-Fin--PRON-Acc,Nom (11)</li>
      <li>VERB-Fin--PRON-Acc,Nom-ADP(arama) (27)</li>
      <li>VERB-Fin--PRON-Acc,Nom-ADP(arã) (18)</li>
      <li>VERB-Fin--PRON-Dat (25)</li>
      <li>VERB-Fin--PRON-Gen-ADP(arama) (2)</li>
      <li>VERB-Fin--PRON-Gen-ADP(supé) (17)</li>
      <li>VERB-Fin--PRON-Gen-ADP(xupé) (48)</li>
      <li>VERB-Fin--PRON-Gen-ADP(xupé)-ADP(arã) (2)</li>
      <li>VERB-Inf--PRON-Acc,Nom-ADP(supé) (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 3 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>nmod:poss</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a></li>
</ul>
