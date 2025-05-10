---
layout: base
title:  'UD_Czech-PDTC'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Czech PDTC

Language: [Czech](/cs/index.html) (code: `cs`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v1.0 release.

The following people have contributed to making this treebank part of UD: Daniel Zeman, Jan Hajič, Alevtina Bémová, Eva Buráňová, Eva Hajičová, Jiří Havelka, Jaroslava Hlaváčová, Jiří Kárník, Veronika Kolářová, Lucie Kučová, Markéta Lopatková, Marie Mikulová, Jiří Mírovský, Anna Nedoluzhko, Michal Novák, Petr Pajas, Jarmila Panevová, Petr Sgall, Milan Straka, Magda Ševčíková, Jan Štěpánek, Barbora Štěpánková, Zdeňka Urešová, Barbora Vidová Hladká, Zdeněk Žabokrtský.

Repository: [UD_Czech-PDTC](https://github.com/UniversalDependencies/UD_Czech-PDTC)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udcs_pdtc216)<br />
Download all treebanks: [UD 2.16](/#download)

License: CC BY-NC-SA 4.0

Genre: news, reviews, nonfiction, academic, spoken, social

Questions, comments?
General annotation questions (either Czech-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Czech-PDTC/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

The Czech-PDTC UD treebank is based on the Prague Dependency Treebank – Consolidated
(PDT-C) 2.0, created at the Charles University in Prague.




[PDT-C](https://ufal.mff.cuni.cz/pdt-c)
is a collection of four treebanks that were previously released independently
and that are now enhanced with further manual linguistic annotation:

* **PDT:** The original [Prague Dependency Treebank](https://ufal.mff.cuni.cz/pdt3.5),
based on texts from daily newspapers, a business weekly, and a popular science magazine, all from 1990s.
* **PCEDT:** The Czech part of the [Prague Czech-English Dependency Treebank](https://ufal.mff.cuni.cz/pcedt2.0/).
The texts are Czech translations of the Wall Street Journal data in the Penn Treebank.
* **PDTSC:** [Prague Dependency Treebank of Spoken Czech](https://ufal.mff.cuni.cz/pdtsc2.0).
It contains transcriptions of spontaneous dialogs from the Malach and Companions projects.
* **Faust:** A small dataset prepared for the [Faust](https://ufal.mff.cuni.cz/grants/faust) project.
It contains user-generated Czech translations of English sentences, created during testing a machine
translation system.

The treebank consists of 3.4 M tokens. It is licensed under the terms of
[CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/)
and its original (non-UD) version can be downloaded from
[http://hdl.handle.net/11234/1-5813](http://hdl.handle.net/11234/1-5813).

The morphological and syntactic annotation of the Czech UD treebank is created
through a conversion of PDT-C data. The conversion procedure has been designed by
Daniel Zeman and implemented in Treex.


## Acknowledgments

We wish to thank all of the contributors to the original PDT-C annotation effort,
including Jan Hajič, Eduard Bejček, Alevtina Bémová, Eva Buráňová, Eva Fučíková,
Eva Hajičová, Jiří Havelka, Jaroslava Hlaváčová, Petr Homola, Pavel Ircing, Jiří Kárník,
Václava Kettnerová, Natalia Klyueva, Veronika Kolářová, Lucie Kučová, Markéta Lopatková,
David Mareček, Marie Mikulová, Jiří Mírovský, Anna Nedoluzhko, Michal Novák, Petr Pajas,
Jarmila Panevová, Nino Peterek, Lucie Poláková, Martin Popel, Jan Popelka, Jan Romportl,
Magdaléna Rysová, Jiří Semecký, Petr Sgall, Johanka Spoustová, Milan Straka, Pavel Straňák,
Pavlína Synková, Magda Ševčíková, Jana Šindlerová, Jan Štěpánek, Barbora Štěpánková,
Josef Toman, Zdeňka Urešová, Barbora Vidová Hladká, Daniel Zeman, Šárka Zikánová,
Zdeněk Žabokrtský, and many other contributors (technical support, guidelines, annotators)
– they are listed in the [Credits](https://ufal.mff.cuni.cz/pdt-c/credits)
page of the project website.

## References

* Jan Hajič, Eduard Bejček, Jaroslava Hlaváčová, Marie Mikulová, Milan Straka,
Jan Štěpánek, and Barbora Štěpánková. 2020. Prague Dependency Treebank –
Consolidated 1.0.
In: Proceedings of the 12th Conference on Language Resources and Evaluation
(LREC 2020), Marseille, France, pp. 5208-5218.
https://aclanthology.org/2020.lrec-1.641.pdf
* Jan Hajič, Eduard Bejček, Alevtina Bémová, Eva Buráňová, Eva Fučíková,
Eva Hajičová, Jiří Havelka, Jaroslava Hlaváčová, Petr Homola, Pavel Ircing,
Jiří Kárník, Václava Kettnerová, Natalia Klyueva, Veronika Kolářová, Petr Pajas,
Jarmila Panevová, Nino Peterek, Lucie Poláková, Martin Popel, Jan Popelka,
Jan Romportl, Magdaléna Rysová, Jiří Semecký, Petr Sgall, Johanka Spoustová,
Milan Straka, Pavel Straňák, Pavlína Synková, Magda Ševčíková, Jana Šindlerová,
Jan Štěpánek, Barbora Štěpánková, Josef Toman, Zdeňka Urešová, Barbora Vidová Hladká,
Daniel Zeman, Šárka Zikánová, Zdeněk Žabokrtský. 2024.
Prague Dependency Treebank – Consolidated 2.0 (PDT-C 2.0).
Data/software, LINDAT/CLARIAH-CZ digital library, Praha, Czechia,
[http://hdl.handle.net/11234/1-5813](http://hdl.handle.net/11234/1-5813).



# Statistics of UD Czech PDTC

## POS Tags

[ADJ](cs_pdtc-pos-ADJ.html) – [ADP](cs_pdtc-pos-ADP.html) – [ADV](cs_pdtc-pos-ADV.html) – [AUX](cs_pdtc-pos-AUX.html) – [CCONJ](cs_pdtc-pos-CCONJ.html) – [DET](cs_pdtc-pos-DET.html) – [INTJ](cs_pdtc-pos-INTJ.html) – [NOUN](cs_pdtc-pos-NOUN.html) – [NUM](cs_pdtc-pos-NUM.html) – [PART](cs_pdtc-pos-PART.html) – [PRON](cs_pdtc-pos-PRON.html) – [PROPN](cs_pdtc-pos-PROPN.html) – [PUNCT](cs_pdtc-pos-PUNCT.html) – [SCONJ](cs_pdtc-pos-SCONJ.html) – [SYM](cs_pdtc-pos-SYM.html) – [VERB](cs_pdtc-pos-VERB.html) – [X](cs_pdtc-pos-X.html)

## Features

[Abbr](cs_pdtc-feat-Abbr.html) – [AdpType](cs_pdtc-feat-AdpType.html) – [Animacy](cs_pdtc-feat-Animacy.html) – [Aspect](cs_pdtc-feat-Aspect.html) – [Case](cs_pdtc-feat-Case.html) – [ConjType](cs_pdtc-feat-ConjType.html) – [Degree](cs_pdtc-feat-Degree.html) – [ExtPos](cs_pdtc-feat-ExtPos.html) – [Foreign](cs_pdtc-feat-Foreign.html) – [Gender](cs_pdtc-feat-Gender.html) – [Gender[psor]](cs_pdtc-feat-Gender-psor.html) – [Hyph](cs_pdtc-feat-Hyph.html) – [Mood](cs_pdtc-feat-Mood.html) – [NameType](cs_pdtc-feat-NameType.html) – [Number](cs_pdtc-feat-Number.html) – [Number[psor]](cs_pdtc-feat-Number-psor.html) – [NumForm](cs_pdtc-feat-NumForm.html) – [NumType](cs_pdtc-feat-NumType.html) – [Person](cs_pdtc-feat-Person.html) – [Polarity](cs_pdtc-feat-Polarity.html) – [Poss](cs_pdtc-feat-Poss.html) – [PrepCase](cs_pdtc-feat-PrepCase.html) – [PronType](cs_pdtc-feat-PronType.html) – [Reflex](cs_pdtc-feat-Reflex.html) – [Style](cs_pdtc-feat-Style.html) – [Tense](cs_pdtc-feat-Tense.html) – [Typo](cs_pdtc-feat-Typo.html) – [Variant](cs_pdtc-feat-Variant.html) – [VerbForm](cs_pdtc-feat-VerbForm.html) – [Voice](cs_pdtc-feat-Voice.html)

## Relations

[acl](cs_pdtc-dep-acl.html) – [acl:relcl](cs_pdtc-dep-acl-relcl.html) – [advcl](cs_pdtc-dep-advcl.html) – [advmod](cs_pdtc-dep-advmod.html) – [advmod:emph](cs_pdtc-dep-advmod-emph.html) – [amod](cs_pdtc-dep-amod.html) – [appos](cs_pdtc-dep-appos.html) – [aux](cs_pdtc-dep-aux.html) – [aux:pass](cs_pdtc-dep-aux-pass.html) – [case](cs_pdtc-dep-case.html) – [cc](cs_pdtc-dep-cc.html) – [ccomp](cs_pdtc-dep-ccomp.html) – [compound](cs_pdtc-dep-compound.html) – [conj](cs_pdtc-dep-conj.html) – [cop](cs_pdtc-dep-cop.html) – [csubj](cs_pdtc-dep-csubj.html) – [csubj:pass](cs_pdtc-dep-csubj-pass.html) – [dep](cs_pdtc-dep-dep.html) – [det](cs_pdtc-dep-det.html) – [det:numgov](cs_pdtc-dep-det-numgov.html) – [det:nummod](cs_pdtc-dep-det-nummod.html) – [discourse](cs_pdtc-dep-discourse.html) – [expl:pass](cs_pdtc-dep-expl-pass.html) – [expl:pv](cs_pdtc-dep-expl-pv.html) – [fixed](cs_pdtc-dep-fixed.html) – [flat](cs_pdtc-dep-flat.html) – [iobj](cs_pdtc-dep-iobj.html) – [mark](cs_pdtc-dep-mark.html) – [nmod](cs_pdtc-dep-nmod.html) – [nsubj](cs_pdtc-dep-nsubj.html) – [nsubj:pass](cs_pdtc-dep-nsubj-pass.html) – [nummod](cs_pdtc-dep-nummod.html) – [nummod:gov](cs_pdtc-dep-nummod-gov.html) – [obj](cs_pdtc-dep-obj.html) – [obl](cs_pdtc-dep-obl.html) – [obl:arg](cs_pdtc-dep-obl-arg.html) – [orphan](cs_pdtc-dep-orphan.html) – [parataxis](cs_pdtc-dep-parataxis.html) – [punct](cs_pdtc-dep-punct.html) – [reparandum](cs_pdtc-dep-reparandum.html) – [root](cs_pdtc-dep-root.html) – [vocative](cs_pdtc-dep-vocative.html) – [xcomp](cs_pdtc-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 42853 sentences, 688642 tokens and 690239 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 80746 tokens (12%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus does not contain words that contain both letters and punctuation.</li>
</ul>

<ul>
<li>This corpus contains 1597 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 13 types of multi-word tokens. Examples: aby, kdyby, abychom, abych, kdybych, kdybychom, abyste, kdybyste, kdybys, ses, abys, pochopils, sis.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 127 word types tagged as particles (PART): Ještěže, Jistěť, Nashle, Ovšemže, Perfekt, Přesně, Vždyť, Zaplaťpánbůh, akorát, ale, alespoň, ani, ano, arciť, asi, aspoň, ať, až, ba, bezesporu, bohudík, bohužel, bůhví, cca, co, copak, dobře, doopravdy, fakt, hlavně, hned, i, jako, jakoby, jakože, jasně, jen, jenom, ještě, jistě, jistěže, již, jo, kdepak, kdoví, kdyžtak, klidně, koneckonců, konečně, kupodivu, kurva, li, možná, nakonec, naneštěstí, naopak, např, například, natož, nazdařbůh, naštěstí, ne, nechť, nejenže, nejspíš, nejspíše, nesporně, netto, nikoli, nikoliv, no, nuže, obzvláště, obzvlášť, opravdu, ovšem, patrně, pouze, prakticky, pravda, prostě, proto, právě, prý, přece, přeci, především, přímo, rovněž, rozhodně, samozřejmě, sbohem, sice, skutečně, snad, sotva, spíš, spíše, stejně, stěží, tak, taky, také, takříkajíc, teda, tedy, to, totiž, též, třeba, určitě, už, viďte, vlastně, však, vůbec, zas, zase, zejména, zjevně, zkrátka, zrovna, zvláště, zvlášť, zřejmě, Žel, že</li>
</ul>

<ul>
<li>This corpus contains 32 lemmas tagged as pronouns (PRON): co, cokoli, cokoliv, copak, cosi, což, cože, jenž, já, kdekdo, kdo, kdokoli, kdokoliv, kdopak, kdosi, kdož, lecco, leccos, ledacos, ledasco, my, málokdo, nic, nikdo, něco, někdo, on, se, ty, veškerý, vy, všecek</li>
</ul>

<ul>
<li>This corpus contains 61 lemmas tagged as determiners (DET): jaký, jakýkoli, jakýkoliv, jakýsi, jeho, jehož, každý, kdovíjaký, kerý, kolik, kolikátý, který, kterýkoli, kterýkoliv, kterýžto, lecjaký, leckterý, ledajaký, malinko, mnoho, málo, málokterý, móóc, můj, nemnoho, nemálo, ničí, náš, nějaký, někerý, několik, několikerý, některý, něčí, onen, pražádný, pár, samý, svůj, tadyhleten, tadyten, takový, takovýhle, takovýto, taký, tamten, ten, tenhle, tenhleten, tento, tentýž, to, tolik, tuhleten, tvůj, týž, váš, všechen, všelijaký, čí, žádný</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as auxiliaries (AUX): být, bývat, bývávat</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: jsa, jsouce</li>
    <li>VERB: nemluvě, vlastně, říkajíc, Soudě, nepočítaje, řka, Narážejíc, Prolamujíc, Připomínajíce, Snažíc</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: je, by, jsme, jsem, jsou, bude, není, jste, budou, bych</li>
    <li>VERB: má, říká, může, mají, musí, mám, myslím, jde, mohou, máme</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: být, býti, nebýt</li>
    <li>VERB: mít, vidět, říct, získat, dělat, hrát, stát, jít, pokračovat, podívat</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: spojených, vedoucí, spojené, týkající, řečeno, vyfocené, zabývající, následující, rostoucí, jmenován</li>
    <li>AUX: byl, bylo, byla, byly, byli, nebyl, nebylo, nebyla, nebyly, nebyli</li>
    <li>VERB: řekl, měl, měli, měla, uvedla, uvedl, mohl, oznámila, mělo, měly</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: obchodování, jednání, rozhodnutí, zvýšení, vedení, opatření, zařízení, snížení, převzetí, řízení</li>
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
      <li>ADJ: další, první, české, nové, druhé, poslední, velké, newyorské, státní, národní</li>
      <li>ADJ-Part: týkající, rostoucí, vedoucí, zabývající, určené, uvedené, ozbrojených, následující, sídlící, vedená</li>
      <li>DET: která, které, této, té, své, tato, svou, kterou, ta, tuto</li>
      <li>NOUN: společnosti, společnost, firmy, akcií, akcie, ceny, firma, době, společností, fotce</li>
      <li>NUM: miliardy, miliard, jedna, jedné, jednu, jednou, mld, miliardu, jedny, miliardami</li>
      <li>PRON: ji, ní, jí, níž, ni, jež, ona, veškeré, niž, jíž</li>
      <li>PROPN: Praha, Praze, Prahy, Evropě, Plzni, Evropy, Francie, Ostrava, Kalifornii, Francii</li>
      <li>VERB-Conv: Narážejíc, Prolamujíc, Snažíc, rozšiřujíc</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>ADJ: zveřejněny, oceněny, považovány, uvedeny, prodány, připraveny, vydány, obchodovány, určeny, nabízeny</li>
      <li>ADJ-Part: zveřejněny, oceněny, považovány, uvedeny, prodány, připraveny, vydány, obchodovány, určeny, nabízeny</li>
      <li>AUX-Part: byly, nebyly, bývaly, bývávaly, nebývaly</li>
      <li>VERB-Part: měly, mohly, klesly, vzrostly, začaly, stouply, dosáhly, uzavřely, poklesly, spadly</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Neut
    <ul>
      <li>ADJ: ráda, připravena, schopna, uzavřena, založena, přesvědčena, uvedena, otevřena, určena, dokončena</li>
      <li>ADJ-Part: připravena, uzavřena, založena, přesvědčena, uvedena, otevřena, určena, dokončena, prodána, stanovena</li>
      <li>AUX-Part: byla, nebyla, bývala, bývávala, nebývala</li>
      <li>DET: moje, naše, vaše</li>
      <li>NUM: dvě, obě</li>
      <li>VERB-Part: měla, uvedla, oznámila, mohla, řekla, začala, získala, dostala, šla, musela</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: cenných, další, první, nový, minulý, rád, celý, velký, druhý, spojených</li>
      <li>ADJ-Part: spojených, spojené, vedoucí, jmenován, týkající, přesvědčen, zabývající, připraven, ležící, odsouzeného</li>
      <li>AUX-Conv: jsa</li>
      <li>AUX-Part: byl, byli, nebyl, nebyli, bývali, býval</li>
      <li>DET: který, kteří, tento, které, ten, svůj, můj, každý, všichni, někteří</li>
      <li>NOUN: dolarů, roce, roku, trhu, rok, pan, trh, lidí, papírů, den</li>
      <li>NUM: milionů, dva, jeden, milionu, tisíc, miliónů, oba, miliónu, mil, miliony</li>
      <li>PRON: on, oni, jenž, veškeré, jež, veškerý, jehož, jeho</li>
      <li>PROPN: Yorku, John, Jiří, Dow, Jan, Václav, Josef, Petr, Vladimír, Klaus</li>
      <li>SYM: °</li>
      <li>VERB-Conv: nemluvě, vlastně, Soudě, nepočítaje, řka, konče, maje, narážeje, nevyjímaje, počínaje</li>
      <li>VERB-Part: řekl, měl, měli, uvedl, mohl, mohli, dělal, začal, prohlásil, chtěl</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>DET: tím, tom, toho, tomu, tohoto, tomto, svého, její, svém, svým</li>
      <li>NUM: jednoho, jedním, jednom, jednomu, nejednomu</li>
      <li>PRON: ho, mu, něj, něm, jej, ním, němž, něho, jehož, něhož</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: možné, zajímavé, pěkné, další, posledních, první, třetí, dobré, hezké, prvním</li>
      <li>ADJ-Part: řečeno, vyfocené, uvedeno, dosaženo, rozhodnuto, končící, oznámeno, zahájeno, prodáno, zastaveno</li>
      <li>AUX-Part: bylo, nebylo, bývalo, nebývalo, bývávalo</li>
      <li>DET: to, všechno, které, toto, tohle, své, vše, která, takové, tato</li>
      <li>NOUN: let, obchodování, letech, čtvrtletí, září, jednání, období, procent, rozhodnutí, ministerstvo</li>
      <li>NOUN-Vnoun: obchodování, jednání, rozhodnutí, zvýšení, vedení, opatření, zařízení, snížení, převzetí, řízení</li>
      <li>NUM: jedno, sto, set, sta, stě, desatero, stu, sty</li>
      <li>PRON: je, jež, všecko, ono, veškerá, veškeré, něž, ně</li>
      <li>PROPN: Německu, Brně, Německo, Německa, Rusko, Brno, Slovensku, Japonsko, Japonsku, Slovensko</li>
      <li>VERB-Conv: říkajíc</li>
      <li>VERB-Part: mělo, mohlo, došlo, podařilo, stalo, šlo, líbilo, začalo, dalo, nepodařilo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>ADJ: další, rádi, bývalý, hlavní, mnozí, starší, výkonný, první, ostatní, vedoucí</li>
      <li>ADJ-Part: vedoucí, přesvědčeni, zabývající, nuceni, vedoucích, připraveni, vedoucím, vyučený, narozený, vedoucího</li>
      <li>AUX-Part: byli, nebyli, bývali</li>
      <li>DET: kteří, všichni, někteří, ti, každý, sami, svého, každého, naši, kterého</li>
      <li>NOUN: pan, lidí, prezident, ředitel, předseda, lidé, člověk, mluvčí, ministr, syn</li>
      <li>NUM: jednoho, jedni</li>
      <li>PRON: kdo, nikdo, někdo, oni, někoho, koho, nikoho, komu, nikomu, kým</li>
      <li>PROPN: John, Jiří, Dow, Jan, Václav, Josef, Petr, Vladimír, Klaus, Němci</li>
      <li>VERB-Part: měli, mohli, museli, bydleli, řekli, začali, jezdili, chodili, neměli, chtěli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>ADJ: cenných, další, minulý, první, nový, celý, velký, spojených, čistý, dobrý</li>
      <li>ADJ-Part: spojených, spojené, týkající, zveřejněny, ležící, oceněny, následujících, odsouzeného, následující, spojenými</li>
      <li>AUX-Part: byly, nebyly, bývaly, bývávaly, nebývaly</li>
      <li>DET: které, svůj, tento, který, tyto, každý, ty, ten, nějaký, takové</li>
      <li>NOUN: dolarů, roce, roku, trhu, rok, trh, papírů, den, dolaru, zákona</li>
      <li>NUM: milionů, milionu, tisíc, miliónů, jeden, miliónu, mil, miliony, tisíce, milióny</li>
      <li>PRON: co, něco, čím, čem, čeho, cokoli, něčem, čemu, něčeho, cosi</li>
      <li>PROPN: Yorku, Washingtonu, Londýně, Quantum, Bruselu, Washington, Apple, Time, Chrástu, Houstonu</li>
      <li>SYM: °</li>
      <li>VERB-Part: měly, mohly, klesly, vzrostly, začaly, stouply, dosáhly, uzavřely, poklesly, spadly</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>ADJ: holýma, prázdnýma, zavázanýma, českýma</li>
      <li>ADJ-Part: zavázanýma</li>
      <li>DET: jejíma, mýma, svýma, těma</li>
      <li>NOUN: očima, rukama, nohama, ušima</li>
      <li>NUM: dvěma, čtyřma, dvěmi, oběma</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: další, cenných, dalších, nové, posledních, amerických, velké, jiných, nových, jiné</li>
      <li>ADJ-Part: spojených, spojené, týkající, vedoucí, následujících, následující, zveřejněny, ozbrojených, oceněny, vedoucích</li>
      <li>AUX-Conv: jsouce</li>
      <li>AUX-Fin: jsme, jsou, jste, budou, bychom, nejsou, budeme, byste, nebudou, budete</li>
      <li>AUX-Part: byly, byli, nebyly, nebyli, bývali, bývaly, bývávaly, nebývaly</li>
      <li>DET: které, kteří, tyto, svých, své, všechny, těchto, všech, ty, všichni</li>
      <li>NOUN: dolarů, let, akcií, akcie, ceny, letech, korun, lidí, papírů, děti</li>
      <li>NOUN-Vnoun: opatření, jednání, zařízení, jednáních, tvrzení, omezení, rozhodnutí, převzetí, onemocnění, obvinění</li>
      <li>NUM: milionů, dva, tři, dvě, čtyři, dvou, miliard, miliónů, oba, dvěma</li>
      <li>PRON: nás, nám, je, vám, jim, nich, my, vás, nichž, nimi</li>
      <li>PROPN: Němci, Čechách, Vánoce, Američané, Čech, Němců, Budějovicích, Vítkovice, Čechy, Češi</li>
      <li>SYM: °</li>
      <li>VERB-Conv: Připomínajíce, následujíce, poskytujíce, přikládajíce, reagujíce, uvádějíce</li>
      <li>VERB-Fin: mají, mohou, máme, máte, podíváme, říkají, nemají, vidíme, chtějí, můžeme</li>
      <li>VERB-Part: měli, měly, mohli, mohly, museli, bydleli, řekli, klesly, začali, jezdili</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur,Sing
    <ul>
      <li>ADJ: ráda, připravena, schopna, uzavřena, založena, přesvědčena, uvedena, otevřena, určena, dokončena</li>
      <li>ADJ-Part: připravena, uzavřena, založena, přesvědčena, uvedena, otevřena, určena, dokončena, prodána, stanovena</li>
      <li>AUX-Part: byla, nebyla, bývala, bývávala, nebývala</li>
      <li>VERB-Part: měla, uvedla, oznámila, mohla, řekla, začala, získala, dostala, šla, musela</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: první, další, poslední, české, druhé, státní, nové, hlavní, možné, národní</li>
      <li>ADJ-Part: vedoucí, řečeno, vyfocené, jmenován, zabývající, týkající, rozhodující, končící, přesvědčen, určené</li>
      <li>AUX-Conv: jsa</li>
      <li>AUX-Fin: je, jsem, bude, není, bych, nebude, budu, buď, bývá, jsi</li>
      <li>AUX-Part: byl, bylo, nebyl, nebylo, bývalo, býval, nebývalo, bývávalo</li>
      <li>DET: to, který, která, tím, toho, této, tom, tento, tomu, které</li>
      <li>NOUN: společnosti, společnost, roce, roku, trhu, firmy, rok, pan, obchodování, firma</li>
      <li>NOUN-Vnoun: obchodování, jednání, zvýšení, vedení, rozhodnutí, snížení, řízení, řešení, převzetí, financování</li>
      <li>NUM: jeden, milionu, miliardy, pět, jednoho, jedna, jedné, jednu, šest, deset</li>
      <li>PRON: mi, mě, já, ho, ji, mu, ní, jí, mně, něj</li>
      <li>PROPN: Praha, Praze, Yorku, John, Prahy, Evropě, Jiří, Plzni, Německu, Jan</li>
      <li>VERB-Conv: nemluvě, vlastně, říkajíc, Soudě, nepočítaje, řka, Narážejíc, Prolamujíc, Snažíc, konče</li>
      <li>VERB-Fin: má, říká, může, mám, myslím, musí, jde, nevím, lze, chce</li>
      <li>VERB-Part: řekl, měl, uvedl, mohl, mělo, mohlo, dělal, začal, prohlásil, došlo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: další, první, minulý, vlastní, nové, jiné, celý, větší, celou, poslední</li>
      <li>ADJ-Part: týkající, vedoucí, následující, spojené, končící, rozhodující, rostoucí, odpovídající, určené, otevřené</li>
      <li>ADP: na, za, pro, o, v, přes, ve, po, mimo, mezi</li>
      <li>DET: to, které, své, svůj, svou, kterou, tento, který, tuto, všechny</li>
      <li>NOUN: rok, akcii, den, týden, akcie, pátek, trh, roky, fotku, cenu</li>
      <li>NOUN-Vnoun: obchodování, převzetí, rozhodnutí, zvýšení, jednání, opatření, financování, řešení, prohlášení, snížení</li>
      <li>NUM: tři, dva, dvě, čtyři, jednu, pět, jeden, šest, deset, osm</li>
      <li>PRON: se, co, je, mě, ho, ji, něco, nás, nic, vás</li>
      <li>PROPN: Slovensko, Vánoce, Prahu, Německo, Evropu, Moravu, Šumavu, Plzeň, Japonsko, Jiřího</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: jiným, další, ostatním, dalším, zahraničním, dalšímu, loňskému, americkým, české, nové</li>
      <li>ADJ-Part: příslušným, vedoucím, ležícím, pokračující, rozvinutým, spojeným, uvedeným, zabývajícím, řízenému, danému</li>
      <li>ADP: k, proti, ke, kvůli, oproti, díky, vůči, navzdory, naproti, ku</li>
      <li>DET: tomu, svým, tomuto, této, všem, svému, té, těm, své, kterému</li>
      <li>NOUN: společnosti, dispozici, fotce, lidem, firmě, dětem, vládě, prodeji, investorům, roku</li>
      <li>NOUN-Vnoun: zvýšení, snížení, obchodování, rozhodnutí, omezení, vidění, převzetí, posouzení, zlepšení, zrušení</li>
      <li>NUM: dvěma, jedné, oběma, milionům, třem, pěti, jednomu, čtyřem, deseti, milionu</li>
      <li>PRON: si, mi, nám, mu, vám, jim, jí, mně, sobě, nim</li>
      <li>PROPN: Německu, Evropě, Polsku, Slovensku, Brnu, Němcům, Pavlu, Yearginové, Glassmannovi, Hitlerovi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: cenných, dalších, české, českého, amerických, nových, nového, velkých, nové, národního</li>
      <li>ADJ-Part: spojených, odsouzeného, obchodovaných, vedoucích, vybraných, zbývajících, ozbrojených, uvedených, spuštěné, zabývající</li>
      <li>ADP: z, do, od, podle, u, ze, bez, během, kolem, za</li>
      <li>DET: toho, tohoto, svých, této, těchto, svého, všech, své, té, některých</li>
      <li>NOUN: dolarů, společnosti, roku, let, akcií, firmy, korun, lidí, papírů, trhu</li>
      <li>NOUN-Vnoun: obchodování, zařízení, jednání, řízení, oddělení, sdružení, vedení, umění, opatření, tvrzení</li>
      <li>NUM: milionů, milionu, miliardy, miliard, miliónů, dvou, jednoho, tří, jedné, miliónu</li>
      <li>PRON: nás, nich, jich, něj, nichž, ní, jehož, něho, mě, vás</li>
      <li>PROPN: Prahy, Evropy, Německa, Plzně, Jana, Králové, Slovenska, Ruska, Japonska, Československa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: hlavním, cennými, dalším, jinými, dalšími, velkým, velkou, jiným, největším, jediným</li>
      <li>ADJ-Part: spojenými, očekávaným, vedoucím, určenou, vedoucími, omezeným, otevřenými, rostoucím, rozhodujícím, stanovenými</li>
      <li>ADP: s, se, před, mezi, nad, pod, za, počínaje, n, přede</li>
      <li>DET: tím, svým, tímto, svými, svou, těmi, těmito, kterým, jakým, kterými</li>
      <li>NOUN: společností, lety, způsobem, rokem, sídlem, cílem, papíry, přímkou, součástí, ředitelem</li>
      <li>NOUN-Vnoun: obchodováním, vedením, zdaněním, rozhodnutím, snížením, zvýšením, tvrzením, řešením, vydáním, zpožděním</li>
      <li>NUM: dvěma, jedním, jednou, třemi, oběma, miliony, pěti, čtyřmi, deseti, miliardami</li>
      <li>PRON: nimi, vámi, ním, sebou, čím, námi, mnou, ní, čímž, jím</li>
      <li>PROPN: Labem, Německem, Slovenskem, Polskem, Němci, Izraelem, Ruskem, Bushem, Rakouskem, Československem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: druhé, současné, posledních, prvním, první, newyorské, třetím, poslední, spojených, celé</li>
      <li>ADJ-Part: spojených, následujících, daném, dané, určené, končícím, nadcházejících, vyrovnaném, následujícím, spojeném</li>
      <li>ADP: v, na, ve, o, po, při</li>
      <li>DET: tom, této, tomto, té, svém, své, kterém, svých, těchto, téhle</li>
      <li>NOUN: roce, době, letech, fotce, trhu, výši, případě, burze, hodnotě, oblasti</li>
      <li>NOUN-Vnoun: obchodování, srovnání, porovnání, jednání, utkání, zasedání, prohlášení, setkání, skončení, uzavření</li>
      <li>NUM: dvou, jednom, jedné, obou, třech, šesti, pěti, čtyřech, devíti, osmi</li>
      <li>PRON: něm, ní, němž, níž, sobě, nich, nichž, čem, mně, nás</li>
      <li>PROPN: Praze, Yorku, Evropě, Plzni, Německu, Brně, Kalifornii, Francii, Washingtonu, Japonsku</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: další, první, možné, hlavní, česká, poslední, státní, nová, nový, nové</li>
      <li>ADJ-Part: spojené, vedoucí, vyfocené, zabývající, ležící, rostoucí, týkající, vedená, následující, uvedené</li>
      <li>ADP: versus, kontra, ad, v, vs</li>
      <li>DET: to, který, které, která, kteří, tato, tento, ten, ta, můj</li>
      <li>NOUN: společnost, pan, firma, akcie, vláda, ceny, prezident, ředitel, předseda, trh</li>
      <li>NOUN-Vnoun: obchodování, jednání, vedení, opatření, rozhodnutí, zvýšení, snížení, sdružení, řešení, omezení</li>
      <li>NUM: jeden, dva, jedna, oba, tři, dvě, čtyři, pět, obě, šest</li>
      <li>PRON: co, já, což, kdo, my, nikdo, někdo, on, něco, nic</li>
      <li>PROPN: Praha, John, Jiří, Jan, Václav, Josef, Petr, Vladimír, Klaus, Pavel</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: Vážená, vážení, Vážený, drahá, rudá, Laskavý, Milá, dánští, mikrovlnný, neznámá</li>
      <li>ADJ-Part: Vážená, vážení, Vážený, vzdálená</li>
      <li>DET: můj, Má</li>
      <li>NOUN: pane, čtenáři, Kluci, Soudruhu, doktore, krávo, paní, příteli, holky, maminko</li>
      <li>NUM: milióny</li>
      <li>PRON: ty, vy</li>
      <li>PROPN: Basile, Lhalo, Nilame, Roberte, Baryku, Danečku, Johne, Járo, Kriste, Nitsche</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PrepCase</a></li>
</ul>

<ul>
  <li>Npr
    <ul>
      <li>PRON: je, ji, jim, jí, jich, jej, jehož, jím, jimž, jemuž</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pre
    <ul>
      <li>PRON: nich, ní, něj, nichž, nimi, níž, něm, ním, němž, ně</li>
    </ul>
  </li>
</ul>


<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: větší, vyšší, starší, nižší, menší, lepší, mladší, delší, horší, větších</li>
      <li>ADJ-Part: otevřenější, sofistikovanější, omezenější, ucelenější, umírněnější, adaptovanější, decentralizovanější, exponovanějšího, komplikovanější, koncentrovanější</li>
      <li>ADV: více, méně, víc, později, dříve, lépe, dřív, níže, výše, dál</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: další, nové, poslední, české, cenných, velké, hlavní, státní, vlastní, dalších</li>
      <li>ADJ-Part: spojených, spojené, řečeno, vyfocené, jmenován, určené, připravena, uvedené, přesvědčen, dané</li>
      <li>ADV: stále, často, dobře, stejně, dost, dlouho, doma, rychle, přibližně, přesně</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: největší, nejlepší, nejvyšší, největších, nejmladší, největším, nejnovější, nejstarší, nejhorší, nejnižší</li>
      <li>ADJ-Part: nejprodávanějších, Nejprodávanějšími, nejobchodovanějších, nejotevřenější, nejprodávanější, nejprodávanějším, nejrozšířenější, nejvyhledávanějším, Nejobchodovanějšími, nejdiskutovanější</li>
      <li>ADV: nejvíce, nejméně, nejvíc, nejlépe, nejdříve, nejdřív, nejraději, nejdéle, nejčastěji, nejrychleji</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ: nedávné, nezbytné, nebezpečné, nezávislých, neautorizovaný, necelých, nekvalitních, nerad, neobvyklé, nezávislé</li>
      <li>ADJ-Part: neautorizovaný, nesplacených, neočekávané, nepřiměřené, nezaměstnaných, Nedokončeného, nedokončený, neopodstatněné, neurčené, neutěšené</li>
      <li>ADV: nedávno, nezávisle, neúspěšně, nekonečně, neméně, neúměrně, nedostatečně, nepřímo, netrpělivě, nečekaně</li>
      <li>AUX-Fin: není, nejsou, nebude, nebudou, nejsem, nebudeme, nejsme, nebudu, nejste, nebudete</li>
      <li>AUX-Inf: nebýt</li>
      <li>AUX-Part: nebyl, nebylo, nebyla, nebyly, nebyli, nebývalo, nebývala, nebývaly</li>
      <li>VERB-Conv: nemluvě, nepočítaje, nevyjímaje</li>
      <li>VERB-Fin: nevím, nemá, nemůže, nemají, nelze, nemohou, nemám, nemusí, nedá, nejde</li>
      <li>VERB-Inf: nedat, nedbat, nerozšířit, nevidět, nevyužít, NEKOJIT, Nebát, Nenechat, Neotravovat, Nepřehrávat</li>
      <li>VERB-Part: neměli, neměl, nemohl, nemohli, neměla, nepodařilo, nemohla, nešlo, neměly, nechtěl</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: další, nové, poslední, české, cenných, velké, hlavní, státní, vlastní, dalších</li>
      <li>ADJ-Part: spojených, vedoucí, spojené, týkající, řečeno, vyfocené, zabývající, následující, rostoucí, jmenován</li>
      <li>ADV: více, stále, často, dobře, méně, stejně, dost, víc, dlouho, doma</li>
      <li>AUX-Conv: jsa, jsouce</li>
      <li>AUX-Fin: je, jsme, jsem, jsou, bude, jste, budou, budeme, budu, buď</li>
      <li>AUX-Inf: být, býti</li>
      <li>AUX-Part: byl, bylo, byla, byly, byli, bývalo, bývala, bývali, býval, bývaly</li>
      <li>SYM: °</li>
      <li>VERB-Conv: vlastně, říkajíc, Soudě, řka, Narážejíc, Prolamujíc, Připomínajíce, Snažíc, konče, maje</li>
      <li>VERB-Fin: má, říká, může, mají, musí, mám, myslím, jde, mohou, máme</li>
      <li>VERB-Inf: mít, vidět, říct, získat, dělat, hrát, stát, jít, pokračovat, podívat</li>
      <li>VERB-Part: řekl, měl, měli, měla, uvedla, uvedl, mohl, oznámila, mělo, měly</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>ADJ: rád, ráda, rádi, řečeno, jmenován, možno, připravena, schopni, schopen, nutno</li>
      <li>ADJ-Part: řečeno, jmenován, připravena, přesvědčen, zveřejněny, připraven, oceněny, uvedeno, zvolen, uzavřena</li>
      <li>DET: sám, sama, sami, samy, samo, samu</li>
      <li>PRON: se, si, mi, mě, ho, mu, tě, ti</li>
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
      <li>ADJ-Part: vedoucí, týkající, zabývající, následující, rostoucí, rozhodující, následujících, končící, ležící, pokračující</li>
      <li>AUX-Conv: jsa, jsouce</li>
      <li>AUX-Fin: je, by, jsme, jsem, jsou, bude, není, jste, budou, bych</li>
      <li>AUX-Inf: být, býti, nebýt</li>
      <li>AUX-Part: byl, bylo, byla, byly, byli, nebyl, nebylo, nebyla, nebyly, nebyli</li>
      <li>VERB-Conv: nemluvě, vlastně, říkajíc, Soudě, nepočítaje, Narážejíc, Prolamujíc, Připomínajíce, Snažíc, konče</li>
      <li>VERB-Fin: má, říká, může, mají, musí, mám, myslím, jde, mohou, máme</li>
      <li>VERB-Inf: mít, vidět, dělat, hrát, jít, pokračovat, chodit, muset, vést, platit</li>
      <li>VERB-Part: měl, měli, měla, mohl, mělo, měly, mohla, mohli, mohlo, dělal</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp,Perf
    <ul>
      <li>ADJ-Part: jmenován, věnována, definovány, informováni, jmenováni, orientovány, publikováno, věnováno, aktualizována, informován</li>
      <li>VERB-Conv: reagujíce</li>
      <li>VERB-Fin: jmenuje, jmenuji, jmenují, praví, informuje, reprezentují, specializuje, věnuje, organizuje, investuje</li>
      <li>VERB-Inf: věnovat, investovat, komentovat, jmenovat, reagovat, realizovat, definovat, akceptovat, prezentovat, riskovat</li>
      <li>VERB-Part: jmenovala, informoval, jmenoval, konstatoval, věnoval, jmenovalo, reagoval, absolvoval, rezignoval, absolvovali</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>ADJ-Part: řečeno, připravena, přesvědčen, zveřejněny, připraven, oceněny, uvedeno, zvolen, uzavřena, přesvědčeni</li>
      <li>VERB-Conv: řka</li>
      <li>VERB-Fin: podíváme, dá, přijde, stane, zůstane, dostane, dojde, nedá, viz, začne</li>
      <li>VERB-Inf: říct, získat, podívat, prodat, stát, udělat, dostat, dát, dosáhnout, pomoci</li>
      <li>VERB-Part: řekl, uvedla, uvedl, oznámila, řekla, začal, prohlásil, došlo, dostal, přišel</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: by, bych, bychom, byste, bys</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: buď, buďte, budiž, Nebuďte</li>
      <li>VERB-Fin: viz, Začněme, počkejte, řekněte, dejme, řekněme, Předpokládejme, podívejte, zaplať, Vezměme</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: je, jsme, jsem, jsou, bude, není, jste, budou, nejsou, nebude</li>
      <li>VERB-Fin: má, říká, může, mají, musí, mám, myslím, jde, mohou, máme</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: bude, budou, nebude, budeme, budu, nebudou, budete, nebudeme, nebudu, budeš</li>
      <li>VERB-Fin: půjde, půjdou, půjdeme, nepůjdu, pojedeme, pojedou, půjdu, nepůjde, pojede, pojedu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: přeživších, vyskytnuvší, zaniknuvšího, zešílevších</li>
      <li>AUX-Part: byl, bylo, byla, byly, byli, nebyl, nebylo, nebyla, nebyly, nebyli</li>
      <li>VERB-Part: řekl, měl, měli, měla, uvedla, uvedl, mohl, oznámila, mělo, měly</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: vedoucí, týkající, zabývající, následující, rostoucí, rozhodující, následujících, končící, ležící, pokračující</li>
      <li>AUX-Conv: jsa, jsouce</li>
      <li>AUX-Fin: je, jsme, jsem, jsou, není, jste, nejsou, bývá, jsi, nejsem</li>
      <li>VERB-Conv: nemluvě, vlastně, říkajíc, Soudě, nepočítaje, řka, Narážejíc, Prolamujíc, Připomínajíce, Snažíc</li>
      <li>VERB-Fin: má, říká, může, mají, musí, mám, myslím, jde, mohou, máme</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>ADJ-Part: vedoucí, týkající, zabývající, následující, rostoucí, rozhodující, následujících, končící, ležící, pokračující</li>
      <li>AUX-Conv: jsa, jsouce</li>
      <li>AUX-Fin: je, jsme, jsem, jsou, bude, není, jste, budou, nejsou, nebude</li>
      <li>AUX-Part: byl, bylo, byla, byly, byli, nebyl, nebylo, nebyla, nebyly, nebyli</li>
      <li>VERB-Conv: nemluvě, vlastně, říkajíc, Soudě, nepočítaje, řka, Narážejíc, Prolamujíc, Připomínajíce, Snažíc</li>
      <li>VERB-Fin: má, říká, může, mají, musí, mám, myslím, jde, mohou, máme</li>
      <li>VERB-Part: řekl, měl, měli, měla, uvedla, uvedl, mohl, oznámila, mělo, měly</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ-Part: spojených, spojené, řečeno, vyfocené, jmenován, určené, připravena, uvedené, přesvědčen, dané</li>
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
      <li>ADV: tam, tak, tady, nyní, teď, tehdy, zde, dosud, tu, proto</li>
      <li>DET: to, tím, toho, této, tom, tento, tomu, tato, té, tohoto</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem,Ind
    <ul>
      <li>ADV: párkrát, nejednou, nekonečněkrát</li>
      <li>DET: kolik, pár, kolika, kolikáté, kolikátého, malinko</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: sám, sama, sami, samé, samy, samo, samého, samí, samou, samá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: někdy, někde, nějak, kdysi, někam, několikrát, kdykoliv, kdykoli, jaksi, málokdy</li>
      <li>DET: několik, mnoho, nějaké, někteří, některé, několika, některých, nějaký, nějakou, mnoha</li>
      <li>PRON: něco, někdo, někoho, cokoli, leccos, něčem, něčeho, cosi, cokoliv, kdokoli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>ADV: jak, kde, kdy, proč, kam, odkud, kudy, kolikrát, odkdy</li>
      <li>DET: které, který, která, kteří, kterou, jaké, kterém, kterých, kterého, kterým</li>
      <li>PRON: co, což, kdo, čím, čímž, čem, koho, copak, komu, čeho</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: nikdy, nijak, nikam, nikde</li>
      <li>DET: žádné, žádný, žádnou, žádná, žádného, žádném, žádným, žádných, žádní, žádnému</li>
      <li>PRON: nic, nikdo, nikoho, nikomu, ničím, ničeho, ničem, nikým, ničemu, nikom</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: jeho, své, jejich, její, svou, svých, svého, svůj, můj, moje</li>
      <li>PRON: se, si, nás, mi, nám, je, mě, já, ho, ji</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: přičemž, zato</li>
      <li>DET: jejichž, jehož, jejíž, jejímž, jejíhož, jejímiž, jejímuž</li>
      <li>PRON: nichž, níž, jež, němž, jehož, jenž, něhož, jimž, jemuž, jimiž</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: vždy, všude, navždy, odjakživa, všudy, odevšad</li>
      <li>DET: všechno, všechny, všech, každý, všichni, vše, každého, každé, každou, každá</li>
      <li>PRON: veškeré, veškerá, všecko, veškerou, veškerých, veškerý, veškerého, všecky, veškerým</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>DET: několik, mnoho, několika, kolik, mnoha, tolik, málo, pár, mála, kolika</li>
      <li>NUM: 1, milionů, 2, dva, tři, 3, jeden, milionu, 8, 4</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>NUM: Nejeden, nejednomu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>ADJ: dvojí, obojí, dvojím, dvoje, dvojího, obojího, obojím, obého</li>
      <li>ADV: jednou, dvakrát, třikrát, několikrát, čtyřikrát, pětkrát, šestkrát, desetkrát, jedenkrát, kolikrát</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult,Sets
    <ul>
      <li>ADJ: čtvery, čtverým</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: první, druhé, třetí, prvním, druhý, třetím, druhou, prvních, prvního, druhá</li>
      <li>DET: kolikáté, kolikátého</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sets
    <ul>
      <li>DET: několikeré</li>
      <li>NUM: jedny, jedněch, jedni, jedněmi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: Jonesův, Karlovy, Jonesova, Bushova, Bushovy, Eukleidových, Nobelovy, Masarykově, manželův, prezidentův</li>
      <li>DET: jeho, své, jejich, její, svou, svých, svého, svůj, můj, moje</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: své, svou, svých, svého, svůj, svým, svém, svými, svoji, svoje</li>
      <li>PRON: se, si, sebe, sebou, sobě</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: jsme, jsem, bych, bychom, budeme, budu, nejsem, nebudeme, nejsme, nebudu</li>
      <li>DET: můj, moje, naše, naší, náš, našich, našeho, mého, naši, mé</li>
      <li>PRON: nás, mi, nám, mě, já, my, mně, námi, mnou, mne</li>
      <li>VERB-Fin: mám, myslím, máme, nevím, podíváme, děkuji, vidíme, prosím, můžeme, musíme</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: jste, byste, buď, jsi, budete, buďte, bys, nejste, budeš, nebudete</li>
      <li>DET: váš, vaše, vašich, vaši, vaší, vašem, vašeho, vaším, vašimi, tvé</li>
      <li>PRON: vám, vás, vámi, vy, ty, tě, ti, tebou, tobě, tebe</li>
      <li>VERB-Fin: máte, víte, vidíte, můžete, chcete, viz, jezdíte, řeknete, musíte, vzpomínáte</li>
      <li>VERB-Part: pochopil</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: je, jsou, bude, není, budou, nejsou, nebude, nebudou, bývá, bývají</li>
      <li>DET: jeho, jejich, její, jejichž, jehož, jejíž, jejích, jejího, jejím, jejímž</li>
      <li>PRON: je, ho, ji, mu, jim, nich, ní, jí, něj, on</li>
      <li>VERB-Fin: má, říká, může, mají, musí, jde, mohou, lze, chce, očekává</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: Desdemonina, Lilyin, Lollina, dceřina, maminčiny, manželčiny, Alenčiny, Irininých, Lilyina, Lollyina</li>
      <li>DET: její, jejíž, jejích, jejího, jejím, jejímž, jejímu, jejími, jejíhož, jejíma</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: Jonesův, Karlovy, Jonesova, Bushova, Bushovy, Eukleidových, Nobelovy, Masarykově, manželův, prezidentův</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>DET: jeho, jehož</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: jejich, naše, naší, náš, jejichž, našich, našeho, váš, vaše, naši</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: jeho, její, můj, moje, mého, jehož, jejíž, mé, jejích, jejího</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: tzv, a, čs, sv, ml, o, nar, Č, aj, p</li>
          <li>ADP: n, v, m, př, vs</li>
          <li>ADV: mj, atd, apod, resp, popř, ap, atp, kupř, lat</li>
          <li>CCONJ: tj, tzn</li>
          <li>DET: t, n</li>
          <li>NOUN: p, s, a, Kč, r, j, b, m, q, c</li>
          <li>NUM: mil, mld, tis</li>
          <li>PART: např, cca</li>
          <li>PROPN: ČR, USA, ODS, LN, OSN, ČSFR, NATO, CNN, SR, ČSSD</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Comprep
        <ul>
          <li>ADP: vzhledem, nehledě, narozdíl</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: v, na, o, s, z, do, za, pro, k, po</li>
        </ul>
      </li>
      <li>Voc
        <ul>
          <li>ADP: ve, se, ze, ke, ku, ode, beze, přede, skrze, nade</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ConjType</a>
    <ul>
      <li>Oper
        <ul>
          <li>CCONJ: plus, krát, minus</li>
          <li>SYM: x, <, >, -, .</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADJ
        <ul>
          <li>DET: ty, ten</li>
        </ul>
      </li>
      <li>ADP
        <ul>
          <li>ADP: v, na, ve, vzhledem, z, ze, s, bez, za, po</li>
          <li>ADV: spolu, společně, co, nezávisle, současně, zároveň, blízko, kolem, blíž, blíže</li>
          <li>NOUN: směrem, výměnou, tváří, Ruku</li>
          <li>VERB-Conv: počínaje</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: m</li>
          <li>ADV: více, víc, nejen, méně</li>
          <li>NOUN: Týden, měsíc, suma</li>
          <li>PART: přece</li>
          <li>X: de</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>CCONJ: a</li>
          <li>DET: to</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADV: poté</li>
          <li>CCONJ: i</li>
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
          <li>NOUN: PMC</li>
          <li>X: Inc, Corp, New, Co, s, of, Wall, street, International, de</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Hyph</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: česko, izraelsko, e, tchaj, matematicko, Coca, know, kvazi, německo, play</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NameType</a>
    <ul>
      <li>Geo
        <ul>
          <li>PROPN: Praha, Praze, ČR, USA, Prahy, Plzni, Německu, Brně, Německo, Washingtonu</li>
        </ul>
      </li>
      <li>Geo,Giv
        <ul>
          <li>ADJ: Martininy</li>
          <li>PROPN: Evropě, Evropy, Evropa, Evropu, Martina, Karolína, Karolíně, Virginii, Charlotte, Karolíny</li>
        </ul>
      </li>
      <li>Geo,Giv,Oth
        <ul>
          <li>PROPN: Petra, Coruňa, Aurory, Viktorie, Alberta, Albertě, Fatra, Fatry, Marietta, Pescarou</li>
        </ul>
      </li>
      <li>Geo,Nat
        <ul>
          <li>PROPN: Cikánka, Pražačka</li>
        </ul>
      </li>
      <li>Geo,Oth
        <ul>
          <li>PROPN: Yorku, Sparta, Sparty, Kanadě, Columbia, Kanada, Kanady, Reliance, Illinois, Streetu</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>ADJ: Jonesův, Karlovy, Jonesova, Bushova, Bushovy, Eukleidových, Nobelovy, Masarykově, Karlových, Courterově</li>
          <li>PROPN: John, Jiří, Dow, Jan, Václav, Jana, Josef, Petr, Vladimír, Klaus</li>
        </ul>
      </li>
      <li>Giv,Nat
        <ul>
          <li>PROPN: Němci, Němců, Němec, Češi, Frank, Němce, Čech, Srby, Čechů, Čechy</li>
        </ul>
      </li>
      <li>Giv,Oth
        <ul>
          <li>PROPN: Siouxsie, Jitka, Dagmar, Felicia, Lilly, Grada, Justin, Konstruktiva, Diane, Flora</li>
        </ul>
      </li>
      <li>Nat
        <ul>
          <li>ADJ: Američanovy</li>
          <li>PROPN: Američané, Američan, Rusové, Japonci, Američanů, Francouzi, Američany, Britové, Židů, Sověti</li>
        </ul>
      </li>
      <li>Oth
        <ul>
          <li>PROPN: ODS, LN, Sony, OSN, NATO, CNN, Quantum, Farmers, Vánoce, ČSSD</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Digit
        <ul>
          <li>NUM: 1, 2, 3, 8, 4, 10, 30, 5, 15, 20</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>NUM: II, I, III, IV, V, VII, IX, VIII, XII, XX</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>NUM: dva, tři, jeden, dvě, čtyři, dvou, pět, jednoho, jedna, dvěma</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Style</a>
    <ul>
      <li>Coll
        <ul>
          <li>ADJ: Devátý, hodnej, portfóliových, zakázaný, Klausově, Solženicynově, Stániny, Zlatej, bezva, blbá</li>
          <li>ADJ-Part: zakázaný, neopodstatněné, prohlídnuti, zavřené</li>
          <li>ADP: narozdíl</li>
          <li>ADV: dneska, teďka, holt, furt, akorát, teďko, Zatim, doteďka, mínus, nikdá</li>
          <li>AUX-Fin: budem, si, jseš, sme</li>
          <li>DET: které, který, muj, našim, žádnej, Všechny, kerou, mé, naší, nějakej</li>
          <li>NOUN: průmyslovku, rozběžky, áčka, mami, průmyslovce, Aritmáci, Babi, cestovky, kafe, naši</li>
          <li>NUM: dvěmi, čtyr</li>
          <li>PART: akorát, teda, přeci, jo, jakože, Nashle</li>
          <li>PRON: jenž, ní, jí</li>
          <li>PROPN: Jeseníkách, Massachussetts, Brasília, Brasílii, Columbusu, Lidovky, Mariánek, Marjánka, Massachussets, Strossmayeráku</li>
          <li>VERB-Conv: řka</li>
          <li>VERB-Fin: Jedem, řiká, vzpomínam, dívam, jdem, naberem, sejdem, řikáte, Běžkujete, Domnívam</li>
          <li>VERB-Inf: běžkovat, oblbnout, ošukat, pomoct, čučet</li>
          <li>VERB-Part: začla, řikala, začlo, běžkovali, dovopravil, oblíkly, ošukal, posestřily, prohlídli, promenádovaly</li>
        </ul>
      </li>
      <li>Expr
        <ul>
          <li>ADJ: Ultrapravicový</li>
          <li>NOUN: lidiček, bidýlku, busík, divadélku, drátečky, kšandičkami, světýlko, vlákénka, vršíčku, znaménkem</li>
          <li>PROPN: Milánek</li>
        </ul>
      </li>
      <li>Slng
        <ul>
          <li>ADJ: maržových, vytrejdován</li>
          <li>ADJ-Part: vytrejdován</li>
          <li>NOUN: KEG, putu, developer, blokového, developery, fěrtúšek, kšeftů, parničce, parničkách, put</li>
          <li>PROPN: Kulaťáku</li>
          <li>VERB-Part: čmajznul</li>
        </ul>
      </li>
      <li>Vrnc
        <ul>
          <li>AUX-Fin: nésó</li>
          <li>NOUN: děvčice, hadrou, koblihy, mama, obcházenica, obcházenice, pantok, pantokem, vercajch</li>
          <li>VERB-Part: zapomněli, zmátořil, zmátořila</li>
        </ul>
      </li>
      <li>Vulg
        <ul>
          <li>NOUN: Zmrd, hajzl, kundy, mamrd, píči, sráči, zkurvysynu, čuráka</li>
          <li>PART: kurva</li>
          <li>VERB-Part: vymrdal</li>
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
          <li>ADJ: ní, ním, Courieově, creditní, dceřinnou, dceřinných, lybijského, nadstandartní, ního, ními</li>
          <li>DET: Vaši</li>
          <li>NOUN: vánoce, vánocích, Denník, Denníku, chlévka, diskretance, dne, konzolidaci, médyjí, přívěšek</li>
          <li>PROPN: Reuter, Reutera, Bábe, Curichu, Lybii, Upsale, Šele</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: být, bývat, bývávat.</li>
</ul>

<ul>
<li>This corpus uses 2 lemmas as auxiliaries (<a>aux</a>). Examples: být, bývat.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: být, bývat.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (132)</li>
      <li>VERB-Fin--NOUN-Gen (188)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(kolem) (5)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(na) (3)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(okolo) (2)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(přes) (7)</li>
      <li>VERB-Fin--NOUN-Nom (8630)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(proti) (1)</li>
      <li>VERB-Fin--PRON (21)</li>
      <li>VERB-Fin--PRON-Gen (9)</li>
      <li>VERB-Fin--PRON-Nom (754)</li>
      <li>VERB-Inf--NOUN (19)</li>
      <li>VERB-Inf--NOUN-Gen (14)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(na) (2)</li>
      <li>VERB-Inf--NOUN-Loc-ADP(po) (1)</li>
      <li>VERB-Inf--NOUN-Nom (455)</li>
      <li>VERB-Inf--PRON-Nom (28)</li>
      <li>VERB-Part--NOUN (117)</li>
      <li>VERB-Part--NOUN-Gen (224)</li>
      <li>VERB-Part--NOUN-Gen-ADP(kolem) (2)</li>
      <li>VERB-Part--NOUN-Gen-ADP(na) (8)</li>
      <li>VERB-Part--NOUN-Gen-ADP(okolo) (1)</li>
      <li>VERB-Part--NOUN-Gen-ADP(přes) (2)</li>
      <li>VERB-Part--NOUN-Nom (10121)</li>
      <li>VERB-Part--NOUN-Nom-ADP(proti) (1)</li>
      <li>VERB-Part--PRON (16)</li>
      <li>VERB-Part--PRON-Gen (14)</li>
      <li>VERB-Part--PRON-Gen-ADP(na) (1)</li>
      <li>VERB-Part--PRON-Nom (681)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN-Acc (11)</li>
      <li>VERB-Fin--NOUN (40)</li>
      <li>VERB-Fin--NOUN-Acc (6572)</li>
      <li>VERB-Fin--NOUN-Gen (309)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(na) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(o) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(za) (1)</li>
      <li>VERB-Fin--NOUN-Nom (71)</li>
      <li>VERB-Fin--NOUN-Voc (2)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Fin--PRON-Acc (1088)</li>
      <li>VERB-Fin--PRON-Gen (6)</li>
      <li>VERB-Fin--PRON-Nom (4)</li>
      <li>VERB-Inf--NOUN (19)</li>
      <li>VERB-Inf--NOUN-Acc (3855)</li>
      <li>VERB-Inf--NOUN-Gen (132)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(na) (2)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(o) (1)</li>
      <li>VERB-Inf--NOUN-Nom (18)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (655)</li>
      <li>VERB-Inf--PRON-Nom (4)</li>
      <li>VERB-Part--NOUN (31)</li>
      <li>VERB-Part--NOUN-Acc (7048)</li>
      <li>VERB-Part--NOUN-Gen (332)</li>
      <li>VERB-Part--NOUN-Nom (49)</li>
      <li>VERB-Part--NOUN-Voc (3)</li>
      <li>VERB-Part--PRON (8)</li>
      <li>VERB-Part--PRON-Acc (1176)</li>
      <li>VERB-Part--PRON-Gen (4)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (2)</li>
      <li>VERB-Fin--NOUN-Acc (35)</li>
      <li>VERB-Fin--NOUN-Gen (2)</li>
      <li>VERB-Fin--NOUN-Nom (5)</li>
      <li>VERB-Fin--PRON-Acc (6)</li>
      <li>VERB-Inf--NOUN (4)</li>
      <li>VERB-Inf--NOUN-Acc (19)</li>
      <li>VERB-Inf--NOUN-Gen (3)</li>
      <li>VERB-Inf--NOUN-Nom (4)</li>
      <li>VERB-Inf--PRON-Acc (6)</li>
      <li>VERB-Part--NOUN (7)</li>
      <li>VERB-Part--NOUN-Acc (61)</li>
      <li>VERB-Part--NOUN-Gen (5)</li>
      <li>VERB-Part--NOUN-Nom (6)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-Acc (22)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 1243 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: stát se, podívat se, jmenovat se, dostat se, snažit se, myslit si, zdát se, podařit se, vrátit se, líbit se, týkat se, zabývat se, rozhodnout se, narodit se, domnívat se, objevit se, pamatovat si, sejít se, dát se, pohybovat se, týkající se, pokusit se, podílet se, zabývající se, změnit se, učit se, zvýšit se, dívat se, dohodnout se, obávat se, ptát se, vracet se, scházet se, zúčastnit se, věnovat se, jednat se, konat se, setkat se, dozvědět se, bát se, povídat si, snížit se, starat se, stávat se, dít se, seznámit se, ukázat se, pokoušet se, obrátit se, mít se</li>
</ul>

<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 603 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: dát se, očekávat se, říkat se, muset se, mít se, dělat se, obchodovat se, prodávat se, moci se, předpokládat se, uvádět se, hrát se, mluvit se, začít se, prodat se, vídat se, používat se, počítat se, najít se, chodit se, jít se, poznat se, povídat se, brát se, dávat se, psát se, jezdit se, hovořit se, platit se, protnout se, připravovat se, uskutečnit se, chtít se, nabízet se, nechat se, pořádat se, smět se, stavět se, udělat se, uvažovat se, učit se, znát se, zvyšovat se, čekat se, jednat se, jet se, nosit se, pracovat se, provádět se, hledat se</li>
</ul>

<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 166 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: brát se, vyfotit se, omluvit se, prosadit se, představit se, vidět se, vídat se, oběsit se, považovat se, poznat se, seznámit se, slyšet se, fotit se, nabízet se, navštěvovat se, obléci se, pojistit se, schovávat se, zapsat se, zaregistrovat se, dopravovat se, dotýkat se, fotografovat se, oholit se, podepsat se, prohlásit se, připravovat se, schovat se, situovat se, snášet se, spojit se, udržet se, utvrdit se, uživit se, vyfotografovat se, vystavovat se, vystřídat se, zachránit se, balit se, bránit se, bít se, chránit se, cítit sebe, dělat své, hlásit se, hodit se, hodnotit se, hodnotit sebe, holit se, hrát sebe</li>
    <ul>
      <li>Out of those, 3 lemmas occurred more than once, but never without a reflexive dependent. Examples: oběsit, dotýkat, situovat</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 11 relation subtypes: <a>acl:relcl</a>, <a>advmod:emph</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>det:numgov</a>, <a>det:nummod</a>, <a>expl:pass</a>, <a>expl:pv</a>, <a>nsubj:pass</a>, <a>nummod:gov</a>, <a>obl:arg</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>expl</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a></li>
</ul>
