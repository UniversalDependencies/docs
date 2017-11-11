---
layout: base
title:  'UD_Polish'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Polish

Language: [Polish](../pl/overview/pl-hub.html) (code: `pl`)<br/>
Family: Indo-European, Slavic

This treebank has been part of Universal Dependencies since the UD v1.2 release.

The following people have contributed to making this treebank part of UD: Daniel Zeman, Jan Mašek, Rudolf Rosa.

Repository: [UD_Polish](https://github.com/UniversalDependencies/UD_Polish)

License: GNU GPL 3.0

Genre: fiction, nonfiction, news

Questions, comments?
General annotation questions (either Polish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Polish/issues).
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

The UD Polish treebank is based on “Składnica zależnościowa” (the Polish dependency treebank)
version 0.5.




The data was first converted to the Prague dependency style as a part of HamleDT;
then it was automatically converted to Universal Dependencies (HamleDT 3.0, 2015). The first
release of Universal Dependencies that includes this treebank is UD v1.2 in November 2015. It is
essentially the HamleDT conversion but the data is not identical to HamleDT 3.0 because the
conversion procedure has been further improved.

## References:

* http://zil.ipipan.waw.pl/Sk%C5%82adnica ... Składnica zależnościowa
* http://ufal.mff.cuni.cz/hamledt ... HamleDT
* http://ufal.mff.cuni.cz/treex ... Treex is the software used for conversion
* http://ufal.mff.cuni.cz/interset ... Interset was used to convert POS tags and features

@inproceedings{pl,
author = {Wr{\'o}blewska, Alina and Przepi{\'o}rkowski, Adam},
title = {Projection-based Annotation of a {Polish} Dependency Treebank},
booktitle = {Proceedings of the Ninth International Conference on Language Resources and Evaluation, LREC},
pages = {2306--2312},
address = {Reykjavík, Iceland},
year = {2014}
}


## Acknowledgments

# Statistics of UD Polish

## POS Tags

[ADJ](pl-pos-ADJ.html) – [ADP](pl-pos-ADP.html) – [ADV](pl-pos-ADV.html) – [AUX](pl-pos-AUX.html) – [CCONJ](pl-pos-CCONJ.html) – [DET](pl-pos-DET.html) – [NOUN](pl-pos-NOUN.html) – [NUM](pl-pos-NUM.html) – [PART](pl-pos-PART.html) – [PRON](pl-pos-PRON.html) – [PROPN](pl-pos-PROPN.html) – [PUNCT](pl-pos-PUNCT.html) – [SCONJ](pl-pos-SCONJ.html) – [VERB](pl-pos-VERB.html) – [X](pl-pos-X.html)

## Features

[Abbr](pl-feat-Abbr.html) – [AdpType](pl-feat-AdpType.html) – [Animacy](pl-feat-Animacy.html) – [Aspect](pl-feat-Aspect.html) – [Case](pl-feat-Case.html) – [Degree](pl-feat-Degree.html) – [Gender](pl-feat-Gender.html) – [Hyph](pl-feat-Hyph.html) – [Mood](pl-feat-Mood.html) – [Number](pl-feat-Number.html) – [Number[psor]](pl-feat-Number-psor.html) – [NumType](pl-feat-NumType.html) – [Person](pl-feat-Person.html) – [Polarity](pl-feat-Polarity.html) – [Poss](pl-feat-Poss.html) – [PrepCase](pl-feat-PrepCase.html) – [PronType](pl-feat-PronType.html) – [Reflex](pl-feat-Reflex.html) – [Tense](pl-feat-Tense.html) – [Typo](pl-feat-Typo.html) – [Variant](pl-feat-Variant.html) – [VerbForm](pl-feat-VerbForm.html) – [Voice](pl-feat-Voice.html)

## Relations

[acl](pl-dep-acl.html) – [advcl](pl-dep-advcl.html) – [advmod](pl-dep-advmod.html) – [amod](pl-dep-amod.html) – [appos](pl-dep-appos.html) – [aux](pl-dep-aux.html) – [aux:pass](pl-dep-aux-pass.html) – [case](pl-dep-case.html) – [cc](pl-dep-cc.html) – [ccomp](pl-dep-ccomp.html) – [conj](pl-dep-conj.html) – [cop](pl-dep-cop.html) – [csubj](pl-dep-csubj.html) – [det](pl-dep-det.html) – [det:numgov](pl-dep-det-numgov.html) – [det:nummod](pl-dep-det-nummod.html) – [expl:pv](pl-dep-expl-pv.html) – [fixed](pl-dep-fixed.html) – [flat](pl-dep-flat.html) – [iobj](pl-dep-iobj.html) – [mark](pl-dep-mark.html) – [nmod](pl-dep-nmod.html) – [nsubj](pl-dep-nsubj.html) – [nsubj:pass](pl-dep-nsubj-pass.html) – [nummod](pl-dep-nummod.html) – [obj](pl-dep-obj.html) – [obl](pl-dep-obl.html) – [obl:agent](pl-dep-obl-agent.html) – [obl:arg](pl-dep-obl-arg.html) – [punct](pl-dep-punct.html) – [root](pl-dep-root.html) – [xcomp](pl-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 8227 sentences, 82788 tokens and 83571 syntactic words.</li>
<li>This corpus contains 12592 tokens (15%) that are not followed by a space.</li>
<li>This corpus does not contain words with spaces.</li>
<li>This corpus contains 90 types of words that contain both letters and punctuation. Examples: PiS-u, 70-lecia, ub.r, 11-latek, 12-letni, 12-tym, 1299-tym, 13-miesięcznego, 14-letni, 17-letnia, 18-latce, 185-osobową, 22-letni, 25-procentowy, 26-latek, 26-letni, 28-letnią, 33-letniemu, 35-letnią, 36-letnia, 37-letnia, 4,5-metrowej, 40-lecia, 40-osobowa, 43-letni, 46-letni, 47-letni, 49-letniego, 5-minutowych, 55-leciem, 5–ta, 6,5-godzinnej, 6-latka, 6-letni, 63-letni, 65-letniego, 65-tysięcznej, 67-letni, 6­9-letni, 7-kondygnacyjnego, 81-letnia, 87-letni, 9-letnia, 9-miesięczna, 90-letniej, Ab–Rama, Al-Qaidy, BIG-u, CB-radio, D'Arc</li>
<li>This corpus contains 745 multi-word tokens. On average, one multi-word token consists of 2.05 syntactic words.</li>
<li>There are 513 types of multi-word tokens. Examples: byłem, byłoby, byłam, mieliśmy, chciałbym, chciałem, chciałby, miałam, miałem, widziałem, bym, byłby, mogłem, zostałem, mogłaby, spotkaliśmy, widziałam, czułem, czytałem, musiałem, myślałem, mógłby, spotkałem, wiedziałem, znałem, zrobiłem, byłbym, byłeś, chciałam, dostałam, gdybym, miałby, mógłbyś, poszliśmy, poszłam, powinnam, rozmawialiśmy, siedziałam, spodziewałem, stwierdziłem, usłyszałem, widzieliśmy, wiedziałam, wróciłem, wyszliśmy, zaczęliśmy, zauważyłem, znalazłam, zobaczyłem, zrobiliśmy.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ, SYM</li>
<li>This corpus contains 67 word types tagged as particles (PART): Ależ, Azaliż, Czyż, Czyżby, Dosyć, Istotnie, Niechaj, Niemalże, Toż, Zarazem, ani, aż, chociaż, choć, choćby, chyba, czy, dopiero, dość, głównie, i, jakby, jakoby, jednak, jedynie, jeszcze, już, może, nawet, nazbyt, niby, nie, niech, niemal, niestety, no, oczywiście, około, oto, pewnie, pewno, podobno, ponad, ponadto, poniekąd, ponoć, prawdopodobnie, prawie, przecież, przynajmniej, przynamniej, raczej, również, także, też, tylko, wszakże, za, zaledwie, zapewne, zbyt, zgoła, znowu, znów, zresztą, zwłaszcza, że</li>
</ul>

<ul>
<li>This corpus contains 18 lemmas tagged as pronouns (PRON): co, cokolwiek, coś, ja, kto, ktokolwiek, ktoś, my, nic, nikt, on, siebie, się, to, ty, wszyscy, wszystko, wy</li>
</ul>

<ul>
<li>This corpus contains 25 lemmas tagged as determiners (DET): jaki, jakikolwiek, jakiś, każdy, kilka, kilkadziesiąt, kilkanaście, kilkaset, który, którykolwiek, któryś, mój, nasz, niejaki, niektóry, swój, taki, tamten, ten, twój, wasz, wszelki, wszystek, ów, żaden</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 18 lemmas tagged as auxiliaries (AUX): bywać, być, informować, okazywać, poczuć, pozostawać, pozostać, robić, spędzić, stawać, stać, to, wydawać, wydać, zdawać, zostawać, zostać, zrobić</li>
</ul>

<ul>
<li>Out of the above, 18 lemmas occurred sometimes as AUX and sometimes as VERB: bywać, być, informować, okazywać, poczuć, pozostawać, pozostać, robić, spędzić, stawać, stać, to, wydawać, wydać, zdawać, zostawać, zostać, zrobić</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a>
<ul>
  <li>Conv
  <ul>
    <li>VERB: patrząc, mając, wracając, czekając, posługując, tworząc, usiłując, zarzucając, Mijając, biorąc</li>
  </ul>
  </li>
  <li>Fin
  <ul>
    <li>AUX: jest, em, by, m, będzie, są, śmy, będą, eś, jestem</li>
    <li>VERB: ma, jest, może, dziękuję, mają, mam, wiem, proszę, mogą, chce</li>
  </ul>
  </li>
  <li>Inf
  <ul>
    <li>AUX: być, zostać, stać</li>
    <li>VERB: powiedzieć, zrobić, znaleźć, być, mieć, robić, wrócić, wyjść, zmienić, zobaczyć</li>
  </ul>
  </li>
  <li>Part
  <ul>
    <li>ADJ: przyjęta, znaleziono, prowadzone, dotyczące, wyczerpana, zatrzymano, zatrzymany, przeprowadzono, przygotowany, rozegrano</li>
    <li>AUX: był, była, było, został, były, została, byli, zostało, zostali, zostały</li>
    <li>VERB: było, miał, chciał, miała, był, udało, mógł, mieli, musiał, była</li>
  </ul>
  </li>
  <li>Vnoun
  <ul>
    <li>NOUN: głosowania, odrzucenie, przyjęcie, przyjęciem, bycia, działania, naciśnięcie, nieuzyskania, otwarcie, stosowania</li>
  </ul>
  </li>
</ul>
</li>
</ul>

<h3>Nominal Features</h3>

<li><a>Gender</a>
  <ul>
    <li>Fem
      <ul>
        <li>ADJ: pierwszej, całą, jednej, ostatniej, polskiej, powinna, drugiej, różnych, sama, innych</li>
        <li>ADJ-Part: przyjęta, wyczerpana, prowadzone, Wezwana, będącą, dowodzona, gotowane, grająca, panującej, planowana</li>
        <li>AUX-Part: była, została, były, stała, wydała, stawała, stały, zostały</li>
        <li>DET: tej, która, ta, które, której, tę, tych, te, kilka, naszej</li>
        <li>NOUN: pracy, pani, osób, sprawie, chwili, chwilę, osoby, ulicy, większość, rzeczy</li>
        <li>NUM: dwie, 30, cztery, obie, wiele, 10, dwóch, pięć, wielu, 3</li>
        <li>PRON: jej, ją, mnie, niej, mi, ich, ona, nią, nich, ja</li>
        <li>PROPN: Polski, Polsce, Warszawie, Polska, Warszawy, Rosji, Europie, Marta, Barbara, Europy</li>
        <li>VERB-Part: miała, była, mogła, chciała, zaczęła, dostała, musiała, rozpoczęła, trafiła, widziała</li>
      </ul>
    </li>
    <li>Masc
      <ul>
        <li>ADJ: cały, pierwszy, sam, nowego, nowy, powinien, jeden, dobry, inny, drugi</li>
        <li>ADJ-Part: zatrzymany, przygotowany, jadący, poinformowany, protestujących, przedstawiony, pędzącego, zamieniony, zapisanych, zatrzymani</li>
        <li>AUX-Part: był, został, byli, były, zostali, zostały, stał, poczuli, pozostał, stawał</li>
        <li>DET: ten, tym, który, tego, którzy, kilka, którym, które, jakiś, każdy</li>
        <li>NOUN: pan, roku, lat, domu, czasie, ludzi, czas, pana, policjanci, sposób</li>
        <li>NUM: dwa, wielu, dwóch, trzy, trzech, 10, wiele, 30, 15, dużo</li>
        <li>PRON: go, jego, ich, mu, mnie, mi, on, nas, kto, nim</li>
        <li>PROPN: Andrzej, Jan, Jerzy, SLD, Adam, Polaków, Poznaniu, Grzegorz, Piotr, Polacy</li>
        <li>VERB-Part: miał, chciał, był, mógł, mieli, musiał, mogli, mówił, widział, powiedział</li>
      </ul>
    </li>
    <li>Neut
      <ul>
        <li>ADJ: duże, nowe, samo, całe, całym, dobre, powinno, znaleziono, polskiego, samym</li>
        <li>ADJ-Part: znaleziono, zatrzymano, przeprowadzono, rozegrano, stwierdzono, wprowadzono, odnaleziono, otwarte, poddano, postawiono</li>
        <li>AUX-Part: było, zostało, były, stało, Wydało, zostały</li>
        <li>DET: to, które, swoje, te, tym, takie, takiego, tego, swoim, tych</li>
        <li>NOUN: dzieci, życie, głosowania, miejscu, miasta, miejsce, drzwi, oczy, życia, pytanie</li>
        <li>NOUN-Vnoun: głosowania, odrzucenie, przyjęcie, przyjęciem, bycia, działania, naciśnięcie, nieuzyskania, otwarcie, stosowania</li>
        <li>NUM: wiele, wielu, dwa, dużo, trzy, więcej, sporo, tyle, 10, 16</li>
        <li>PRON: to, co, tym, coś, tego, wszystko, nic, wszystkim, je, czym</li>
        <li>PROPN: USA, Niemiec, PSL, PiS, Stanów, Kielcach, Niemczech, PKP, Zakopanego, Betlejem</li>
        <li>VERB-Part: było, udało, stało, doszło, okazało, miało, zrobiło, chodziło, należało, odbyło</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Animacy</a>
  <ul>
    <li>Hum
      <ul>
        <li>ADJ: sam, powinien, młodych, II, inny, polskich, jeden, polscy, powinni, przeciwny</li>
        <li>ADJ-Part: jadący, protestujących, zapisanych, zatrzymani, zatrzymany, atakowany, nastroszony, poinformowany, przygotowany, stojący</li>
        <li>AUX-Part: był, został, byli, zostali, poczuli, stał, Wydawał, informowali, pozostawali, pozostał</li>
        <li>DET: którzy, który, ten, każdy, swoich, którym, których, wszystkich, ci, nasi</li>
        <li>NOUN: pan, ludzi, pana, policjanci, ludzie, panie, prezydenta, ojciec, prezydent, minister</li>
        <li>NUM: wielu, dwóch, obaj, trzech, czterech, dwaj, 500, sześciu, 15, 40</li>
        <li>PRON: jego, go, mu, mnie, ich, mi, nas, kto, on, ktoś</li>
        <li>PROPN: Andrzej, Jan, Jerzy, Adam, Polaków, Grzegorz, Piotr, Polacy, Adama, Bóg</li>
        <li>VERB-Part: miał, chciał, mieli, był, mógł, musiał, mogli, mówił, widział, powiedział</li>
      </ul>
    </li>
    <li>Inan
      <ul>
        <li>ADJ: cały, pierwszy, nowego, nowy, całego, dobry, kolejny, nowym, przyszłym, wielki</li>
        <li>ADJ-Part: przedstawiony, zamieniony, założony, dobiegające, dotyczące, istniejących, leżący, mającego, oddany, poświęcony</li>
        <li>AUX-Part: był, został, były, zostały, stawał, Zrobił, pozostał, stał, zdawały</li>
        <li>DET: ten, tym, tego, kilka, który, które, jakiś, którym, swój, wszystkie</li>
        <li>NOUN: roku, lat, domu, czasie, czas, sposób, raz, dni, czasu, kraju</li>
        <li>NUM: dwa, trzy, wiele, 10, dwóch, trzech, 30, dużo, 15, 5</li>
        <li>PRON: go, je, jego, ich, on, nim, nich, niego, one, mu</li>
        <li>PROPN: SLD, Poznaniu, Krakowie, Jorku, Wrocławiu, Izraela, Olsztynie, Paryża, PiS, Poznania</li>
        <li>VERB-Part: był, przyjął, odrzucił, miał, rozpoczął, zakończył, padł, został, dotarł, minął</li>
      </ul>
    </li>
    <li>Nhum
      <ul>
        <li>ADJ: Białym, Boży, Marsylski, Rajskiego, Stołowego, Trzymiesięczne, Tępe, Zwycięskiego, amerykańskim, biały</li>
        <li>ADJ-Part: odrobaczony, opisywane, owocujący, pokrojone, pędzącego, rozgrzanego, siedzący, szkolone, trzymającego, ubłocony</li>
        <li>AUX-Part: był, został</li>
        <li>DET: kilkuset, który, twój, Wszystkie, każdego, ten, jakiś, kilkaset, które, którym</li>
        <li>NOUN: złotych, dolarów, konie, pies, ducha, psa, duch, konia, psy, Kot</li>
        <li>NUM: 1500, 300, trzy, 1,50, 1.000, 1.500, 10.000, 11, 125, 1300</li>
        <li>PRON: go, jego, ich, mu, nim, niego, nimi</li>
        <li>PROPN: Dingiem, Humphrey, Odiego, Pożeracz, Wujka, Canona, Dratewkę, Dunaja, Energetyka, Ericsson</li>
        <li>VERB-Part: usiadł, Były, Machał, Przyszedł, Stał, Wydzierały, Wymarł, był, gnębił, grał</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Number</a>
  <ul>
    <li>Plur
      <ul>
        <li>ADJ: różnych, innych, inne, nowe, polskich, młodych, nowych, pierwszych, pozostałych, kolejne</li>
        <li>ADJ-Part: prowadzone, dotyczące, protestujących, wspomnianych, wybranych, wymienionych, zapisanych, zatrzymani, zbliżających, związane</li>
        <li>AUX-Fin: są, śmy, będą, będziemy, jesteśmy, zostaną, ście, zostają, Jesteście, stają</li>
        <li>AUX-Part: były, byli, zostali, zostały, poczuli, informowali, pozostawali, spędzili, stały, zdawały</li>
        <li>DET: które, kilka, te, tych, którzy, wszystkie, których, swoich, wszystkich, swoje</li>
        <li>NOUN: lat, ludzi, osób, dzieci, policjanci, dni, ludzie, drzwi, osoby, oczy</li>
        <li>NOUN-Vnoun: przeszukiwania</li>
        <li>NUM: dwa, wielu, dwóch, trzy, wiele, trzech, 10, dwie, 30, dużo</li>
        <li>PRON: ich, nich, nas, je, im, nam, one, nimi, wszyscy, oni</li>
        <li>PROPN: Polaków, USA, Polacy, Niemcy, Niemiec, Stanów, Kaczyńscy, Kielcach, Niemczech, PKP</li>
        <li>VERB-Fin: mają, mogą, są, Przystępujemy, mamy, chcą, możemy, muszą, robią, twierdzą</li>
        <li>VERB-Part: mieli, mogli, trwały, mogły, spotkali, zaczęli, znaleźli, były, chcieli, wzięli</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>ADJ: cały, pierwszy, nowego, sam, II, nowy, pierwszej, powinien, jeden, polskiego</li>
        <li>ADJ-Part: przyjęta, znaleziono, wyczerpana, zatrzymano, zatrzymany, przeprowadzono, przygotowany, rozegrano, stwierdzono, wprowadzono</li>
        <li>AUX-Fin: jest, em, m, będzie, eś, jestem, zostanie, ś, będę, jesteś</li>
        <li>AUX-Part: był, była, było, został, została, zostało, stała, stał, pozostał, stawał</li>
        <li>DET: ten, tej, tym, tego, który, która, to, ta, którym, której</li>
        <li>NOUN: pan, roku, pracy, pani, domu, czasie, życie, czas, pana, sposób</li>
        <li>NOUN-Vnoun: głosowania, odrzucenie, przyjęcie, przyjęciem, bycia, działania, naciśnięcie, nieuzyskania, otwarcie, stosowania</li>
        <li>NUM: półtora, półtorej</li>
        <li>PRON: to, jego, go, jej, mnie, co, mu, mi, tym, ją</li>
        <li>PROPN: Polski, Polsce, Warszawie, Polska, Andrzej, Jan, Jerzy, SLD, Warszawy, Adam</li>
        <li>VERB-Fin: ma, jest, może, dziękuję, mam, wiem, proszę, chce, należy, musi</li>
        <li>VERB-Part: było, miał, chciał, miała, był, udało, mógł, musiał, była, mogła</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Case</a>
  <ul>
    <li>Acc
      <ul>
        <li>ADJ: cały, pierwszy, nowe, duże, całą, inne, całe, pierwsze, drugą, kolejny</li>
        <li>ADJ-Part: będącą, dotyczące, idące, prowadzone, umówione, uszkodzony, wybite, znajdujące, związane, zwęglone</li>
        <li>ADP: na, w, przez, o, za, po, pod, temu, co, we</li>
        <li>DET: ten, kilka, swoje, te, tę, które, jakiś, swój, takie, jakieś</li>
        <li>NOUN: raz, sposób, chwilę, miejsce, czas, życie, pracę, temat, udział, głowę</li>
        <li>NOUN-Vnoun: odrzucenie, przyjęcie, naciśnięcie, zamknięcie, nadanie, obniżenie, odwołanie, podanie, pokazanie, przekonanie</li>
        <li>NUM: dwa, trzy, wiele, dużo, 10, dwie, 30, cztery, pięć, 15</li>
        <li>PRON: go, to, mnie, ją, co, je, coś, nas, ich, siebie</li>
        <li>PROPN: Polaków, Polskę, Adasia, Europę, Karola, Pawła, Piotra, Tadeusza, Waltera, Wiktora</li>
      </ul>
    </li>
    <li>Dat
      <ul>
        <li>ADJ: młodym, nowym, własnym, 33-letniemu, Całej, Dziwnej, Okręgowemu, Panującej, Piotrowej, Romantycznym</li>
        <li>ADJ-Part: Panującej, bitemu, działającym, egzaminującej, jadącym, nagromadzonemu, opalającej, przedstawiającym, przymuszanym, sąsiadującym</li>
        <li>ADP: dzięki, przeciwko, ku, wbrew, przeciw</li>
        <li>DET: którym, swoim, któremu, tym, wszystkim, naszym, swemu, swojej, takim, tej</li>
        <li>NOUN: panu, ludziom, posłowi, pani, dzieciom, policji, dziennikarzom, komisji, lekarzom, ministrowi</li>
        <li>NOUN-Vnoun: Określeniu, Poparzeniu, badaniu, lekceważeniu, odwołaniu, podwyższaniu, ustaleniu, zakwestionowaniu, zawieszeniu, zgnieceniu</li>
        <li>NUM: wielu, 2,3, 20, 43, 80, czterem, obu, trzem</li>
        <li>PRON: mu, mi, sobie, jej, ci, im, nam, temu, wam, nikomu</li>
        <li>PROPN: Dżabie, WKU, Arturasowi, BBWR, Banderze, Bartnikowi, Beacie, Bogu, Borysowi, Bożenom</li>
      </ul>
    </li>
    <li>Gen
      <ul>
        <li>ADJ: nowego, różnych, innych, polskiego, całego, jednego, młodych, nowych, polskiej, II</li>
        <li>ADJ-Part: wybranych, wymienionych, zapisanych, Zjednoczonych, dotkniętego, dotyczących, istniejących, mającego, połączonych, pracujących</li>
        <li>ADP: do, z, od, dla, ze, bez, u, podczas, wobec, wśród</li>
        <li>DET: tego, tej, tych, których, swoich, takiego, swojego, naszej, takich, swojej</li>
        <li>NOUN: lat, roku, pracy, osób, domu, głosowania, czasu, miasta, pana, ludzi</li>
        <li>NOUN-Vnoun: głosowania, bycia, działania, nieuzyskania, stosowania, tworzenia, korzystania, przeprowadzenia, rozpoczęcia, skrawania</li>
        <li>NUM: wielu, trzech, dwóch, 10, obu, 3, 15, 30, pięciu, 4</li>
        <li>PRON: jego, ich, jej, tego, nich, mnie, siebie, nic, niego, nas</li>
        <li>PROPN: Polski, Warszawy, Adama, Europy, Polaków, Rosji, SLD, USA, Niemiec, Piotra</li>
      </ul>
    </li>
    <li>Ins
      <ul>
        <li>ADJ: jednym, ważnym, innymi, wielkim, innym, całym, całą, drugim, jedynym, nowym</li>
        <li>ADJ-Part: uszkodzonym, dominującym, dotyczącymi, doznaną, kochaną, kryjącymi, kupionymi, likwidującą, mieszczącym, myślącym</li>
        <li>ADP: z, przed, nad, za, ze, pod, przede, poza, między, pomiędzy</li>
        <li>DET: tym, naszym, swoim, tą, którym, moim, każdym, którymi, moimi, takimi</li>
        <li>NOUN: głową, razem, czasem, zdaniem, wodą, pomocą, ramionami, sprawą, trudem, wieczorem</li>
        <li>NOUN-Vnoun: przyjęciem, utrzymaniem, aresztowaniem, doświadczeniem, kontynuowaniem, nazwaniem, obcięciem, odesłaniem, opracowaniem, opuszczeniem</li>
        <li>NUM: dwoma, 3, 4, trzema, 1080, 13, 2, 205, 23, 6</li>
        <li>PRON: tym, wszystkim, nimi, nim, sobą, nią, kim, czym, mną, czymś</li>
        <li>PROPN: Dingiem, Krakowem, NATO, Niemcami, Polakiem, Polską, Żydem, Albanią, Aleksandrem, Bagsikiem</li>
      </ul>
    </li>
    <li>Loc
      <ul>
        <li>ADJ: przyszłym, samym, ostatniej, jednej, różnych, całym, pierwszej, innych, nowym, pewnym</li>
        <li>ADJ-Part: wspomnianych, prowadzonym, przyćmionym, zorganizowanej, Zespolonym, adoptowanym, cuchnącym, czekającym, dotyczącej, gasnącym</li>
        <li>ADP: w, na, po, o, przy, we</li>
        <li>DET: tym, tej, którym, tych, której, których, swoim, moim, naszym, wszystkich</li>
        <li>NOUN: roku, czasie, sprawie, miejscu, razie, chwili, domu, końcu, ulicy, ciągu</li>
        <li>NOUN-Vnoun: odejściu, przewiezieniu, wycofaniu, bieganiu, czyszczeniu, finansowaniu, informowaniu, istnieniu, jedzeniu, kierowaniu</li>
        <li>NUM: wielu, dwóch, trzech, czterech, dziesięciu, ośmiu, paru, piętnastu, 20, 30</li>
        <li>PRON: tym, nim, nich, niej, sobie, mnie, czym, niczym, kimś, tobie</li>
        <li>PROPN: Polsce, Warszawie, Poznaniu, Europie, Krakowie, Wrocławiu, Kielcach, Niemczech, Olsztynie, Śląsku</li>
      </ul>
    </li>
    <li>Nom
      <ul>
        <li>ADJ: sam, inny, jeden, sama, cała, dobry, nowa, nowe, nowy, pierwsza</li>
        <li>ADJ-Part: przyjęta, znaleziono, wyczerpana, zatrzymano, zatrzymany, prowadzone, przeprowadzono, rozegrano, stwierdzono, wprowadzono</li>
        <li>ADP: jak, jako, niż, niczym, co</li>
        <li>DET: które, który, która, ten, którzy, ta, te, wszystkie, to, każdy</li>
        <li>NOUN: pan, pani, policjanci, ludzie, ojciec, policja, Sejm, minister, prezydent, sprawa</li>
        <li>NOUN-Vnoun: wprowadzenie, otwarcie, niszczenie, obniżanie, powołanie, Dzielenie, Oddanie, Odnalezienie, Odstąpienie, Odzyskanie</li>
        <li>NUM: wielu, dwie, wiele, obaj, dwa, dwóch, 30, cztery, dwaj, obie</li>
        <li>PRON: to, on, ja, kto, co, ktoś, wszystko, nikt, ona, one</li>
        <li>PROPN: Polska, Andrzej, Jan, Jerzy, Adam, Grzegorz, Piotr, Polacy, Bóg, Maciej</li>
      </ul>
    </li>
    <li>Voc
      <ul>
        <li>DET: nasz</li>
        <li>NOUN: panie, pośle, marszałku, tato, dziewczyno, ministrze, ojcze, Mamo, Profesorze, Senatorze</li>
        <li>PRON: ty</li>
        <li>PROPN: Panie, Piotrze, Benedykcie, Boże, Ewelinka, Feliksie, Hawaje, Hebrajczyku, Jajeczny, January</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>PrepCase</a>
  <ul>
    <li>Npr
      <ul>
        <li>PRON: jego, go, ich, jej, mu, ją, je, on, im, ona</li>
      </ul>
    </li>
    <li>Pre
      <ul>
        <li>ADJ: prostu, dawna, wolna, niedawna, angielsku, bliska, cichu, daleka, francusku, gorsza</li>
        <li>PRON: nich, nim, niego, niej, nią, nimi, nie, niemu, ń</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Degree and Polarity</h3>

<li><a>Degree</a>
  <ul>
    <li>Pos
      <ul>
        <li>ADJ: cały, pierwszy, różnych, innych, nowego, nowe, sam, II, duże, nowy</li>
        <li>ADV: bardzo, dobrze, szybko, często, nagle, jednocześnie, długo, obecnie, prawdopodobnie, naprawdę</li>
      </ul>
    </li>
    <li>Sup
      <ul>
        <li>ADJ: najbliższym, najbliższych, największe, najbliższy, najważniejsze, największego, największym, najlepsze, najlepszym, największy</li>
        <li>ADV: najbardziej, najczęściej, najmniej, najlepiej, najszybciej, najprawdopodobniej, najwyraźniej, Najsłabiej, Najwięcej, najchętniej</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Polarity</a>
  <ul>
    <li>Neg
      <ul>
        <li>ADJ-Part: Nieleczona, niedoceniana, niehodowaną, nieocieplony, nieprzewidzianych, niespełnionym, niestrzeżonym, nietajoną, nieuprzątnięte, niewyczyszczone</li>
        <li>NOUN-Vnoun: nieuzyskania, niedopełnienie, niedopuszczenie, nieodpowiadanie, nieprowadzenie, nieprzeprowadzenie, nieprzyjmowanie, niewchodzenie</li>
      </ul>
    </li>
    <li>Pos
      <ul>
        <li>ADJ: przyjęta, znaleziono, prowadzone, dotyczące, wyczerpana, zatrzymano, zatrzymany, przeprowadzono, przygotowany, rozegrano</li>
        <li>ADJ-Part: przyjęta, znaleziono, prowadzone, dotyczące, wyczerpana, zatrzymano, zatrzymany, przeprowadzono, przygotowany, rozegrano</li>
        <li>NOUN-Vnoun: głosowania, odrzucenie, przyjęcie, przyjęciem, bycia, działania, naciśnięcie, otwarcie, stosowania, tworzenia</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Variant</a>
  <ul>
    <li>Long
      <ul>
        <li>ADP: ze, we, przede, ode, za</li>
        <li>AUX-Fin: em, eś</li>
        <li>PRON: jego, ich, jej, mnie, ją, nich, je, on, nim, niego</li>
      </ul>
    </li>
    <li>Short
      <ul>
        <li>ADP: w, z, od, przez, pod, przed, nad, bez, spod, poprzez</li>
        <li>AUX-Fin: m, śmy, ś, ście</li>
        <li>PRON: go, mu, mi, ci, cię, nimi, ń</li>
      </ul>
    </li>
  </ul>
</li>

<h3>Verbal Features</h3>

<li><a>Aspect</a>
  <ul>
    <li>Imp
      <ul>
        <li>ADJ: powinien, powinna, powinno, powinny, powinni, prowadzone, dotyczące, jadący, podawane, protestujących</li>
        <li>ADJ-Part: prowadzone, dotyczące, jadący, podawane, protestujących, pędzącego, zbliżających, atakowany, będącą, dobiegające</li>
        <li>AUX-Fin: jest, em, by, m, będzie, są, śmy, będą, eś, jestem</li>
        <li>AUX-Inf: być</li>
        <li>AUX-Part: był, była, było, były, byli, stawał, Wydawał, informowali, pozostawali, robił</li>
        <li>NOUN-Vnoun: głosowania, bycia, działania, stosowania, tworzenia, korzystania, skrawania, dochodzenia, niszczenie, obniżanie</li>
        <li>VERB-Conv: patrząc, mając, wracając, czekając, posługując, tworząc, usiłując, zarzucając, Mijając, biorąc</li>
        <li>VERB-Fin: ma, jest, może, dziękuję, mają, mam, wiem, proszę, mogą, chce</li>
        <li>VERB-Inf: być, mieć, robić, iść, liczyć, pracować, korzystać, mówić, oglądać, rozmawiać</li>
        <li>VERB-Part: było, miał, chciał, miała, był, mógł, mieli, musiał, była, mogli</li>
      </ul>
    </li>
    <li>Perf
      <ul>
        <li>ADJ: przyjęta, znaleziono, wyczerpana, zatrzymano, zatrzymany, przeprowadzono, przygotowany, rozegrano, stwierdzono, wprowadzono</li>
        <li>ADJ-Part: przyjęta, znaleziono, wyczerpana, zatrzymano, zatrzymany, przeprowadzono, przygotowany, rozegrano, stwierdzono, wprowadzono</li>
        <li>AUX-Fin: zostanie, zostaną, stanie, staniesz, zostanę</li>
        <li>AUX-Inf: zostać, stać</li>
        <li>AUX-Part: został, została, zostało, zostali, zostały, stała, stał, poczuli, pozostał, stało</li>
        <li>NOUN-Vnoun: odrzucenie, przyjęcie, przyjęciem, naciśnięcie, nieuzyskania, otwarcie, wprowadzenie, odejściu, przeprowadzenia, rozpoczęcia</li>
        <li>VERB-Conv: Dokonawszy, Ustaliwszy, Wyprowadziwszy, skrzypnąwszy, wystrzelawszy</li>
        <li>VERB-Fin: wystarczy, daj, odbędzie, pozwoli, wróci, przyjdzie, weź, znajdzie, przystąpimy, rozpocznie</li>
        <li>VERB-Inf: powiedzieć, zrobić, znaleźć, wrócić, wyjść, zmienić, zobaczyć, pomóc, kupić, spotkać</li>
        <li>VERB-Part: udało, stało, doszło, powiedział, zaczął, został, wstrzymał, wyszedł, zrobił, przyjął</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Mood</a>
  <ul>
    <li>Cnd
      <ul>
        <li>AUX-Fin: by</li>
      </ul>
    </li>
    <li>Imp
      <ul>
        <li>AUX-Fin: bądź</li>
        <li>VERB-Fin: daj, weź, chodź, Przypomnijmy, powiedz, pozwól, Słuchaj, bierz, Czekaj, Przenieś</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>AUX-Fin: jest, em, m, będzie, są, śmy, będą, eś, jestem, zostanie</li>
        <li>VERB-Fin: ma, jest, może, dziękuję, mają, wiem, mam, proszę, mogą, chce</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Tense</a>
  <ul>
    <li>Fut
      <ul>
        <li>AUX-Fin: będzie, będą, będę, będziemy, będziesz</li>
      </ul>
    </li>
    <li>Past
      <ul>
        <li>AUX-Part: był, była, było, został, były, została, byli, zostało, zostali, zostały</li>
        <li>VERB-Conv: Dokonawszy, Ustaliwszy, Wyprowadziwszy, skrzypnąwszy, wystrzelawszy</li>
        <li>VERB-Part: było, miał, chciał, miała, był, udało, mógł, mieli, musiał, była</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>ADJ-Part: dotyczące, jadący, protestujących, pędzącego, zbliżających, będącą, dobiegające, dotyczących, grająca, idące</li>
        <li>AUX-Fin: jest, em, m, są, śmy, eś, jestem, zostanie, ś, jesteś</li>
        <li>VERB-Conv: patrząc, mając, wracając, czekając, posługując, tworząc, usiłując, zarzucając, Mijając, biorąc</li>
        <li>VERB-Fin: ma, jest, może, dziękuję, mają, wiem, mam, proszę, mogą, chce</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Voice</a>
  <ul>
    <li>Act
      <ul>
        <li>ADJ-Part: dotyczące, jadący, protestujących, pędzącego, zbliżających, będącą, dobiegające, dotyczących, grająca, idące</li>
        <li>AUX-Part: był, była, było, został, były, została, byli, zostało, zostali, zostały</li>
        <li>VERB-Part: było, miał, chciał, miała, był, udało, mógł, mieli, musiał, była</li>
      </ul>
    </li>
    <li>Pass
      <ul>
        <li>ADJ-Part: przyjęta, znaleziono, prowadzone, wyczerpana, zatrzymano, zatrzymany, przeprowadzono, przygotowany, rozegrano, stwierdzono</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Pronouns, Determiners, Quantifiers</h3>

<li><a>PronType</a>
  <ul>
    <li>Dem
      <ul>
        <li>DET: ten, tej, tym, tego, te, tych, to, ta, takie, tę</li>
        <li>PRON: to, tym, tego, temu</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>DET: kilka, jakieś, jakiś, kilku, kilkanaście, kilkadziesiąt, jakąś, kilkunastu, niektóre, kilkuset</li>
        <li>PRON: coś, ktoś, czegoś, czymś, kogoś, cokolwiek, komuś, kimś, komukolwiek</li>
      </ul>
    </li>
    <li>Int,Rel
      <ul>
        <li>DET: które, który, która, którzy, których, którym, której, jakie, którego, którą</li>
        <li>PRON: co, kto, czym, kim, czego, kogo, komu, czemu</li>
      </ul>
    </li>
    <li>Neg
      <ul>
        <li>DET: żadnego, żadnych, żaden, żadnej, żadne, żadna, żadnym, żadną</li>
        <li>PRON: nic, nikt, niczego, nikogo, nikomu, niczym</li>
      </ul>
    </li>
    <li>Prs
      <ul>
        <li>DET: swoje, swoich, swoim, naszej, naszym, swój, swojej, swoją, naszych, swojego</li>
        <li>PRON: się, jego, go, ich, jej, mnie, mu, sobie, mi, ją</li>
      </ul>
    </li>
    <li>Tot
      <ul>
        <li>DET: wszystkie, wszystkich, każdy, każdym, wszelki, wszyscy, każde, każdego, wszelkie, każdą</li>
        <li>PRON: wszystko, wszystkim, wszyscy, wszystkiego, wszystkich</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>NumType</a>
  <ul>
    <li>Card
      <ul>
        <li>DET: kilka, kilku, kilkanaście, kilkadziesiąt, kilkunastu, kilkuset, kilkaset, kilkoma, kilkudziesięciu</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Poss</a>
  <ul>
    <li>Yes
      <ul>
        <li>DET: swoje, swoich, swoim, naszej, naszym, swój, swojej, swoją, naszych, swojego</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Reflex</a>
  <ul>
    <li>Yes
      <ul>
        <li>DET: swoje, swoich, swoim, swój, swojej, swoją, swojego, swych, swego, swej</li>
        <li>PRON: się, sobie, siebie, sobą, sie, sia</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Person</a>
  <ul>
    <li>1
      <ul>
        <li>AUX-Fin: em, m, śmy, jestem, będę, będziemy, jesteśmy, staję, zostanę</li>
        <li>DET: naszej, naszym, naszych, moim, mój, moja, nasz, nasze, mojej, mojego</li>
        <li>PRON: mnie, mi, nas, ja, nam, mną, my, nami</li>
        <li>VERB-Fin: dziękuję, wiem, mam, proszę, mogę, stwierdzam, Przystępujemy, mamy, możemy, myślę</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>AUX-Fin: eś, ś, jesteś, będziesz, ście, bądź, Jesteście, staniesz</li>
        <li>DET: twój, twoje, twoim, twoi, twoją, wasz, twoja, twojej, Twego, twej</li>
        <li>PRON: ci, cię, ty, ciebie, was, tobie, wam, tobą, wy, wami</li>
        <li>VERB-Fin: masz, wiesz, daj, chcesz, możesz, musisz, weź, chodź, macie, myślisz</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>AUX-Fin: jest, będzie, są, będą, zostanie, zostaną, staje, bywa, zostaje, zostają</li>
        <li>PRON: jego, go, ich, jej, mu, ją, nich, je, on, nim</li>
        <li>VERB-Fin: ma, jest, może, mają, mogą, chce, są, należy, musi, chodzi</li>
      </ul>
    </li>
  </ul>
</li>



<li><a>Number[psor]</a>
  <ul>
    <li>Plur
      <ul>
        <li>DET: naszej, naszym, naszych, nasz, nasze, naszego, nasi, naszą, nasza, wasz</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>DET: moim, twój, mój, moja, mojej, mojego, moje, twoje, moją, moich</li>
      </ul>
    </li>
  </ul>
</li>

<h3>Other Features</h3>

<li><a>Abbr</a>
  <ul>
    <li>Yes
      <ul>
        <li>X: r, tys, zł, ul, proc, ok, godz, m, mln, św</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>AdpType</a>
  <ul>
    <li>Prep
      <ul>
        <li>ADP: w, na, z, do, o, po, od, za, przez, dla</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>Hyph</a>
  <ul>
    <li>Yes
      <ul>
        <li>ADJ: biało, polsko, Liberalno, południowo, Chrześcijańsko, Ekonomiczno, Ginekologiczno, Ludowo, Miejsko, Przemysłowo</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>Typo</a>
  <ul>
    <li>Yes
      <ul>
        <li>PRON: sie, sia</li>
      </ul>
    </li>
  </ul>
</li>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 17 lemmas as copulas (<a>cop</a>). Examples: być, to, stać, stawać, bycie, zostać, bywać, wydać, poczuć, będący, pozostawać, pozostać, zdawać, okazywać, robić, wydawać, zrobić.</li>
<li>This corpus uses 6 lemmas as auxiliaries (<a>aux</a>). Examples: być, niech, zostać, informować, niechaj, spędzić.</li>
<li>This corpus uses 3 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: być, zostać, zostawać.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Nom (142)</li>
      <li>VERB--PRON-Nom (5)</li>
      <li>VERB-Fin--NOUN-Gen (5)</li>
      <li>VERB-Fin--NOUN-Nom (1454)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(i) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(też) (1)</li>
      <li>VERB-Fin--PRON-Gen (1)</li>
      <li>VERB-Fin--PRON-Nom (278)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Nom (19)</li>
      <li>VERB-Inf--NOUN-Nom-ADP(również) (1)</li>
      <li>VERB-Inf--PRON-Nom (3)</li>
      <li>VERB-Part--NOUN-Gen (9)</li>
      <li>VERB-Part--NOUN-Nom (1731)</li>
      <li>VERB-Part--NOUN-Nom-ADP(i) (1)</li>
      <li>VERB-Part--NOUN-Nom-ADP(młody) (1)</li>
      <li>VERB-Part--NOUN-Nom-ADP(także) (1)</li>
      <li>VERB-Part--PRON-Nom (210)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (10)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--NOUN-Gen (9)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB--PRON-Dat (4)</li>
      <li>VERB--PRON-Gen (4)</li>
      <li>VERB-Conv--NOUN-Acc (72)</li>
      <li>VERB-Conv--NOUN-Dat (3)</li>
      <li>VERB-Conv--NOUN-Gen (15)</li>
      <li>VERB-Conv--NOUN-Ins (15)</li>
      <li>VERB-Conv--PRON-Acc (5)</li>
      <li>VERB-Conv--PRON-Dat (1)</li>
      <li>VERB-Conv--PRON-Gen (1)</li>
      <li>VERB-Conv--PRON-Ins (1)</li>
      <li>VERB-Fin--NOUN-Acc (871)</li>
      <li>VERB-Fin--NOUN-Dat (43)</li>
      <li>VERB-Fin--NOUN-Gen (249)</li>
      <li>VERB-Fin--NOUN-Ins (50)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (185)</li>
      <li>VERB-Fin--PRON-Dat (65)</li>
      <li>VERB-Fin--PRON-Gen (69)</li>
      <li>VERB-Fin--PRON-Ins (4)</li>
      <li>VERB-Inf--NOUN-Acc (394)</li>
      <li>VERB-Inf--NOUN-Dat (16)</li>
      <li>VERB-Inf--NOUN-Gen (98)</li>
      <li>VERB-Inf--NOUN-Ins (22)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (104)</li>
      <li>VERB-Inf--PRON-Dat (25)</li>
      <li>VERB-Inf--PRON-Gen (25)</li>
      <li>VERB-Part--NOUN-Acc (1176)</li>
      <li>VERB-Part--NOUN-Dat (37)</li>
      <li>VERB-Part--NOUN-Gen (206)</li>
      <li>VERB-Part--NOUN-Ins (121)</li>
      <li>VERB-Part--PRON (5)</li>
      <li>VERB-Part--PRON-Acc (243)</li>
      <li>VERB-Part--PRON-Dat (73)</li>
      <li>VERB-Part--PRON-Gen (46)</li>
      <li>VERB-Part--PRON-Ins (7)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Dat (2)</li>
      <li>VERB--PRON-Dat (2)</li>
      <li>VERB-Conv--NOUN-Dat (2)</li>
      <li>VERB-Conv--NOUN-Ins (3)</li>
      <li>VERB-Conv--PRON-Dat (4)</li>
      <li>VERB-Fin--NOUN-Acc (9)</li>
      <li>VERB-Fin--NOUN-Dat (27)</li>
      <li>VERB-Fin--NOUN-Gen (2)</li>
      <li>VERB-Fin--NOUN-Ins (14)</li>
      <li>VERB-Fin--PRON-Acc (2)</li>
      <li>VERB-Fin--PRON-Dat (60)</li>
      <li>VERB-Fin--PRON-Gen (1)</li>
      <li>VERB-Fin--PRON-Ins (3)</li>
      <li>VERB-Inf--NOUN-Acc (1)</li>
      <li>VERB-Inf--NOUN-Dat (19)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Ins (5)</li>
      <li>VERB-Inf--PRON-Acc (2)</li>
      <li>VERB-Inf--PRON-Dat (32)</li>
      <li>VERB-Inf--PRON-Ins (2)</li>
      <li>VERB-Part--NOUN-Acc (6)</li>
      <li>VERB-Part--NOUN-Dat (42)</li>
      <li>VERB-Part--NOUN-Ins (32)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-Acc (7)</li>
      <li>VERB-Part--PRON-Dat (93)</li>
      <li>VERB-Part--PRON-Gen (1)</li>
      <li>VERB-Part--PRON-Ins (1)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 705 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: udać się, bać się, odbyć się, wydawać się, znaleźć się, znajdować się, rozpocząć się, okazać się, pojawić się, stać się, spotkać się, czuć się, starać się, dziać się, zatrzymać się, wstrzymać się, zmienić się, spodziewać się, zakończyć się, zdarzać się, domagać się, odbywać się, spotykać się, uśmiechnąć się, cieszyć się, dowiedzieć się, obawiać się, zgadzać się, dać się, mówić się, odwrócić się, podobać się, zająć się, zdecydować się, zgodzić się, zrobić się, bawić się, kończyć się, zajmować się, zastanawiać się, zbliżać się, znajdujący się, dostać się, odnosić się, pojawiać się, roześmiać się, składać się, toczyć się, uczyć się, zachować się</li>
</ul>


<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 58 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: zrobić sobie, poradzić sobie, przypomnieć sobie, urządzić sobie, uświadomić sobie, wyobrazić sobie, wyobrażać sobie, pozwolić sobie, radzić sobie, stawiać sobie, znaleźć sobie, darować sobie, dać sobie, dogonić swoich, kochać siebie, lubić siebie, mierzyć się, obetrzeć sobie, obiecywać sobie, oblać się, oceniać siebie, odbierać sobie, oświetlać sobie, patrzenie sobie, patrzeć sobie, patrzyć sobie, paść sobie, pisany sobie, podawać sobie, podjeść sobie, pokaleczyć sobie, posłuchać siebie, powtarzać sobie, pozwalać sobie, przyglądanie sobie, przynieść sobie, pytać się, robić sobie, rozpoznać siebie, rozumieć siebie, spodobać sobie, stawiający sobie, uroić sobie, utrudniać sobie, ułożyć się, uświadamiać sobie, widzieć siebie, wybrać siebie, wydzierać sobie, wyhodować sobie</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>aux:pass</a>, <a>det:numgov</a>, <a>det:nummod</a>, <a>expl:pv</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>expl</a></li>
<li>The following 11 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>discourse</a>, <a>clf</a>, <a>compound</a>, <a>list</a>, <a>parataxis</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
