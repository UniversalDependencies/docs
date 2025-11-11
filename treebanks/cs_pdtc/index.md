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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udcs_pdtc217)<br />
Download all treebanks: [UD 2.17](/#download)

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
| Lemmas | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| Relations | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |

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

[acl](cs_pdtc-dep-acl.html) – [acl:relcl](cs_pdtc-dep-acl-relcl.html) – [advcl](cs_pdtc-dep-advcl.html) – [advcl:pred](cs_pdtc-dep-advcl-pred.html) – [advmod](cs_pdtc-dep-advmod.html) – [advmod:emph](cs_pdtc-dep-advmod-emph.html) – [amod](cs_pdtc-dep-amod.html) – [appos](cs_pdtc-dep-appos.html) – [aux](cs_pdtc-dep-aux.html) – [aux:pass](cs_pdtc-dep-aux-pass.html) – [case](cs_pdtc-dep-case.html) – [cc](cs_pdtc-dep-cc.html) – [ccomp](cs_pdtc-dep-ccomp.html) – [compound](cs_pdtc-dep-compound.html) – [conj](cs_pdtc-dep-conj.html) – [cop](cs_pdtc-dep-cop.html) – [csubj](cs_pdtc-dep-csubj.html) – [csubj:pass](cs_pdtc-dep-csubj-pass.html) – [dep](cs_pdtc-dep-dep.html) – [det](cs_pdtc-dep-det.html) – [det:numgov](cs_pdtc-dep-det-numgov.html) – [det:nummod](cs_pdtc-dep-det-nummod.html) – [discourse](cs_pdtc-dep-discourse.html) – [expl:pass](cs_pdtc-dep-expl-pass.html) – [expl:pv](cs_pdtc-dep-expl-pv.html) – [fixed](cs_pdtc-dep-fixed.html) – [flat](cs_pdtc-dep-flat.html) – [iobj](cs_pdtc-dep-iobj.html) – [mark](cs_pdtc-dep-mark.html) – [nmod](cs_pdtc-dep-nmod.html) – [nsubj](cs_pdtc-dep-nsubj.html) – [nsubj:pass](cs_pdtc-dep-nsubj-pass.html) – [nummod](cs_pdtc-dep-nummod.html) – [nummod:gov](cs_pdtc-dep-nummod-gov.html) – [obj](cs_pdtc-dep-obj.html) – [obl](cs_pdtc-dep-obl.html) – [obl:arg](cs_pdtc-dep-obl-arg.html) – [orphan](cs_pdtc-dep-orphan.html) – [parataxis](cs_pdtc-dep-parataxis.html) – [punct](cs_pdtc-dep-punct.html) – [reparandum](cs_pdtc-dep-reparandum.html) – [root](cs_pdtc-dep-root.html) – [vocative](cs_pdtc-dep-vocative.html) – [xcomp](cs_pdtc-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 213897 sentences, 3432078 tokens and 3440052 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 387234 tokens (11%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 3 types of words that contain both letters and punctuation. Examples: Preud'homma, Preud'homme, Ze'ev</li>
</ul>

<ul>
<li>This corpus contains 7974 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 18 types of multi-word tokens. Examples: aby, kdyby, abychom, abych, kdybych, kdybychom, abyste, kdybyste, abys, kdybys, ses, sis, Abysme, Dones, Kdybysme, kdyžs, pochopils, tys.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 153 word types tagged as particles (PART): Bodejť, Což, Cožpak, Díkybohu, Fajn, Jestlipak, Ještěže, Jistěť, Nashle, Nejenomže, Nu, Perfekt, Zaplaťpánbůh, akorát, ale, alespoň, ani, ano, arciť, asi, aspoň, ať, až, ba, bezesporu, beztak, bohudík, bohužel, budiž, byť, bůhsuď, bůhví, cca, cirka, co, copak, div, dobrá, dobře, doopravdy, fakt, hlavně, hned, houby, i, jako, jakože, jakto, jasně, jen, jenom, ještě, jistě, jistěže, již, jo, kdepak, kdoví, když, kdyžtak, klidně, koneckonců, konečně, kupodivu, kurva, kéž, leda, li, možná, nakonec, naneštěstí, naopak, např, například, natož, nazdařbůh, naštěstí, ne, nechť, nejenže, nejspíš, nejspíše, nesporně, netto, nikoli, nikoliv, no, nuže, obzvláště, obzvlášť, ono, opravdu, ovšem, ovšemže, patrně, pouze, prakticky, pranic, pravda, prostě, proto, právě, právěže, prý, přece, přeci, především, přesně, přímo, relativně, rovněž, rozhodně, samozřejmě, sbohem, sice, skutečně, snad, sotva, spíš, spíše, stěží, tak, taky, také, takříkajíc, teda, to, totiž, tož, též, třeba, určitě, už, viď, viďte, vlastně, vole, však, vůbec, vždyť, zaplaťpánbu, zas, zase, zejm, zejména, zjevně, zkrátka, zrovna, zvláště, zvlášť, zřejmě, že, žel</li>
</ul>

<ul>
<li>This corpus contains 41 lemmas tagged as pronouns (PRON): bůhvíco, co, cokoli, cokoliv, copak, cosi, což, cože, gdo, jenž, já, kdeco, kdekdo, kdo, kdokoli, kdokoliv, kdopak, kdosi, kdož, lecco, leccos, leckdo, leckdos, ledacos, ledasco, my, máloco, málokdo, nic, nikdo, něco, někdo, on, pranic, se, sotvakdo, ty, veškerý, vy, všecek, všelicos</li>
</ul>

<ul>
<li>This corpus contains 81 lemmas tagged as determiners (DET): bůhvíjaký, bůhvíkolikátý, jaký, jakýkoli, jakýkoliv, jakýpak, jakýs, jakýsi, jeho, jehož, každý, kdejaký, kdovíjaký, kerý, kolik, kolikpak, kolikátý, který, kterýkoli, kterýkoliv, kterýpak, kterýs, kterýžto, lecjaký, leckterý, ledajaký, ledasjaký, malinko, mnoho, málo, málokterý, móóc, můj, nemnoho, nemálo, ničí, náš, nějaký, někerý, několik, několikerý, několikátý, některý, něčí, onen, onyno, pražádný, pár, přemnoho, samý, svůj, tadyhleten, tadyten, takový, takovýhle, takovýto, taký, takýs, tamhleten, tamten, ten, tenhle, tenhleten, tenle, tento, tentýž, to, tolik, tolikerý, toť, tuhleten, tvůj, týž, váš, všechen, všelijaký, všeliký, všeljaký, čí, ňáký, žádný</li>
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
    <li>AUX: jsouce, jsa, jsouc</li>
    <li>VERB: nemluvě, vlastně, soudě, nepočítaje, říkajíc, počínaje, Mluvě, konče, maje, nevyjímaje</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: je, by, jsem, jsme, jsou, bude, není, jste, budou, bych</li>
    <li>VERB: má, říká, může, mají, musí, mám, nevím, mohou, myslím, jde</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: být, nebýt, býti</li>
    <li>VERB: mít, vidět, říct, získat, dělat, stát, jít, hrát, podívat, udělat</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: spojených, vedoucí, spojené, budoucí, jmenován, zabývající, týkající, řečeno, vyfocené, rostoucí</li>
    <li>AUX: byl, bylo, byla, byly, byli, nebylo, nebyl, nebyla, nebyly, nebyli</li>
    <li>VERB: řekl, měl, měli, měla, uvedla, uvedl, mohl, mohla, měly, oznámila</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: obchodování, jednání, zvýšení, vedení, rozhodnutí, zařízení, snížení, řízení, opatření, řešení</li>
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
      <li>ADJ: další, první, české, nové, druhé, poslední, velké, obchodní, státní, newyorské</li>
      <li>ADJ-Part: zabývající, budoucí, týkající, sídlící, vedoucí, rostoucí, uvedené, dané, rozhodující, následující</li>
      <li>AUX-Conv: jsouc</li>
      <li>DET: která, které, této, té, své, tato, kterou, ta, svou, její</li>
      <li>NOUN: společnosti, společnost, akcií, firmy, společností, době, akcie, akcii, ceny, fotce</li>
      <li>NUM: miliardy, jedna, miliard, jedné, jednu, jednou, mld, miliardu, čtvrt, miliardami</li>
      <li>PRON: ji, ní, jí, níž, ona, ni, jež, veškeré, jíž, veškerou</li>
      <li>PROPN: Praha, Praze, Prahy, Evropě, Plzni, Evropy, Kalifornii, Francie, Plzně, Francii</li>
      <li>VERB-Conv: Narážejíc, Prolamujíc, Snažíc, Tvrdíc, chtíc, citujíc, domnívajíc, držíc, hynouc, nebrajíc</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>ADJ: zveřejněny, rády, oceněny, uvedeny, prodány, připraveny, považovány, schopny, určeny, stanoveny</li>
      <li>ADJ-Part: zveřejněny, oceněny, uvedeny, prodány, připraveny, považovány, určeny, stanoveny, použity, uzavřeny</li>
      <li>AUX-Part: byly, nebyly, bývaly, bývávaly, nebývaly</li>
      <li>VERB-Part: měly, mohly, vzrostly, klesly, stouply, začaly, uzavřely, zvýšily, dosáhly, uvedly</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Neut
    <ul>
      <li>ADJ: ráda, schopna, připravena, uzavřena, stanovena, založena, otevřena, považována, dokončena, prodána</li>
      <li>ADJ-Part: připravena, uzavřena, stanovena, založena, otevřena, považována, dokončena, prodána, určena, zahájena</li>
      <li>AUX-Part: byla, nebyla, bývala, bývávala, nebývala</li>
      <li>DET: moje, naše, vaše, tvoje</li>
      <li>NUM: dvě, obě</li>
      <li>VERB-Part: měla, uvedla, mohla, oznámila, řekla, musela, začala, získala, dostala, chtěla</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: další, cenných, první, minulý, nový, celý, velký, rád, dobrý, čistý</li>
      <li>ADJ-Part: spojených, vedoucí, spojené, jmenován, přesvědčen, připraven, zvolen, zabývající, budoucí, vedoucích</li>
      <li>AUX-Conv: jsa</li>
      <li>AUX-Part: byl, byli, nebyl, nebyli, býval, bývali, nebýval</li>
      <li>DET: který, kteří, tento, které, ten, každý, svůj, můj, všichni, někteří</li>
      <li>NOUN: dolarů, roce, roku, trhu, rok, dolaru, lidí, den, trh, zákona</li>
      <li>NUM: milionů, milionu, dva, jeden, tisíc, miliónů, oba, miliony, miliónu, tisíce</li>
      <li>PRON: on, oni, jenž, veškeré, jež, veškerý, jehož, jeho, již, ony</li>
      <li>PROPN: Yorku, Jiří, Jan, John, Václav, Petr, Josef, Robert, Pavel, Karel</li>
      <li>SYM: °</li>
      <li>VERB-Conv: nemluvě, vlastně, soudě, nepočítaje, počínaje, Mluvě, konče, maje, nevyjímaje, chtě</li>
      <li>VERB-Part: řekl, měl, měli, uvedl, mohl, mohli, dostal, dělal, přišel, prohlásil</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>DET: tím, toho, tom, tomu, tohoto, tomto, svého, její, svém, svým</li>
      <li>NUM: jednoho, jedním, jednom, jednomu, nejednomu, nejednoho</li>
      <li>PRON: ho, mu, něj, jej, ním, něm, němž, jehož, něho, něhož</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: možné, třetí, zajímavé, pěkné, další, posledních, jiné, první, dobré, hezké</li>
      <li>ADJ-Part: řečeno, vyfocené, uvedeno, dosaženo, rozhodnuto, dané, prodáno, určeno, spojeného, končící</li>
      <li>AUX-Part: bylo, nebylo, bývalo, nebývalo, bývávalo, byly</li>
      <li>DET: to, všechno, které, toto, tohle, své, vše, která, takové, tato</li>
      <li>NOUN: let, letech, čtvrtletí, obchodování, září, období, jednání, procent, zvýšení, vedení</li>
      <li>NOUN-Vnoun: obchodování, jednání, zvýšení, vedení, rozhodnutí, zařízení, snížení, řízení, opatření, řešení</li>
      <li>NUM: jedno, sto, set, sta, stě, stech, sty, desatera, desatero, stům</li>
      <li>PRON: všecko, je, jež, ono, veškeré, veškerá, ně, něž, všecka, jenž</li>
      <li>PROPN: Německu, Německa, Brno, Brně, Německo, Slovensku, Japonsko, Slovensko, Rusko, Japonsku</li>
      <li>VERB-Conv: říkajíc, opírajíc, pokračujíc</li>
      <li>VERB-Part: mělo, mohlo, došlo, stalo, šlo, podařilo, líbilo, muselo, dalo, začalo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>ADJ: další, bývalý, rádi, hlavní, starší, výkonný, vedoucí, generální, mnozí, ostatní</li>
      <li>ADJ-Part: vedoucí, vedoucích, připraveni, přesvědčeni, dotázaných, budoucí, vyučený, žijící, vynikající, zabývající</li>
      <li>AUX-Part: byli, nebyli, bývali</li>
      <li>DET: kteří, všichni, někteří, ti, každý, sami, naši, svého, ty, tito</li>
      <li>NOUN: lidí, pan, prezident, ředitel, lidé, předseda, člověk, ministr, mluvčí, lidi</li>
      <li>NUM: jednoho, jedni, nejednoho</li>
      <li>PRON: kdo, nikdo, někdo, oni, někoho, nikoho, koho, komu, nikomu, někomu</li>
      <li>PROPN: Jiří, Jan, John, Václav, Petr, Josef, Robert, Pavel, Karel, Bush</li>
      <li>VERB-Part: měli, mohli, museli, jezdili, chodili, uvedli, bydleli, jeli, neměli, dostali</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>ADJ: cenných, další, minulý, celý, první, nový, velký, čistý, spojených, dobrý</li>
      <li>ADJ-Part: spojených, spojené, týkající, zveřejněny, rostoucí, následující, oceněny, rozhodující, spojenými, zabývající</li>
      <li>AUX-Part: byly, nebyly, bývaly, bývávaly, nebývaly</li>
      <li>DET: které, svůj, tento, který, tyto, každý, ten, ty, nějaký, takové</li>
      <li>NOUN: dolarů, roce, roku, trhu, rok, dolaru, den, trh, zákona, týden</li>
      <li>NUM: milionů, milionu, tisíc, miliónů, jeden, miliony, miliónu, tisíce, mil, milion</li>
      <li>PRON: co, něco, čím, čem, čeho, cokoli, čemu, jež, cosi, něčeho</li>
      <li>PROPN: Yorku, Washingtonu, Ford, Jaguar, Londýně, Warner, Texasu, Washington, Izrael, Londýn</li>
      <li>SYM: °</li>
      <li>VERB-Part: měly, mohly, vzrostly, klesly, stouply, začaly, uzavřely, zvýšily, dosáhly, uvedly</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>ADJ: zavřenýma, odřenýma, otevřenýma, založenýma, zavázanýma, špinavýma, Sudetoněmeckýma, dlouhýma, filmovýma, holýma</li>
      <li>ADJ-Part: zavřenýma, odřenýma, otevřenýma, založenýma, zavázanýma, pálícíma, předpaženýma, přilepenýma, rozevřenýma, svítícíma</li>
      <li>DET: mýma, těma, jejíma, našima, svýma</li>
      <li>NOUN: očima, rukama, nohama, ušima, nožičkama, ručičkama</li>
      <li>NUM: oběma, dvěma, čtyřma, dvěmi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: další, dalších, cenných, posledních, nové, nových, velké, jiných, spojených, amerických</li>
      <li>ADJ-Part: spojených, spojené, vedoucí, týkající, vedoucích, následujících, budoucí, oceněné, budoucích, uvedené</li>
      <li>AUX-Conv: jsouce</li>
      <li>AUX-Fin: jsme, jsou, jste, budou, bychom, nejsou, budeme, byste, nebudou, budete</li>
      <li>AUX-Part: byly, byli, nebyly, nebyli, bývali, bývaly, bývávaly, nebývaly</li>
      <li>DET: které, kteří, tyto, všechny, své, svých, těchto, ty, všech, všichni</li>
      <li>NOUN: dolarů, let, akcií, korun, akcie, letech, lidí, děti, ceny, společností</li>
      <li>NOUN-Vnoun: zařízení, opatření, jednání, omezení, rozhodnutí, ustanovení, obvinění, tvrzení, jednáních, zranění</li>
      <li>NUM: milionů, dva, tři, dvě, dvou, čtyři, miliard, miliónů, oba, pěti</li>
      <li>PRON: nás, je, nám, jim, vám, nich, my, vás, nimi, nichž</li>
      <li>PROPN: Němci, Vánoce, Čechách, Čech, Američané, Němců, Češi, Japonci, Rusové, Čechy</li>
      <li>SYM: °</li>
      <li>VERB-Conv: Připomínajíce, Zachovávajíce, chtějíce, dodávajíce, majíce, mluvíce, následujíce, poskytujíce, poukazujíce, používajíce</li>
      <li>VERB-Fin: mají, mohou, máme, máte, podíváme, říkají, vidíme, chtějí, můžeme, nemají</li>
      <li>VERB-Part: měli, měly, mohli, mohly, museli, jezdili, chodili, uvedli, bydleli, jeli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur,Sing
    <ul>
      <li>ADJ: ráda, schopna, připravena, uzavřena, stanovena, založena, otevřena, považována, dokončena, prodána</li>
      <li>ADJ-Part: připravena, uzavřena, stanovena, založena, otevřena, považována, dokončena, prodána, určena, zahájena</li>
      <li>AUX-Part: byla, nebyla, bývala, bývávala, nebývala</li>
      <li>VERB-Part: měla, uvedla, mohla, oznámila, řekla, musela, začala, získala, dostala, chtěla</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: první, další, poslední, české, druhé, hlavní, třetí, obchodní, nové, státní</li>
      <li>ADJ-Part: jmenován, vedoucí, řečeno, vyfocené, zabývající, budoucí, rozhodující, sídlící, dané, rostoucí</li>
      <li>AUX-Conv: jsa, jsouc</li>
      <li>AUX-Fin: je, jsem, bude, není, bych, nebude, budu, jsi, bývá, nejsem</li>
      <li>AUX-Part: byl, bylo, nebylo, nebyl, býval, bývalo, nebývalo, bývávalo, nebýval</li>
      <li>DET: to, který, která, tím, toho, této, tom, tento, tomu, které</li>
      <li>NOUN: společnosti, společnost, roce, roku, trhu, rok, době, firmy, akcii, fotce</li>
      <li>NOUN-Vnoun: obchodování, zvýšení, vedení, jednání, rozhodnutí, snížení, řízení, řešení, srovnání, prohlášení</li>
      <li>NUM: milionu, jeden, miliardy, pět, jedna, jednoho, jedné, šest, jednu, deset</li>
      <li>PRON: mi, mě, já, ho, mu, ji, ní, jí, mně, něj</li>
      <li>PROPN: Praha, Praze, Prahy, Yorku, Jiří, Evropě, Plzni, Jan, John, Evropy</li>
      <li>VERB-Conv: nemluvě, vlastně, soudě, nepočítaje, říkajíc, počínaje, Mluvě, konče, maje, nevyjímaje</li>
      <li>VERB-Fin: má, říká, může, mám, musí, nevím, myslím, jde, lze, znamená</li>
      <li>VERB-Part: řekl, měl, uvedl, mohl, mělo, dostal, mohlo, dělal, přišel, prohlásil</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: další, první, minulý, jiné, nové, vlastní, třetí, celý, celou, příští</li>
      <li>ADJ-Part: týkající, budoucí, vedoucí, spojené, končící, následující, rostoucí, rozhodující, dané, související</li>
      <li>ADP: na, pro, za, o, v, přes, ve, po, mimo, mezi</li>
      <li>DET: to, které, své, kterou, svůj, tento, který, svou, tuto, všechny</li>
      <li>NOUN: rok, akcii, den, týden, společnost, roky, dobu, fotku, čtvrtletí, cenu</li>
      <li>NOUN-Vnoun: zvýšení, rozhodnutí, snížení, obchodování, jednání, převzetí, zařízení, řešení, opatření, vedení</li>
      <li>NUM: tři, dva, dvě, pět, jeden, jednu, čtyři, šest, deset, osm</li>
      <li>PRON: se, co, je, mě, ho, ji, něco, nás, nic, vás</li>
      <li>PROPN: Vánoce, Slovensko, Prahu, Evropu, Němce, Šumavu, Německo, Čechy, Kalifornii, Moravu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: další, dalším, jiným, ostatním, dalšímu, loňskému, české, velkým, jinému, stejnému</li>
      <li>ADJ-Part: spojeným, vedoucím, budoucím, danému, zvýšené, rozvinutým, očekávanému, příslušným, uvedeným, budoucímu</li>
      <li>ADP: k, proti, ke, kvůli, oproti, díky, vůči, navzdory, naproti, ku</li>
      <li>DET: tomu, svým, tomuto, kterým, té, těm, všem, této, svému, kterému</li>
      <li>NOUN: společnosti, dispozici, fotce, lidem, firmě, roku, vládě, prodeji, dětem, zvýšení</li>
      <li>NOUN-Vnoun: zvýšení, rozhodnutí, snížení, převzetí, obchodování, jednání, vytvoření, řešení, schválení, vidění</li>
      <li>NUM: dvěma, jedné, jednomu, oběma, milionům, třem, pěti, tisícům, deseti, čtyřem</li>
      <li>PRON: si, mi, nám, mu, jim, vám, jí, mně, nim, němu</li>
      <li>PROPN: Němcům, Slovensku, Německu, Bushovi, Rusku, Evropě, Číně, Jiřímu, Čechům, Polsku</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: cenných, dalších, české, nových, nového, amerických, jiných, českého, posledních, jiného</li>
      <li>ADJ-Part: spojených, vedoucích, prodaných, budoucích, uvedených, dotázaných, zbývajících, vybraných, ozbrojených, spojeného</li>
      <li>ADP: z, do, od, podle, u, ze, bez, během, kolem, za</li>
      <li>DET: toho, tohoto, této, svých, svého, těchto, všech, své, té, těch</li>
      <li>NOUN: společnosti, dolarů, let, roku, akcií, firmy, korun, lidí, dolaru, zákona</li>
      <li>NOUN-Vnoun: obchodování, zařízení, jednání, oddělení, řízení, vedení, podnikání, sdružení, umění, pojištění</li>
      <li>NUM: milionů, milionu, miliardy, miliard, miliónů, dvou, jednoho, tří, jedné, obou</li>
      <li>PRON: nás, nich, jich, něj, ní, nichž, mě, jehož, sebe, něho</li>
      <li>PROPN: Prahy, Evropy, Německa, Plzně, Jana, Ameriky, Čech, Slovenska, Ruska, Králové</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: hlavním, cennými, dalšími, dalším, jinými, největším, prvním, velkým, jediným, druhým</li>
      <li>ADJ-Part: spojenými, omezeným, vedoucími, rozhodujícím, vedoucím, otevřeným, rostoucím, plánovaným, vedoucí, následujícím</li>
      <li>ADP: s, se, před, mezi, za, nad, pod, počínaje, napříč, přede</li>
      <li>DET: tím, svým, tímto, svými, svou, kterým, těmi, tou, touto, několika</li>
      <li>NOUN: společností, lety, způsobem, rokem, cílem, součástí, sídlem, ředitelem, prezidentem, směrem</li>
      <li>NOUN-Vnoun: vedením, zdaněním, rozhodnutím, zvýšením, snížením, řešením, obchodováním, ručením, řízením, odvoláním</li>
      <li>NUM: dvěma, jedním, jednou, třemi, miliony, oběma, čtyřmi, pěti, šesti, deseti</li>
      <li>PRON: nimi, ním, vámi, sebou, námi, čím, mnou, ní, čímž, jím</li>
      <li>PROPN: Labem, Německem, Ruskem, Izraelem, Slovenskem, Václavem, Evropou, Klausem, Prahou, Němci</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: současné, posledních, druhé, prvním, newyorské, první, třetím, české, poslední, druhém</li>
      <li>ADJ-Part: spojených, daném, následujících, nadcházejících, vyrovnaném, dané, otevřeném, končícím, spojeném, oceněných</li>
      <li>ADP: v, na, ve, o, po, při</li>
      <li>DET: tom, této, tomto, té, svém, své, kterém, téhle, těchto, svých</li>
      <li>NOUN: roce, době, letech, výši, fotce, trhu, případě, burze, hodnotě, oblasti</li>
      <li>NOUN-Vnoun: obchodování, srovnání, porovnání, prohlášení, utkání, jednání, zasedání, setkání, řízení, skončení</li>
      <li>NUM: dvou, jednom, jedné, třech, obou, pěti, čtyřech, šesti, deseti, osmi</li>
      <li>PRON: něm, ní, němž, sobě, nich, níž, nichž, čem, mně, nás</li>
      <li>PROPN: Praze, Plzni, Evropě, Yorku, Německu, Kalifornii, Brně, Čechách, Francii, Slovensku</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: další, první, možné, hlavní, poslední, státní, federální, česká, starší, velká</li>
      <li>ADJ-Part: vedoucí, spojené, vyfocené, zabývající, budoucí, oceněné, sídlící, rostoucí, rozhodující, uvedené</li>
      <li>ADP: versus, ad, kontra, vs, v, á, ala</li>
      <li>DET: to, který, které, která, kteří, tato, tento, ten, ta, moje</li>
      <li>NOUN: společnost, firma, pan, prezident, ředitel, lidé, vláda, předseda, akcie, člověk</li>
      <li>NOUN-Vnoun: vedení, zvýšení, rozhodnutí, jednání, obchodování, snížení, opatření, sdružení, zařízení, řešení</li>
      <li>NUM: jeden, dva, jedna, tři, dvě, oba, obě, čtyři, pět, šest</li>
      <li>PRON: co, což, já, kdo, my, nikdo, někdo, něco, on, nic</li>
      <li>PROPN: Praha, Jiří, Jan, John, Václav, Petr, Robert, Brno, Josef, Pavel</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: Vážený, vážená, vážení, drahá, Milá, Svatý, drahý, hindští, milý, Milí</li>
      <li>ADJ-Part: Vážený, vážená, vážení, Milovaná, vzdálená, zaměřené</li>
      <li>DET: můj, má, moje, mí, naše, Vaše, náš</li>
      <li>NOUN: pane, paní, bože, miláčku, čtenáři, pánové, kluci, babičko, děvčata, příteli</li>
      <li>NUM: milióny</li>
      <li>PRON: ty, vy</li>
      <li>PROPN: Jardo, Pavle, Agáto, Alice, Anetko, Basile, Josef, Lhalo, Menno, Morte</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PrepCase</a></li>
</ul>

<ul>
  <li>Npr
    <ul>
      <li>PRON: je, ji, jim, jí, jej, jich, jehož, jím, jemuž, jež</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pre
    <ul>
      <li>PRON: nich, ní, něj, nimi, ním, nichž, ně, níž, něm, němž</li>
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
      <li>ADJ: větší, vyšší, starší, nižší, menší, lepší, mladší, delší, horší, vyšších</li>
      <li>ADJ-Part: komplikovanější, otevřenější, vzdálenější, omezenější, vzdálenějších, sofistikovanější, vzdělanější, kvalifikovanější, promyšlenější, rozšířenější</li>
      <li>ADV: více, méně, víc, později, dříve, lépe, dřív, výše, dál, níže</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: další, nové, poslední, české, velké, dalších, cenných, obchodní, hlavní, státní</li>
      <li>ADJ-Part: spojených, spojené, budoucí, jmenován, řečeno, vyfocené, dané, uvedené, přesvědčen, připravena</li>
      <li>ADV: stále, dobře, často, dost, dlouho, stejně, doma, přibližně, úplně, rychle</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: největší, nejlepší, nejvyšší, největším, největších, nejstarší, nejmladší, nejbližší, nejnižší, nejvyššího</li>
      <li>ADJ-Part: nejoblíbenější, nejrozšířenější, nejoblíbenějším, nejprodávanější, nejprodávanějšími, nejrozšířenějším, nejsledovanější, nejneukázněnější, nejobchodovanějších, nejobchodovanějšími</li>
      <li>ADV: nejvíce, nejméně, nejvíc, nejdříve, nejlépe, nejdřív, nejčastěji, nejpozději, nejraději, nejrychleji</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ: nedávné, nebezpečné, necelých, nezbytné, nezávislých, nezávislé, nemožné, nedávném, neautorizovaný, nedávných</li>
      <li>ADJ-Part: neautorizovaný, nesplacených, nedovoleného, nezměněny, nejmenovaný, nezajištěné, neoprávněné, nevyhovující, neomezené, nesplacené</li>
      <li>ADV: nedávno, nezávisle, nesprávně, nepřímo, neobyčejně, nesmírně, neúspěšně, neúměrně, neuvěřitelně, nevyhnutelně</li>
      <li>AUX-Fin: není, nejsou, nebude, nebudou, nejsem, nejsme, nebudu, nebudeme, nejste, nebývá</li>
      <li>AUX-Inf: nebýt</li>
      <li>AUX-Part: nebylo, nebyl, nebyla, nebyly, nebyli, nebývalo, nebývaly, nebýval, nebývala</li>
      <li>VERB-Conv: nemluvě, nepočítaje, nevyjímaje, nechtě, nehledě, nebrajíc, nechtíc, nemaje</li>
      <li>VERB-Fin: nevím, nemá, nemůže, nelze, nemají, nemusí, nemám, nemohou, nepamatuju, nejde</li>
      <li>VERB-Inf: nevidět, nenechat, nemít, nedělat, nesouhlasit, neudělat, nedat, nepoužívat, neprodávat, nevzpomenout</li>
      <li>VERB-Part: neměl, neměli, neměla, nemohl, nemohli, nepodařilo, nechtěl, nemohla, nešlo, nemělo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: další, nové, poslední, české, velké, dalších, cenných, obchodní, hlavní, státní</li>
      <li>ADJ-Part: spojených, vedoucí, spojené, budoucí, jmenován, zabývající, týkající, řečeno, vyfocené, rostoucí</li>
      <li>ADV: více, stále, dobře, často, dost, méně, dlouho, stejně, víc, později</li>
      <li>AUX-Conv: jsouce, jsa, jsouc</li>
      <li>AUX-Fin: je, jsem, jsme, jsou, bude, jste, budou, budeme, budu, jsi</li>
      <li>AUX-Inf: být, býti</li>
      <li>AUX-Part: byl, bylo, byla, byly, byli, býval, bývalo, bývala, bývali, bývaly</li>
      <li>SYM: °</li>
      <li>VERB-Conv: vlastně, soudě, říkajíc, počínaje, Mluvě, konče, maje, chtě, počítaje, sedě</li>
      <li>VERB-Fin: má, říká, může, mají, musí, mám, mohou, myslím, jde, máme</li>
      <li>VERB-Inf: mít, vidět, říct, získat, dělat, stát, jít, hrát, podívat, udělat</li>
      <li>VERB-Part: řekl, měl, měli, měla, uvedla, uvedl, mohl, mohla, měly, oznámila</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>ADJ: ráda, rád, rádi, jmenován, možno, řečeno, schopen, schopni, schopna, známo</li>
      <li>ADJ-Part: jmenován, řečeno, přesvědčen, připravena, připraven, zvolen, uvedeno, uzavřena, zveřejněny, stanovena</li>
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
      <li>ADJ-Part: vedoucí, budoucí, zabývající, týkající, rostoucí, následující, rozhodující, sídlící, vynikající, vedoucích</li>
      <li>AUX-Conv: jsouce, jsa, jsouc</li>
      <li>AUX-Fin: je, by, jsem, jsme, jsou, bude, není, jste, budou, bych</li>
      <li>AUX-Inf: být, nebýt, býti</li>
      <li>AUX-Part: byl, bylo, byla, byly, byli, nebylo, nebyl, nebyla, nebyly, nebyli</li>
      <li>VERB-Conv: nemluvě, vlastně, soudě, nepočítaje, říkajíc, počínaje, Mluvě, konče, maje, nevyjímaje</li>
      <li>VERB-Fin: má, říká, může, mají, musí, mám, nevím, mohou, myslím, jde</li>
      <li>VERB-Inf: mít, vidět, dělat, jít, hrát, pokračovat, muset, pracovat, chodit, platit</li>
      <li>VERB-Part: měl, měli, měla, mohl, mohla, měly, mělo, mohli, mohlo, dělal</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp,Perf
    <ul>
      <li>ADJ-Part: jmenován, jmenováni, věnována, informováni, věnován, informován, věnováno, jmenována, informována, privatizována</li>
      <li>VERB-Conv: citujíc, reagujíce</li>
      <li>VERB-Fin: jmenuje, jmenuji, věnuje, jmenují, organizuje, specializuje, konstatuje, investuje, reaguje, věnují</li>
      <li>VERB-Inf: investovat, věnovat, komentovat, jmenovat, reagovat, realizovat, vetovat, informovat, riskovat, definovat</li>
      <li>VERB-Part: jmenoval, jmenovala, informoval, konstatoval, jmenovalo, věnoval, reagoval, rezignoval, absolvoval, absolvovali</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>ADJ-Part: řečeno, přesvědčen, připravena, připraven, zvolen, uvedeno, uzavřena, zveřejněny, stanovena, založena</li>
      <li>VERB-Conv: řka, poznajíce, semnuvše, vzpomenuv, zaplniv, řkouce</li>
      <li>VERB-Fin: podíváme, dá, přijde, stane, začne, zvýší, zůstane, nedá, dostane, zaplatí</li>
      <li>VERB-Inf: říct, získat, podívat, udělat, prodat, dostat, stát, dát, koupit, zvýšit</li>
      <li>VERB-Part: řekl, uvedla, uvedl, oznámila, řekla, dostal, přišel, prohlásil, začal, dodal</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: by, bych, bychom, byste, bys, bysme, bysem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: buď, buďte, budiž, Nebuďte, Buďme, nebuďme</li>
      <li>VERB-Fin: viz, Začněme, počkejte, řekněte, řekněme, dejme, pojďme, představte, zaplať, podívejte</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: je, jsem, jsme, jsou, bude, není, jste, budou, nejsou, nebude</li>
      <li>VERB-Fin: má, říká, může, mají, musí, mám, nevím, mohou, myslím, jde</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>ADJ-Part: budoucí, budoucích, budoucího, budoucím, budoucímu, budoucími</li>
      <li>AUX-Fin: bude, budou, nebude, budeme, budu, nebudou, budete, nebudu, nebudeme, budeš</li>
      <li>VERB-Fin: půjde, půjdou, nepůjde, půjdeme, pojedeme, pojede, půjdu, nepůjdu, pojedu, ponese</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: odstoupivšího, přeživších, Přeživší, byvší, doloživší, doznavšího, nastavší, ocitnuvšího, odstoupivších, provinivšího</li>
      <li>AUX-Part: byl, bylo, byla, byly, byli, nebylo, nebyl, nebyla, nebyly, nebyli</li>
      <li>VERB-Conv: semnuvše, vzpomenuv, zaplniv</li>
      <li>VERB-Part: řekl, měl, měli, měla, uvedla, uvedl, mohl, mohla, měly, oznámila</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: vedoucí, zabývající, týkající, rostoucí, následující, rozhodující, sídlící, vynikající, vedoucích, pokračující</li>
      <li>AUX-Conv: jsouce, jsa, jsouc</li>
      <li>AUX-Fin: je, jsem, jsme, jsou, není, jste, nejsou, jsi, bývá, nejsem</li>
      <li>VERB-Conv: nemluvě, vlastně, soudě, nepočítaje, říkajíc, počínaje, Mluvě, konče, maje, nevyjímaje</li>
      <li>VERB-Fin: má, říká, může, mají, musí, mám, nevím, mohou, myslím, jde</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>ADJ-Part: vedoucí, budoucí, zabývající, týkající, rostoucí, následující, rozhodující, sídlící, vynikající, vedoucích</li>
      <li>AUX-Conv: jsouce, jsa, jsouc</li>
      <li>AUX-Fin: je, jsem, jsme, jsou, bude, není, jste, budou, nejsou, nebude</li>
      <li>AUX-Part: byl, bylo, byla, byly, byli, nebylo, nebyl, nebyla, nebyly, nebyli</li>
      <li>VERB-Conv: nemluvě, vlastně, soudě, nepočítaje, říkajíc, počínaje, Mluvě, konče, maje, nevyjímaje</li>
      <li>VERB-Fin: má, říká, může, mají, musí, mám, nevím, mohou, myslím, jde</li>
      <li>VERB-Part: řekl, měl, měli, měla, uvedla, uvedl, mohl, mohla, měly, oznámila</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ-Part: spojených, spojené, jmenován, řečeno, vyfocené, dané, uvedené, přesvědčen, připravena, připraven</li>
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
      <li>ADV: tam, tak, tady, teď, nyní, tehdy, dosud, tu, tenkrát, zde</li>
      <li>DET: to, tím, toho, této, tom, tento, tomu, tato, ten, té</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem,Ind
    <ul>
      <li>ADV: párkrát, nejednou, nekonečněkrát, nesčetněkrát</li>
      <li>DET: kolik, pár, kolika, kolikáté, kolikátého, malinko, kolikpak, kolikátá, kolikátí, kolikátý</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: sám, sama, sami, samé, samy, samo, samí, samého, samá, samém</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: někdy, nějak, někde, kdysi, někam, několikrát, kdykoliv, kdykoli, jaksi, jakkoli</li>
      <li>DET: několik, nějaké, některé, mnoho, někteří, několika, některých, nějaký, nějakou, mnoha</li>
      <li>PRON: něco, někdo, někoho, cokoli, někomu, cosi, něčeho, někým, něčem, cokoliv</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>ADV: jak, kde, kdy, proč, kam, odkud, kolikrát, kudy, odkdy, dokdy</li>
      <li>DET: které, který, která, kteří, kterou, jaké, kterým, kterých, kterého, kterém</li>
      <li>PRON: co, což, kdo, čím, čímž, čem, koho, copak, čeho, komu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: nikdy, nijak, nikde, nikam, odnikud</li>
      <li>DET: žádné, žádný, žádná, žádnou, žádném, žádného, žádným, žádnému, žádných, žádní</li>
      <li>PRON: nic, nikdo, nikoho, nikomu, ničím, ničemu, ničeho, nikým, ničem, nikom</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: jeho, své, jejich, její, svých, svého, svou, moje, svůj, můj</li>
      <li>PRON: se, si, nás, mi, mě, já, je, nám, ho, mu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: jak</li>
      <li>DET: jejichž, jehož, jejíž, jejímž, jejíchž, jejíhož, jejímiž, jejímuž</li>
      <li>PRON: nichž, jež, níž, němž, jehož, jenž, něhož, něž, jemuž, nimiž</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: vždy, všude, navždy, odjakživa, všudy, odevšad</li>
      <li>DET: všechno, všechny, každý, všech, všichni, vše, každé, každého, každou, všem</li>
      <li>PRON: veškeré, všecko, veškerý, veškerou, veškerá, veškerých, veškerého, všecky, veškerým, veškerém</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>DET: několik, mnoho, několika, kolik, mnoha, tolik, pár, málo, mála, tolika</li>
      <li>NUM: 1, milionů, milionu, dva, tři, 2, jeden, miliardy, 3, 4</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>NUM: nejeden, nejedné, nejednoho, nejednomu, nejedno</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>ADJ: obojí, dvojí, dvojím, dvoje, oboje, dvojího, obojím, troje, trojí, obého</li>
      <li>ADV: jednou, dvakrát, třikrát, několikrát, čtyřikrát, pětkrát, kolikrát, desetkrát, šestkrát, mnohokrát</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult,Sets
    <ul>
      <li>ADJ: devatery, třicatery, čtvery, čtverým, šestery</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: první, druhé, třetí, prvním, druhý, prvních, třetím, druhou, druhá, prvního</li>
      <li>DET: kolikáté, kolikátého, kolikátá, několikátý, bůhvíkolikátém, kolikátí, kolikátý, několikáté</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sets
    <ul>
      <li>DET: několikeré, několikerého, několikery, několikerá, několikerý, tolikeré</li>
      <li>NUM: jedny, jedni, jedněch, jedněmi, jedněm</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: Jonesův, Karlovy, Karlových, Jonesova, Bushova, Nobelovy, Bushovy, Lloydova, Reaganovy, Lloydovy</li>
      <li>DET: jeho, své, jejich, její, svých, svého, svou, moje, svůj, můj</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: své, svých, svého, svou, svůj, svým, svém, svoji, svými, svému</li>
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
      <li>AUX-Fin: jsem, jsme, bych, bychom, budeme, budu, nejsem, nejsme, nebudu, nebudeme</li>
      <li>DET: moje, můj, naše, naší, náš, našich, naši, mého, našeho, mé</li>
      <li>PRON: nás, mi, mě, já, nám, mně, my, námi, mnou, mne</li>
      <li>VERB-Fin: mám, nevím, myslím, máme, děkuji, podíváme, vidíme, můžeme, rozumím, prosím</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: jste, byste, jsi, budete, buď, bys, buďte, budeš, nejste, nebudete</li>
      <li>DET: vaše, váš, vašich, vaší, vaši, vašeho, vašem, tvé, vašemu, tvůj</li>
      <li>PRON: vám, vás, vámi, vy, tě, ti, ty, tebe, tobě, tebou</li>
      <li>VERB-Fin: máte, můžete, chcete, víte, vidíte, viz, musíte, řeknete, vídáte, vzpomínáte</li>
      <li>VERB-Part: pochopil</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: je, jsou, bude, není, budou, nejsou, nebude, nebudou, bývá, bývají</li>
      <li>DET: jeho, jejich, její, jejichž, jejích, jejím, jehož, jejíž, jejího, jejímž</li>
      <li>PRON: je, ho, mu, ji, jim, nich, ní, jí, něj, nimi</li>
      <li>VERB-Fin: má, říká, může, mají, musí, mohou, jde, tvrdí, lze, znamená</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: maminčina, maminčiny, manželčin, babiččina, maminčin, manželčiny, Babiččině, babiččiny, maminčini, manželčiných</li>
      <li>DET: její, jejích, jejím, jejíž, jejího, jejímž, jejímu, jejími, jejíchž, jejíhož</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: Jonesův, Karlovy, Karlových, Jonesova, Bushova, Nobelovy, Bushovy, Lloydova, Reaganovy, Lloydovy</li>
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
      <li>DET: jejich, naše, naší, náš, našich, vaše, váš, jejichž, naši, našeho</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: jeho, její, moje, můj, mého, jejích, mé, jejím, jehož, jejíž</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: tzv, a, čs, o, sv, ml, aj, Č, nar, hl</li>
          <li>ADP: n, vs, v, př, m, vč</li>
          <li>ADV: mj, apod, atd, resp, atp, popř, ap, tzv, kupř, popříp</li>
          <li>CCONJ: tj, tzn</li>
          <li>DET: t, n</li>
          <li>NOUN: a, p, s, j, Kč, m, r, b, d, c</li>
          <li>NUM: mil, mld, tis</li>
          <li>PART: např, cca, zejm</li>
          <li>PROPN: ČR, USA, LN, ODS, OSN, ČSFR, SR, NATO, ČSSD, ČT</li>
          <li>VERB-Fin: srov</li>
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
          <li>ADP: v, na, z, o, s, do, za, pro, k, po</li>
        </ul>
      </li>
      <li>Voc
        <ul>
          <li>ADP: ve, se, ze, ke, beze, ode, ku, skrze, přede, nade</li>
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
          <li>CCONJ: plus, krát, minus, mínus, děleno, kráte</li>
          <li>SYM: x, >, <, -, .</li>
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
          <li>DET: ty, ten, ti, ta</li>
        </ul>
      </li>
      <li>ADP
        <ul>
          <li>ADP: v, na, ve, vzhledem, ze, z, s, za, bez, po</li>
          <li>ADV: spolu, společně, co, nezávisle, současně, zároveň, blíž, souběžně, blíže, kolem</li>
          <li>NOUN: směrem, výměnou, tváří, ruku, bok</li>
          <li>VERB-Conv: Nehledě, počínaje</li>
          <li>X: a, à</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: m</li>
          <li>ADV: více, nejen, víc, co, méně</li>
          <li>DET: všeho</li>
          <li>NOUN: rok, měsíc, Týden, neděli, sobotu, suma, večer</li>
          <li>PART: přece</li>
          <li>VERB-Conv: chtě, chtíc</li>
          <li>VERB-Fin: stůj</li>
          <li>X: de, a, in, ex, nota</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>ADV: neřku</li>
          <li>CCONJ: a, nebo</li>
          <li>DET: to</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADV: poté, zatím</li>
          <li>CCONJ: i</li>
          <li>SCONJ: jestli, než, zda</li>
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
          <li>ADV: en, propos</li>
          <li>NOUN: PMC</li>
          <li>X: Corp, Inc, co, New, s, Wall, street, San, International, of</li>
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
          <li>ADJ: česko, tchaj, coca, izraelsko, americko, e, německo, ping, know, čínsko</li>
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
          <li>PROPN: Praha, Praze, ČR, USA, Prahy, Plzni, Německu, Německa, Brno, Kalifornii</li>
        </ul>
      </li>
      <li>Geo,Giv
        <ul>
          <li>ADJ: Martinina, Martininy</li>
          <li>PROPN: Evropě, Evropy, Evropa, Evropu, Virginii, Karolíně, Evropou, Martina, Karolína, Karolíny</li>
        </ul>
      </li>
      <li>Geo,Giv,Oth
        <ul>
          <li>ADJ: Petřiny</li>
          <li>PROPN: Petra, Viktorie, Viktoria, Marina, Beatrice, Viktorii, Albertě, Fatry, Victoria, Fatra</li>
        </ul>
      </li>
      <li>Geo,Nat
        <ul>
          <li>PROPN: Pražačce, Cikánka, Polka, Pražačka</li>
        </ul>
      </li>
      <li>Geo,Oth
        <ul>
          <li>PROPN: Yorku, Sparta, Kanadě, Sparty, Kanady, Kentucky, Columbia, Kanada, Illinois, Pentagonu</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>ADJ: Jonesův, Karlovy, Karlových, Jonesova, Bushova, Nobelovy, Bushovy, Lloydova, Reaganovy, Lloydovy</li>
          <li>PROPN: Jiří, Jan, John, Václav, Jana, Petr, Josef, Robert, Pavel, Karel</li>
        </ul>
      </li>
      <li>Giv,Nat
        <ul>
          <li>ADJ: Čechově, Irův, Němcův, Polákův, Pražákovo, Taliánův, Turkovi, Čechovo</li>
          <li>PROPN: Němci, Němců, Češi, Němec, Frank, Němce, Slováci, Čechů, Srbové, Srby</li>
        </ul>
      </li>
      <li>Giv,Oth
        <ul>
          <li>PROPN: Jitka, Dagmar, Vlasta, Dana, Lilly, Meredith, Felicia, Grada, Lada, Pace</li>
        </ul>
      </li>
      <li>Nat
        <ul>
          <li>ADJ: Američanovy, Američanův, Australanovo, Brazilcovy, Florenťanův, Pygmejova, Pygmejovými</li>
          <li>PROPN: Američané, Japonci, Rusové, Američanů, Sověti, američan, Francouzi, Židé, Židů, Američany</li>
        </ul>
      </li>
      <li>Oth
        <ul>
          <li>PROPN: LN, ODS, OSN, Sony, Vánoce, Ford, Jaguar, NATO, ČSSD, ČT</li>
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
          <li>NUM: 1, 2, 3, 4, 8, 10, 30, 5, 15, 20</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>NUM: II, I, III, IV, V, VI, VII, IX, XX, VIII</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>NUM: dva, tři, jeden, dvě, dvou, čtyři, pět, jedna, jednoho, jedné</li>
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
          <li>ADJ: blbé, blbý, Kytkový, blbá, srandovní, stereo, Devátý, Veverkové, Vystřelenýho, bezva</li>
          <li>ADJ-Part: Vystřelenýho, zakázaný, dané, focený, malovaný, nabízené, neopodstatněné, prohlídnuti, sbalený, spadeno</li>
          <li>ADP: narozdíl, vo</li>
          <li>ADV: dneska, teďka, furt, holt, akorát, tuhle, mínus, tehdá, takle, teďko</li>
          <li>AUX-Fin: sem, jseš, si, budem, nebudem, sme, bysme, bysem, ste</li>
          <li>AUX-Part: byly</li>
          <li>CCONJ: mínus</li>
          <li>DET: které, svojí, ty, naší, který, mojí, našim, těhle, jaký, vaší</li>
          <li>INTJ: hergot, sorry, kruci</li>
          <li>NOUN: průmyslovku, mami, babi, esesáci, naši, kafe, polívku, áčka, cestovky, polívky</li>
          <li>NOUN-Vnoun: downlinkování, uplinkování</li>
          <li>NUM: dvěmi, čtyr, čtyry, čtyřma</li>
          <li>PART: akorát, teda, přeci, jo, houby, jakože, jakto, Nashle</li>
          <li>PRON: jí, ní, jenž, lecos, náma, mi, von, nima, vam, veškerý</li>
          <li>PROPN: Massachussetts, Massachussets, Jeseníkách, Iránu, Špindlu, Libuš, Columbusu, Kája, Škvrňanech, Brasília</li>
          <li>SCONJ: jesli</li>
          <li>VERB-Conv: řka, řkouce</li>
          <li>VERB-Fin: řiká, neví, vzpomínam, řikám, můžem, jedem, navštěvujem, mam, pojedem, půjdem</li>
          <li>VERB-Inf: pomoct, běžkovat, řikat, ošukat, prohlídnout, píct, šukat, chatovat, dohlídnout, načančat</li>
          <li>VERB-Part: řikali, řikala, začla, prohlídli, začli, řikal, začlo, přilítli, řikalo, haprovala</li>
        </ul>
      </li>
      <li>Expr
        <ul>
          <li>ADJ: ultranacionalistické, ultrapravicová, Ultrapravicový, ultrapravicovou</li>
          <li>ADV: fest</li>
          <li>INTJ: Ježíš, Ježiš, ježíšmarjá</li>
          <li>NOUN: lidiček, fenečka, písmenka, vršíčku, albíčko, bandičkou, kolínek, ramínka, vlákénka, znaménkem</li>
          <li>PROPN: Jiřinka, Ivouš, Jiřinkou, Milánek, Vladkem, Vladkovi</li>
          <li>VERB-Part: Vycachtala, vykoumaly, zabrnkal, zasebevraždil</li>
        </ul>
      </li>
      <li>Slng
        <ul>
          <li>ADJ: vytrejdován, škodovácké, škodováckých, ajznboňácká, crackových, famáckého, greenmailové, mariňácký, maržových, podsedním</li>
          <li>ADJ-Part: vytrejdován</li>
          <li>NOUN: developer, developeři, KEG, developery, kšefty, parničkách, developera, křídlovák, putu, blokového</li>
          <li>PROPN: Kulaťáku, Pláňáku, Tinseltown, Četky</li>
          <li>VERB-Inf: vytrejdovat</li>
          <li>VERB-Part: čmajznul</li>
        </ul>
      </li>
      <li>Vrnc
        <ul>
          <li>ADJ: naprochčené, žížnivá</li>
          <li>AUX-Fin: nésó</li>
          <li>INTJ: danaj</li>
          <li>NOUN: žebř, kilometrovkou, hrozna, Gatě, Husličky, děvčice, hadrou, kilometrovce, koblihy, konzerty</li>
          <li>PROPN: Čehúny, Čehún</li>
          <li>VERB-Part: naháňali, zapomněli, zmátořil, zmátořila</li>
        </ul>
      </li>
      <li>Vulg
        <ul>
          <li>ADJ: bordelové, nablito</li>
          <li>ADJ-Part: nablito</li>
          <li>NOUN: hajzl, kundičku, kundy, čuráka, Zmrd, bordelář, bordeláři, hajzlbába, kundičky, kurevnictví</li>
          <li>PART: kurva</li>
          <li>VERB-Inf: VOŠUKAT, ošoustat</li>
          <li>VERB-Part: vymrdal, chcal, nablil</li>
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
          <li>ADJ: ní, ního, ním, dceřinné, dceřinná, ních, zbitečných, Božíkovi, Courieově, Kajn</li>
          <li>ADP: ala</li>
          <li>ADV: gde, jíž</li>
          <li>AUX-Fin: Jdou</li>
          <li>DET: Onyno, Vaši</li>
          <li>NOUN: dne, vánoce, cherry, vánocích, přívěšek, vánocemi, velikonoce, vizum, vánoc, Devtipnice</li>
          <li>PRON: gdo, jíž, mě</li>
          <li>PROPN: Reuter, Harachova, Lybii, Škrvňanech, Lybie, Pacici, Reutera, Bábe, Carboly, Curichu</li>
          <li>SCONJ: gdyž</li>
          <li>SYM: |</li>
          <li>VERB-Fin: příspívají</li>
          <li>VERB-Inf: odpřísáhnout, glajšaltovat</li>
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
      <li>VERB-Fin--NOUN (629)</li>
      <li>VERB-Fin--NOUN-Acc (2)</li>
      <li>VERB-Fin--NOUN-Gen (889)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(kolem) (11)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(mezi) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(na) (24)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(okolo) (4)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(přes) (17)</li>
      <li>VERB-Fin--NOUN-Nom (41948)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(proti) (1)</li>
      <li>VERB-Fin--PRON (91)</li>
      <li>VERB-Fin--PRON-Gen (42)</li>
      <li>VERB-Fin--PRON-Gen-ADP(kolem) (2)</li>
      <li>VERB-Fin--PRON-Gen-ADP(na) (1)</li>
      <li>VERB-Fin--PRON-Gen-ADP(okolo) (2)</li>
      <li>VERB-Fin--PRON-Nom (3914)</li>
      <li>VERB-Inf--NOUN (54)</li>
      <li>VERB-Inf--NOUN-Gen (53)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(na) (3)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(okolo) (1)</li>
      <li>VERB-Inf--NOUN-Loc-ADP(po) (1)</li>
      <li>VERB-Inf--NOUN-Nom (2228)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Nom (148)</li>
      <li>VERB-Part--NOUN (593)</li>
      <li>VERB-Part--NOUN-Acc-ADP(na) (1)</li>
      <li>VERB-Part--NOUN-Gen (1041)</li>
      <li>VERB-Part--NOUN-Gen-ADP(kolem) (12)</li>
      <li>VERB-Part--NOUN-Gen-ADP(na) (32)</li>
      <li>VERB-Part--NOUN-Gen-ADP(okolo) (5)</li>
      <li>VERB-Part--NOUN-Gen-ADP(přes) (17)</li>
      <li>VERB-Part--NOUN-Loc-ADP(po) (3)</li>
      <li>VERB-Part--NOUN-Nom (50497)</li>
      <li>VERB-Part--NOUN-Nom-ADP(pro) (2)</li>
      <li>VERB-Part--NOUN-Nom-ADP(proti) (1)</li>
      <li>VERB-Part--PRON (121)</li>
      <li>VERB-Part--PRON-Gen (68)</li>
      <li>VERB-Part--PRON-Gen-ADP(na) (1)</li>
      <li>VERB-Part--PRON-Gen-ADP(přes) (2)</li>
      <li>VERB-Part--PRON-Nom (3879)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN (1)</li>
      <li>VERB-Conv--NOUN-Acc (42)</li>
      <li>VERB-Conv--PRON-Acc (3)</li>
      <li>VERB-Fin--NOUN (160)</li>
      <li>VERB-Fin--NOUN-Acc (31410)</li>
      <li>VERB-Fin--NOUN-Gen (1606)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(na) (7)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(o) (4)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(pod) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(z) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(za) (1)</li>
      <li>VERB-Fin--NOUN-Nom (291)</li>
      <li>VERB-Fin--NOUN-Voc (4)</li>
      <li>VERB-Fin--PRON (28)</li>
      <li>VERB-Fin--PRON-Acc (5213)</li>
      <li>VERB-Fin--PRON-Gen (25)</li>
      <li>VERB-Fin--PRON-Nom (26)</li>
      <li>VERB-Inf--NOUN (82)</li>
      <li>VERB-Inf--NOUN-Acc (18699)</li>
      <li>VERB-Inf--NOUN-Gen (601)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(na) (5)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(o) (1)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(z) (1)</li>
      <li>VERB-Inf--NOUN-Nom (93)</li>
      <li>VERB-Inf--NOUN-Voc (1)</li>
      <li>VERB-Inf--PRON (2)</li>
      <li>VERB-Inf--PRON-Acc (3204)</li>
      <li>VERB-Inf--PRON-Gen (5)</li>
      <li>VERB-Inf--PRON-Nom (50)</li>
      <li>VERB-Part--NOUN (156)</li>
      <li>VERB-Part--NOUN-Acc (36088)</li>
      <li>VERB-Part--NOUN-Gen (1875)</li>
      <li>VERB-Part--NOUN-Gen-ADP(na) (2)</li>
      <li>VERB-Part--NOUN-Gen-ADP(z) (2)</li>
      <li>VERB-Part--NOUN-Nom (235)</li>
      <li>VERB-Part--NOUN-Voc (9)</li>
      <li>VERB-Part--PRON (54)</li>
      <li>VERB-Part--PRON-Acc (6542)</li>
      <li>VERB-Part--PRON-Gen (21)</li>
      <li>VERB-Part--PRON-Nom (10)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (7)</li>
      <li>VERB-Fin--NOUN-Acc (134)</li>
      <li>VERB-Fin--NOUN-Gen (10)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(na) (9)</li>
      <li>VERB-Fin--NOUN-Nom (30)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (55)</li>
      <li>VERB-Fin--PRON-Nom (3)</li>
      <li>VERB-Inf--NOUN (9)</li>
      <li>VERB-Inf--NOUN-Acc (104)</li>
      <li>VERB-Inf--NOUN-Gen (11)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(k) (1)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(na) (1)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(za) (1)</li>
      <li>VERB-Inf--NOUN-Nom (12)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (42)</li>
      <li>VERB-Part--NOUN (32)</li>
      <li>VERB-Part--NOUN-Acc (262)</li>
      <li>VERB-Part--NOUN-Gen (18)</li>
      <li>VERB-Part--NOUN-Gen-ADP(na) (8)</li>
      <li>VERB-Part--NOUN-Nom (25)</li>
      <li>VERB-Part--PRON (4)</li>
      <li>VERB-Part--PRON-Acc (168)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 2431 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: stát se, podívat se, jmenovat se, dostat se, snažit se, myslit si, vrátit se, zdát se, líbit se, podařit se, pamatovat si, týkat se, domnívat se, rozhodnout se, narodit se, zabývat se, zvýšit se, objevit se, dát se, sejít se, pohybovat se, změnit se, zabývající se, bát se, týkající se, setkat se, podílet se, pokusit se, starat se, vracet se, ptát se, vzpomenout si, učit se, konat se, zúčastnit se, dohodnout se, jednat se, věnovat se, dívat se, vyjádřit se, dozvědět se, povídat si, obávat se, scházet se, stávat se, seznámit se, vzpomínat si, naučit se, pokoušet se, dít se</li>
</ul>

<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 1599 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: dát se, očekávat se, říkat se, mít se, muset se, dělat se, prodávat se, moci se, předpokládat se, hrát se, uvádět se, obchodovat se, začít se, vídat se, mluvit se, používat se, počítat se, poznat se, povídat se, jít se, znát se, chodit se, jezdit se, platit se, jet se, najít se, psát se, odhadovat se, brát se, uskutečnit se, hovořit se, prodat se, vidět se, smět se, udělat se, dávat se, čekat se, vyrábět se, vědět se, provádět se, stavět se, chtít se, nabízet se, uvažovat se, připravovat se, říci se, nosit se, zvýšit se, jednat se, hledat se</li>
</ul>

<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 538 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: představit se, vídat se, seznámit se, omluvit se, znát se, považovat se, schovat se, vidět se, vyfotit se, brát se, nechat se, fotit se, navštěvovat se, omlouvat se, poznat se, prosadit se, schovávat se, chránit se, slyšet se, zapsat se, oběsit se, vyfotografovat se, pojistit se, prezentovat se, prohlásit se, připojistit se, fotografovat se, obléci se, připravit se, připravovat se, udržet se, uživit se, vystavovat se, zachránit se, zaregistrovat se, živit se, dát se, mít se, nechávat se, obohatit se, odradit se, potkat se, profilovat se, převléknout se, rozdělit se, skrývat se, bránit se, hájit se, nabízet se, oblékat se</li>
    <ul>
      <li>Out of those, 4 lemmas occurred more than once, but never without a reflexive dependent. Examples: připojistit, zabarikádovat, dotýkat, holit</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 12 relation subtypes: <a>acl:relcl</a>, <a>advcl:pred</a>, <a>advmod:emph</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>det:numgov</a>, <a>det:nummod</a>, <a>expl:pass</a>, <a>expl:pv</a>, <a>nsubj:pass</a>, <a>nummod:gov</a>, <a>obl:arg</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>expl</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a></li>
</ul>
