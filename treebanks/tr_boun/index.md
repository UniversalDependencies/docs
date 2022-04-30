---
layout: base
title:  'UD_Turkish-BOUN'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Turkish BOUN

Language: [Turkish](/tr/index.html) (code: `tr`)<br/>
Family: Turkic, Southwestern

This treebank has been part of Universal Dependencies since the UD v2.7 release.

The following people have contributed to making this treebank part of UD: Utku Türk, Furkan Atmaca, Şaziye Betül Özateş, Gözde Berk, Seyyit Talha Bedir, Abdullatif Köksal, Balkız Öztürk Başaran, Tunga Güngör, Arzucan Özgür.

Repository: [UD_Turkish-BOUN](https://github.com/UniversalDependencies/UD_Turkish-BOUN)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udtr_boun29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 4.0

Genre: nonfiction, news

Questions, comments?
General annotation questions (either Turkish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Turkish-BOUN/issues).
If you want to collaborate, please contact [saziye&nbsp;•&nbsp;bilgin&nbsp;(æt)&nbsp;boun&nbsp;•&nbsp;edu&nbsp;•&nbsp;tr].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, with some manual corrections, but not a full manual verification |
| UPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| XPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| Features | assigned by a program, with some manual corrections, but not a full manual verification |
| Relations | annotated manually, natively in UD style |

## Description

The largest Turkish dependency treebank annotated in UD style. Created by the members of [TABILAB](http://http://tabilab.cmpe.boun.edu.tr/) from Boğaziçi University.



This is a newly introduced Turkish dependency treebank in the Universal Dependencies (UD) annotation style. The BOUN Treebank is created by the [TABILAB](http://http://tabilab.cmpe.boun.edu.tr/) and supported by the Scientific and Technological Research Council of Turkey (TÜBİTAK) under grant number 117E971.

The BOUN Treebank includes a total of 9,761 manually annotated sentences from various topics including biographical texts, national newspapers, instructional texts, popular culture articles, and essays. The texts are taken from the [Turkish National Corpus (TNC)](https://www.tnc.org.tr/).

The dependency relations in the BOUN Treebank is manually annotated in the UD framework. However, the morphological features and UPOS information are retrieved from the morphological parser of [Sak et al. (2011)](https://link.springer.com/article/10.1007/s10579-010-9128-6) and converted to UD morphology automatically using [our script](https://github.com/boun-tabi/UD_docs/blob/main/convert_sak_morp_to_ud_morp.py).

Currently, we are manually annotating the morphologial features, UPOS, and XPOS information.

## Acknowledgments

We are immensely grateful to Prof. Yeşim Aksan and the other members of the Turkish National Corpus Team for their tremendous help in providing us with sentences from the Turkish National Corpus.

## References

For now, you can use arXiv reference for this treebank:
```
@misc{trk2020resources,
title={Resources for Turkish Dependency Parsing: Introducing the BOUN Treebank and the BoAT Annotation Tool},
author={Utku T{\”{u{% raw %}}}{% endraw %}rk and
Furkan Atmaca and
{\c{S}aziye Bet{\"{u{% raw %}}}{% endraw %}l {\"{O{% raw %}}}{% endraw %}zate{\c{s{% raw %}}}{% endraw %} and
G{\"{o{% raw %}}}{% endraw %}zde Berk and
Seyyit Talha Bedir and
Abdullatif K{\"{o{% raw %}}}{% endraw %}ksal and
Balk{\i}z {\"{O{% raw %}}}{% endraw %}zt{\"{u{% raw %}}}{% endraw %}rk Ba{\c{s{% raw %}}}{% endraw %}aran and
Tunga G{\"{u{% raw %}}}{% endraw %}ng{\"{o{% raw %}}}{% endraw %}r and
Arzucan {\"{O{% raw %}}}{% endraw %}zg{\"{u{% raw %}}}{% endraw %}r},
year={2020},
eprint={2002.10416},
archivePrefix={arXiv},
primaryClass={cs.CL}
}
```


# Statistics of UD Turkish BOUN

## POS Tags

[ADJ](tr_boun-pos-ADJ.html) – [ADP](tr_boun-pos-ADP.html) – [ADV](tr_boun-pos-ADV.html) – [AUX](tr_boun-pos-AUX.html) – [CCONJ](tr_boun-pos-CCONJ.html) – [DET](tr_boun-pos-DET.html) – [INTJ](tr_boun-pos-INTJ.html) – [NOUN](tr_boun-pos-NOUN.html) – [NUM](tr_boun-pos-NUM.html) – [PART](tr_boun-pos-PART.html) – [PRON](tr_boun-pos-PRON.html) – [PROPN](tr_boun-pos-PROPN.html) – [PUNCT](tr_boun-pos-PUNCT.html) – [SCONJ](tr_boun-pos-SCONJ.html) – [SYM](tr_boun-pos-SYM.html) – [VERB](tr_boun-pos-VERB.html) – [X](tr_boun-pos-X.html)

## Features

[Abbr](tr_boun-feat-Abbr.html) – [Aspect](tr_boun-feat-Aspect.html) – [Case](tr_boun-feat-Case.html) – [Echo](tr_boun-feat-Echo.html) – [Evident](tr_boun-feat-Evident.html) – [Mood](tr_boun-feat-Mood.html) – [Number](tr_boun-feat-Number.html) – [Number[psor]](tr_boun-feat-Number-psor.html) – [NumType](tr_boun-feat-NumType.html) – [Person](tr_boun-feat-Person.html) – [Person[psor]](tr_boun-feat-Person-psor.html) – [Polarity](tr_boun-feat-Polarity.html) – [Polite](tr_boun-feat-Polite.html) – [PronType](tr_boun-feat-PronType.html) – [Reflex](tr_boun-feat-Reflex.html) – [Tense](tr_boun-feat-Tense.html) – [VerbForm](tr_boun-feat-VerbForm.html) – [Voice](tr_boun-feat-Voice.html)

## Relations

[acl](tr_boun-dep-acl.html) – [advcl](tr_boun-dep-advcl.html) – [advmod](tr_boun-dep-advmod.html) – [advmod:emph](tr_boun-dep-advmod-emph.html) – [amod](tr_boun-dep-amod.html) – [appos](tr_boun-dep-appos.html) – [aux](tr_boun-dep-aux.html) – [aux:q](tr_boun-dep-aux-q.html) – [case](tr_boun-dep-case.html) – [cc](tr_boun-dep-cc.html) – [cc:preconj](tr_boun-dep-cc-preconj.html) – [ccomp](tr_boun-dep-ccomp.html) – [clf](tr_boun-dep-clf.html) – [compound](tr_boun-dep-compound.html) – [compound:lvc](tr_boun-dep-compound-lvc.html) – [compound:redup](tr_boun-dep-compound-redup.html) – [conj](tr_boun-dep-conj.html) – [cop](tr_boun-dep-cop.html) – [csubj](tr_boun-dep-csubj.html) – [dep](tr_boun-dep-dep.html) – [det](tr_boun-dep-det.html) – [discourse](tr_boun-dep-discourse.html) – [dislocated](tr_boun-dep-dislocated.html) – [fixed](tr_boun-dep-fixed.html) – [flat](tr_boun-dep-flat.html) – [goeswith](tr_boun-dep-goeswith.html) – [iobj](tr_boun-dep-iobj.html) – [list](tr_boun-dep-list.html) – [mark](tr_boun-dep-mark.html) – [nmod](tr_boun-dep-nmod.html) – [nmod:poss](tr_boun-dep-nmod-poss.html) – [nsubj](tr_boun-dep-nsubj.html) – [nummod](tr_boun-dep-nummod.html) – [obj](tr_boun-dep-obj.html) – [obl](tr_boun-dep-obl.html) – [orphan](tr_boun-dep-orphan.html) – [parataxis](tr_boun-dep-parataxis.html) – [punct](tr_boun-dep-punct.html) – [root](tr_boun-dep-root.html) – [vocative](tr_boun-dep-vocative.html) – [xcomp](tr_boun-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 9761 sentences, 121214 tokens and 122383 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 20188 tokens (17%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 2645 types of words that contain both letters and punctuation. Examples: Türkiye'de, Türkiye'nin, İstanbul'da, Türkiye'yi, Türkiye'ye, Atatürk'ün, Avrupa'da, İngiltere'de, İstanbul'a, ABD'nin, Irak'ta, AB'ye, Amerika'da, İsrail'in, AB'nin, Anadolu'nun, Ankara'da, "bu, 'lik, ABD'li, İstanbul'u, İstanbul'un, "o, ABD'de, ABD'ye, Almanya'nın, Anadolu'da, Ankara'dan, Avrupa'nın, Bakanlığı'nın, Dünya'nın, Fransa'da, Irak'ın, Kadıköy'de, Kurulu'nun, Manço'nun, O'nun, Türkiye'deki, Üniversitesi'nde, 'ydi, 1945'te, 1992'de, AKP'nin, Akdeniz'e, Akdeniz'in, Allah'a, Allah'ın, Almanya'da, Almanya'ya, Ankara'nın</li>
</ul>

<ul>
<li>This corpus contains 1163 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 783 types of multi-word tokens. Examples: vardır, yoktu, yoktur, yoksa, nedir, demektir, önemli, biridir, varken, arasındaki, gereklidir, gibiydi, yıllardır, önemlidir, şudur, biriydi, bizler, düşünürken, edilmelidir, saçlı, zordur, adlı, doludur, fazladır, gibidir, günüydü, içindedir, içindir, karşılıklı, sınırlı, önemliydi, öyleyse, Bizimkiler, aittir, bedeli, budur, bugünkü, böyledir, büyüktür, cumhuriyettir, doluydu, durumdadır, dışındadır, etmektir, insandır, içindeki, kadındı, karşısındaki, kolaydı, konusudur.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 1 word types tagged as particles (PART): Kİ</li>
</ul>

<ul>
<li>This corpus contains 207 lemmas tagged as pronouns (PRON): "Bizim, "Bura, "O'nun, "Siz, "ben, "biz, "o, "Şura, Adana, Anon, Arcona, Arda, Binay, Buğday, Honda, Nitekim, Ramayana, Savarona, Senî, Tasvir, Türk, Zifir, ada, alto, anason, anoin, araba, avize, ayakkabı, aşk, bahçe, bak, bakan, balıkçı, banka, bas, baston, bazı, başhekim, beden, bekle, bellek, ben, bende, bent, benzin, beyefendi, biftek, bil, bilet, bilgi, bilim, bilincinde, bina, birara, birbiri, birey, biri, biribiri, birikim, birkaç, birlik, birliktelik, birçok, birçoğu, biz, bizimki, bu, bulun, buluş, bun, bura, buyur, bölge, bölüm, böyle, bülten, bürokrasi, ceset, deniz, deyim, din(I), dip, diri, diz, dizin, düzen, düşman, ekim, enerji, erozyon, et, ev, eylem, ez, fakir, fazla, gençlik, göz, gündüz, güven, had, hangi, hap, hekim, hemşehri, hep, heptatlo, hizmet, hiçbiri, hâkim, ilgi, insan, irade, iç, iş, işkence, işsiz, kardeş, kefen, kendi, kent, kim, kimi, kimler, kişilik, kongre, kriz, kuzen, kız, liman, meden, metin, müezzin, ne, neden, nefis, nere, neşe, nice, o, o'nun, oda, ol, on, onay, onca, opera, operasyon, ora, orası, ordu, organiz, orman, ortam, oyun, san, sanat, sanatçı, sanayi, sayfa, saçı, sen, servis, ses, sevgili, sevinç, siz, sofra, soluk, sonra, sıra, tabir, tahkim, tansiyon, tel, televizyon, teoriz, tüm, uyku, ver, volta, yaban, yazlık, yaşa, yok, yurt, Çekemoğlu', Üzer, çare, çekim, çene, çeviri, çevre, çevren, çizim, çoğu, önem, öner, ülke, İkizler, ızgara, şampiyona, şey, şiir, şu, şûra</li>
</ul>

<ul>
<li>This corpus contains 65 lemmas tagged as determiners (DET): "Hiçbir, "bir, "bu, "o, 'tüm, ...bu, 0, Eco, Fabio, Hagi, Hugo, Kingfisher, NATO, T, Timoşenko, Yok, akis, aç, ağaç, bazı, başka, bir, birkaç, birsürü, birtakım, birçok, bu, bunca, bütün, dergi, diğer, dur, espresso, gardırop, hangi, hep, her, herhangi, hiç, hiçbir, ilaç, ilgi, ilk, itiraz, kendi, kimi, kuş, mikro, muhtaç, ne, o, olmaz, porno, radyo, sayaç, sistem, taç, tüm, unperiodismo, video, yazı, çok, çoğu, öteki, şu</li>
</ul>

<ul>
<li>Out of the above, 15 lemmas occurred sometimes as PRON and sometimes as DET: "o, bazı, birkaç, birçok, bu, hangi, hep, ilgi, kendi, kimi, ne, o, tüm, çoğu, şu</li>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as auxiliaries (AUX): bulun, değil, i, mi, ol</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: bulun, değil, i, mi, ol</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: yken, olurken</li>
    <li>VERB: diyerek, ederek, giderek, alarak, belirterek, yaparken, giderken, yaparak, derken, ederken</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: iken, olan, dır, olduğu, olduğunu, bulunan, olduğum, olduğuna, yken</li>
    <li>VERB: olan, olduğunu, olduğu, gelen, eden, yapılan, alan, bulunan, verdiği, yaptığı</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>VERB: egemen, kalma, "Forma, "Gitmeyi, "Koşma, "Oynamak, "düşman, "yaşama, Akiyama, Amanın</li>
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
      <li>ADJ: kadınlar, aralarında, kadınların, Türkler, başkalarına, güçlerini, Türklerin, erkekler, acıların, başkalarının</li>
      <li>ADP: siz, alışıklar, küsüz, lıklar, rağbetlere, öncekiler</li>
      <li>AUX: misiniz, lardır, yız, musunuz, mısınız, ler, ydik, ydık, dik, değiliz</li>
      <li>NOUN: insanlar, şeyler, insanların, çocuklar, malzemeler, zamanlar, yıllar, insanları, yıllarda, arkadaşlar</li>
      <li>NUM: onlarla, birimiz, 68'lilerin, YAZARLARIMIZ, bankalarca, biziz, kilolarca, yapsatçılarla, yayınevlerimiz, yüzsüzüz</li>
      <li>PRON: biz, bizim, size, bunlar, onlar, bize, bizi, siz, onların, onları</li>
      <li>PROPN: Balkanlar'da, ANILAR, Adamlar, Akatlar'ın, Aleviler'in, Almanlar'dan, Ayşegüllere, Balkanlar'daki, Baronlar'ın, Değerler</li>
      <li>VERB: edin, bakalım, olanlar, ettiler, başladık, başladılar, pişirin, çalışmaları, bakın, doğrayın</li>
      <li>VERB-Conv: otururlarken, yaparlarken</li>
      <li>VERB-Part: olanlar, isteyenler, edenler, olanların, okuyanlar, olduklarını, aldıklarını, dediklerini, düşünenler, gelenler</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: içinde, Türk, arasında, ilgili, var, ortaya, kadın, farklı, yok, son</li>
      <li>ADP: aşkın, önceki, dile, sonraki, 'lik, lık, kiler, kü, belediye, filan</li>
      <li>AUX: dir, dır, ise, mi, değil, mı, ydi, tir, dur, mu</li>
      <li>AUX-Conv: olurken</li>
      <li>AUX-Part: olduğunu, olduğuna</li>
      <li>NOUN: zaman, gün, şey, yıl, yer, su, üzerine, insan, tarafından, söz</li>
      <li>NUM: 3, yüzde, ikinci, milyar, 30, 20, birinci, üçüncü, İkinci, birini</li>
      <li>PART: Kİ</li>
      <li>PRON: ne, ben, benim, bana, onun, biri, bunu, onu, beni, o</li>
      <li>PROPN: Türkiye, Türkiye'de, Türkiye'nin, Mehmet, Atatürk, Ali, Avrupa, İstanbul, Mustafa, Kemal</li>
      <li>VERB: dedi, olduğunu, oldu, vardı, olduğu, etti, söyledi, olur, başladı, geldi</li>
      <li>VERB-Conv: yaparken, giderken, derken, ederken, çıkarken, girerken, konuşurken, anlatırken, bulunurken, dönerken</li>
      <li>VERB-Part: olduğunu, olduğu, olmadığını, gerektiğini, olduğuna, olmadığı, olduğundan, olacağı, yaptığını, ettiğini</li>
      <li>X: nişanlım, çamaşır, ışıl</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: yandan, arkasından, azından, yanından, aradan, arasından, içinden, uzaktan, yakından, çoktan</li>
      <li>ADP: kinden</li>
      <li>NOUN: tarafından, yüzden, yüzünden, açısından, yerden, üzerinden, elinden, evden, elden, gözden</li>
      <li>NUM: Birlikteliğimizden, Mashadov'dan, bilgimizden, içimizden, vermemizden</li>
      <li>PRON: bundan, oradan, ondan, bunlardan, buradan, bizden, benden, birinden, nereden, sizden</li>
      <li>PROPN: Ankara'dan, Anadolu'dan, Eylül'den, İstanbul'dan, Baykal'dan, Bey'den, CHP'den, Hollanda'dan, Yılmaz'dan, Çin'den</li>
      <li>VERB: olduğundan, olmadan, olmaktan, vermeden, almadan, durmadan, ettikten, yaptıktan, aldıktan, ayrıldıktan</li>
      <li>VERB-Part: olduğundan, ettikten, yaptıktan, aldıktan, ayrıldıktan, kaldıktan, verdikten, alındıktan, bitirdikten, bittikten</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: güçlerini, geleceğini, gerçeği, kadını, yanını, önünü, acıyı, doğruyu, gücünü, sonunu</li>
      <li>ADP: kadarını, .'yı, biberi, kömürü</li>
      <li>AUX-Part: olduğunu</li>
      <li>NOUN: şeyi, adını, suyunu, elini, başını, hayatını, işi, kişiyi, yerini, gözlerini</li>
      <li>NUM: birini, "Vahşi, Nâzırı, etmememizi, ikincisini, ikisini, kilidi, mezemizi, müzemizi, rakibini</li>
      <li>PRON: bunu, onu, beni, bizi, onları, bunları, seni, sizi, şunu, şunları</li>
      <li>PROPN: Türkiye'yi, İstanbul'u, ABD'yi, Amerika'yı, Bey'i, Paşa'yı, Almanya'yı, Ayşe'yi, Kıbrıs'ı, Nevruz'u</li>
      <li>VERB: olduğunu, olmadığını, gerektiğini, olmasını, olmayı, yaptığını, ettiğini, bulunduğunu, olanı, olduklarını</li>
      <li>VERB-Part: olduğunu, olmadığını, gerektiğini, yaptığını, ettiğini, bulunduğunu, olanı, olduklarını, aldığını, istediğini</li>
      <li>VERB-Vnoun: "Gitmeyi, dozmayı</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: ortaya, içine, önüne, üstüne, öne, araya, altına, sona, karşıya, sonuna</li>
      <li>ADP: dile, deklanşöre, dosyana, hukuka, kalışınadır, kilere, otomobile, rağbetlere, yeşile</li>
      <li>AUX: mikilere, olduğuna</li>
      <li>AUX-Part: olduğuna</li>
      <li>NOUN: üzerine, yerine, yere, başına, haline, eve, hale, ele, insana, bugüne</li>
      <li>NUM: ikiye, birine, milyona, 110.8'e, 2005'e, 50'ye, 84'e, niye</li>
      <li>PRON: bana, ona, size, buna, bize, sana, onlara, birbirine, buraya, nereye</li>
      <li>PROPN: Türkiye'ye, İstanbul'a, Akdeniz'e, Allah'a, Almanya'ya, Avrupa'ya, Tanrı'ya, İngiltere'ye, Ankara'ya, Batı'ya</li>
      <li>VERB: etmeye, olduğuna, yapmaya, olmasına, dile, okumaya, çalışmaya, olmaya, sinemaya, yazmaya</li>
      <li>VERB-Part: olduğuna, ettiğine, gelene, gerektiğine, olana, yaptığına, bulana, Oluşturduğuna, arttığına, aştığına</li>
      <li>VERB-Vnoun: derinlemesine, ortalamasına</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Equ
    <ul>
      <li>ADJ: "profesyonelce, Yüce, diktatörce, düşmanca, olanca, rezilce</li>
      <li>ADP: taburunca</li>
      <li>NOUN: ayrıca, "uyutmaca, emperyalizmce, günlerce, güçlerce, hoşça, kilometrelerce, kudretçe, külce, ruhça</li>
      <li>NUM: bankalarca, kilolarca, onca</li>
      <li>PRON: bence, onca</li>
      <li>PROPN: Gence, Service</li>
      <li>VERB: deyince, Bastıkça, alışınca, ekiplerince, geldiğince, kesimince, süresince</li>
      <li>VERB-Part: geldiğince</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: kadının, kadınların, Türklerin, acıların, başkalarının, gençlerin, erkeğin, geçmişin, kızın, yetkililerinin</li>
      <li>ADP: aşkın, arkadaşın, bifteğin, sertliğin, sivrisineğin, uğraşın, çıkışın</li>
      <li>AUX: misin</li>
      <li>NOUN: dünyanın, insanların, kişinin, insanın, herkesin, devletin, hayatın, çocuğun, kimsenin, ülkenin</li>
      <li>NUM: ikisinin, kalbin, 30'un, rakibin</li>
      <li>PRON: benim, onun, bunun, bizim, onların, sizin, senin, bunların, birinin, hepsinin</li>
      <li>PROPN: Türkiye'nin, Atatürk'ün, İsrail'in, Anadolu'nun, İstanbul'un, Almanya'nın, Avrupa'nın, Irak'ın, Manço'nun, O'nun</li>
      <li>VERB: olmanın, olanların, etmenin, dersin, karşılaşmanın, konuşmaların, olmasının, yaşamanın, çalışmanın, açıklamaların</li>
      <li>VERB-Part: olanların, dediğinin, düzenleyenlerin, istemeyenlerin, konuşulanların, kullananların, kurtulanların, soyanların, yapanların, yaralananların</li>
      <li>VERB-Vnoun: Amanın</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: eşiyle, başkalarıyla, kadınla, kızlarla, acılarla, Arkadaşlarıyla, Geçmişle, Kalabalıklarla, Kerinçeklerle, Türklerle</li>
      <li>NOUN: nedeniyle, nedenle, amacıyla, dolayısıyla, gerekçesiyle, insanlarla, adıyla, hızla, yoluyla, halkla</li>
      <li>NUM: onlarla, yapsatçılarla</li>
      <li>PRON: onunla, benimle, bizimle, bununla, seninle, "O'nunla, Gözle, Hiçbirimizle, Kardeşlerimle, Krizle</li>
      <li>PROPN: Bey'le, Ayla, Atatürk'le, Mirkelam'la, "Alex'le, 54'le, Adıvar'la, Attila'yla, Avşar'la, Azerbaycan'la</li>
      <li>VERB: olmamakla, olmakla, almakla, ağlamakla, demesiyle, düşmekle, edilmesiyle, etmekle, Açmakla, Kerpetenle</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: içinde, arasında, karşısında, yanında, dışında, önünde, yaşında, arada, altında, arasındaki</li>
      <li>ADP: Romantikte, arasında, birlikte, dışında, içinde, mektuptadır, oracıktadır, raftadır</li>
      <li>NOUN: üzerinde, şekilde, yerde, hakkında, yılında, başında, elde, anda, konusunda, sırada</li>
      <li>NUM: yüzde, birinde, altında, altındaki, 1945'te, 1992'de, yedide, 1'de, 1284'de, 1642'de</li>
      <li>PRON: orada, burada, nerede, bizde, bende, buradaki, bunda, onda, bizdeki, oradaki</li>
      <li>PROPN: Türkiye'de, İstanbul'da, Avrupa'da, İngiltere'de, Irak'ta, Amerika'da, Ankara'da, ABD'de, Anadolu'da, Fransa'da</li>
      <li>VERB: uyandığımda, açıklamada, bakıldığında, araştırmada, etmekte, geldiğinde, konuşmada, konuşmasında, baktığımızda, döndüğümde</li>
      <li>VERB-Part: uyandığımda, bakıldığında, geldiğinde, baktığımızda, döndüğümde, gördüğümde, alındığında, baktığımda, dediğinde, edildiğinde</li>
      <li>VERB-Vnoun: ailemede</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: Türk, ilgili, var, kadın, farklı, yok, son, çeşitli, erkek, gerçek</li>
      <li>ADP: siz, önceki, sonraki, 'lik, lık, kiler, kü, belediye, filan, hediye</li>
      <li>ADV: Demek, demekki, engellemek, olmak</li>
      <li>AUX: ydi, tir, tur, ken, tır, tu, değildir, ydu, değilim, du</li>
      <li>NOUN: zaman, gün, şey, yıl, yer, su, insan, söz, kabul, kişi</li>
      <li>NUM: 3, ikinci, milyar, 30, 20, birinci, üçüncü, İkinci, beş, on</li>
      <li>PART: Kİ</li>
      <li>PRON: ne, ben, biri, o, biz, bu, sen, bunlar, onlar, siz</li>
      <li>PROPN: Türkiye, Mehmet, Atatürk, Ali, Avrupa, İstanbul, Mustafa, Kemal, Ankara, Allah</li>
      <li>VERB: olduğu, olmak, etmek, olması, demek, yapmak, araştırma, almak, etme, gelir</li>
      <li>VERB-Conv: giderken, ederken, çıkarken, dönerken, yararlanarak, gelirken, yazarken, çekerken, beraberken, buharlaşarak</li>
      <li>VERB-Part: olduğu, olanlar, olmadığı, olacağı, yaptığı, yazdığı, dediği, istediği, bulunduğu, isteyenler</li>
      <li>VERB-Vnoun: egemen, kalma, "Forma, "Koşma, "Oynamak, "düşman, "yaşama, Akiyama, Bisalman, Dakman</li>
      <li>X: nişanlım, çamaşır, ışıl</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ: yetmeyince</li>
      <li>AUX: değil, olmayacaktır, olmaz</li>
      <li>NOUN: akmamasını, bitmemesinden, değişmemeleri, göremeyişini, görmemezlikten, inanmamalarına, kabullenmemelerinden</li>
      <li>NUM: bilemeyişimiz, etmememizi</li>
      <li>VERB: değil, olmadığını, olmadığı, olmayan, olmaz, olmadı, olmuyor, olmazsa, olamaz, bilmem</li>
      <li>VERB-Conv: kesinleşmemişken, olamayarak, sembolizmadan, vermeyerek, yatırmayarak, çıkamıyorken</li>
      <li>VERB-Part: olmadığını, olmadığı, olmayan, bulunmayan, bilmediğim, etmeyen, bilmeyen, bulunmadığını, olmayacağını, etmediğini</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: bakışlı, belirince, geçişi, gördükçe, gösterişli, gülümseyince, iyileşince, karşılayıp, pişince, yansıma</li>
      <li>ADP: duyunca, okuyunca, kalışınadır, olmamdır, çıkışın</li>
      <li>ADV: Demek, Sıkışınca, alınmaksızın, öğrenince, demekki, engellemek, olmak</li>
      <li>AUX: ise, dur, idi, değildi, iken, dür, olan, dır, olsa, oluyor</li>
      <li>AUX-Conv: olurken</li>
      <li>AUX-Part: iken, olan, dır, olduğu, olduğunu, bulunan, olduğum, olduğuna, yken</li>
      <li>NOUN: kurtuluş, artış, geçiş, bakış, davranış, buluş, tüketici, çıkışı, kalıcı, tartışınız</li>
      <li>NUM: vermemizden</li>
      <li>PRON: vermeksizin, beklememizi</li>
      <li>PROPN: DONUP, Eriyip, BATMASI, Buluşçu, Doğuşu, Kapıcı, YANICI, buluşçuya</li>
      <li>VERB: olan, dedi, olduğunu, olduğu, oldu, gelen, etti, alıp, söyledi, olur</li>
      <li>VERB-Conv: diyerek, ederek, giderek, alarak, belirterek, yaparken, yaparak, derken, göstererek, bakarak</li>
      <li>VERB-Part: olan, olduğunu, olduğu, gelen, eden, yapılan, alan, bulunan, verdiği, yaptığı</li>
      <li>VERB-Vnoun: egemen, kalma, "Forma, "Gitmeyi, "Koşma, "Oynamak, "düşman, "yaşama, Akiyama, Amanın</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Hab
    <ul>
      <li>AUX: olur, durur, olabilir, olmaz, olurken, olursunuz</li>
      <li>AUX-Conv: olurken</li>
      <li>VERB: olur, olabilir, gerekir, olursa, eder, olmaz, benzer, der, bilir, gelir</li>
      <li>VERB-Conv: yaparken, derken, girerken, konuşurken, anlatırken, bulunurken, olurken, oynarken, verirken, çalışırken</li>
      <li>VERB-Part: benzer, beğenir, duyulur, değişmez, eğilinir, ister, sarfetmez</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: mi, mı, mu, misiniz, musunuz, mısınız, mü, mıdır, miyim, musun</li>
      <li>VERB: olacak, yapılacak, edecek, olacaktır, yapacak, kalacak, olacağı, alınacak, yapacağı, çıkacak</li>
      <li>VERB-Part: olacağı, yapacağı, edecek, yapacağını, yapılacak, geçeceğini, olmayacağını, yapacak, bulunacak, edeceğini</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX: dir, dır, değil, sa, dı, ydı, idi, değildi, yken, ydü</li>
      <li>AUX-Conv: yken</li>
      <li>AUX-Part: iken, dır, olduğu, olduğunu, olduğum, olduğuna, yken</li>
      <li>VERB: dedi, olduğunu, olduğu, oldu, vardı, etti, söyledi, başladı, geldi, verdiği</li>
      <li>VERB-Conv: deyip, şunca, dayalı, garip, münasip, oldukça, Boyunca, Kayıp, Namağlup, acayip</li>
      <li>VERB-Part: olduğunu, olduğu, verdiği, yaptığı, bulunduğu, olmadığını, olmadığı, gerektiğini, aldığı, olduğuna</li>
      <li>VERB-Vnoun: egemen, kalma, "Forma, "Gitmeyi, "Koşma, "Oynamak, "düşman, "yaşama, Akiyama, Amanın</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>AUX: oluyor, bulunmaktadır, bulunuyoruz, duruyor, duruyordu</li>
      <li>VERB: ediyor, diyor, oluyor, geliyor, biliyorum, diyorum, gerekiyor, istiyorum, bulunuyor, istiyor</li>
      <li>VERB-Conv: çıkamıyorken</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX: ise, sa, se, idiyse, iseniz, ysa</li>
      <li>VERB: olursa, olmazsa, varsa, gerekirse, isterseniz, gelirse, isterse, olursak, yapılırsa, dersem</li>
      <li>VERB-Part: geldiğindeyse</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Des
    <ul>
      <li>AUX: olsa, değilse</li>
      <li>VERB: olsa, varsa, olsaydı, olmasaydı, olmasa, anlatsam, atsak, baksam, desem, değilse</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>AUX: dir, dır, lardır, durlar, lerdir, "dur</li>
      <li>VERB: "Otur, "mağdur</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: dur, dür, yum, sın, olurken</li>
      <li>AUX-Conv: olurken</li>
      <li>VERB: olsun, var, diyerek, ederek, edin, bak, giderek, alarak, belirterek, yaparken</li>
      <li>VERB-Conv: diyerek, ederek, giderek, alarak, belirterek, yaparken, giderken, yaparak, derken, ederken</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: değil, dı, ydı, yken, ydü, iken, tı, yız, yım, ler</li>
      <li>AUX-Conv: yken</li>
      <li>AUX-Part: iken, dır, yken</li>
      <li>VERB: değil, benzer, geçen, iken, beraber, deyip, geçer, ister, yırtık, çıtır</li>
      <li>VERB-Conv: deyip, şunca, dayalı, garip, münasip, oldukça, Boyunca, Kayıp, Namağlup, acayip</li>
      <li>VERB-Part: geçen, benzer, iken, beğenir, bildik, duyulur, içecek, "batan, "bulaştığı, "eskiyen</li>
      <li>VERB-Vnoun: egemen, kalma, "Forma, "Gitmeyi, "Koşma, "Oynamak, "düşman, "yaşama, Akiyama, Amanın</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>VERB: olmalıdır, olmalı, bulunmalıdır, edilmeli, alınmalı, etmeliyim, girmeli, olmalısın, olmalıydı, olmalıyız</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>VERB: bakalım, alalım, diyelim, gidelim, edelim, anlatayım, gideyim, yapayım, Susalım, aktaralım</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pot
    <ul>
      <li>AUX: olabilir</li>
      <li>VERB: olabilir, edilebilir, alabilir, edebilir, edebilirim, gelebilir, olabilecek, yapabilirsiniz, alabiliyor, bulabilirsiniz</li>
      <li>VERB-Part: olabileceği, olabileceğini, gelebilen, giyebileceğini, yapabileceğini, yapabilen, yaşayabildiği, Edilebilen, alabilen, anlayabildiği</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: olacak, dır, olmayacaktır</li>
      <li>VERB: olacak, yapılacak, edecek, olacaktır, yapacak, kalacak, olacağı, alınacak, yapacağı, çıkacak</li>
      <li>VERB-Part: olacağı, yapacağı, edecek, yapacağını, yapılacak, geçeceğini, olmayacağını, yapacak, bulunacak, edeceğini</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: dı, ydı, idi, değildi, ydü, miydi, tı, mıydı, ydik, 'ydi</li>
      <li>AUX-Part: olduğu, olduğunu, olduğum, olduğuna</li>
      <li>VERB: dedi, olduğunu, olduğu, oldu, vardı, etti, söyledi, başladı, geldi, verdiği</li>
      <li>VERB-Conv: başlamışken, etmişken, kesinleşmemişken, yazılmışken</li>
      <li>VERB-Part: olduğunu, olduğu, verdiği, yaptığı, bulunduğu, olmadığını, olmadığı, gerektiğini, aldığı, olduğuna</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>VERB: dayandınlmıştı, taşmmamıştık</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: dir, dır, mi, değil, mı, mu, sa, yken, misiniz, se</li>
      <li>AUX-Conv: yken, olurken</li>
      <li>AUX-Part: iken, olan, dır, bulunan, yken</li>
      <li>VERB: olan, gelen, olur, eden, yapılan, alan, bulunan, çıkan, ediyor, edilen</li>
      <li>VERB-Conv: yaparken, derken, girerken, konuşurken, anlatırken, bulunurken, deyip, olurken, oynarken, verirken</li>
      <li>VERB-Part: olan, gelen, eden, yapılan, alan, bulunan, çıkan, edilen, yapan, gereken</li>
      <li>VERB-Vnoun: egemen, kalma, "Forma, "Gitmeyi, "Koşma, "Oynamak, "düşman, "yaşama, Akiyama, Amanın</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB: belirterek, belirten, belirtti, bildirdi, karıştırarak, oluşturan, oluşturduğu, değerlendirme, ilgilendiren, kaynatın</li>
      <li>VERB-Conv: belirterek, karıştırarak, belirtirken, değiştirerek, sürdürürken, uzatarak, arttırırken, bastırarak, bezdirerek, birleştirerek</li>
      <li>VERB-Part: belirten, oluşturan, oluşturduğu, ilgilendiren, değiştiren, gerektirdiği, hatırlatan, sürdüren, yansıtan, çıkaran</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX: değildi, değildim, değildin, değilse</li>
      <li>VERB: yapılan, edilen, verilen, yapılacak, kullanılan, yaşanan, edildi, yapılmış, edilmesi, katılan</li>
      <li>VERB-Conv: bağlanarak, edilerek, karşılanırken, vurularak, yaşanırken, Edilirken, Kaydırılarak, anlaşılarak, atılarak, açılırken</li>
      <li>VERB-Part: yapılan, edilen, verilen, kullanılan, yaşanan, katılan, bilinen, düzenlenen, hazırlanan, kurulan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>VERB: atıştırmayın, bakışıp, dövüşmeye</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rfl
    <ul>
      <li>VERB: büründü, direnip, giyinmiş, Direnince, büründürülmedi, bürünerek, bürünmüş, direneceklerdir, direnemeden, direnen</li>
      <li>VERB-Conv: bürünerek, giyinerek</li>
      <li>VERB-Part: direnen, giyinen</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Evident</a></li>
</ul>

<ul>
  <li>Fh
    <ul>
      <li>AUX: idi, değildi, miydi, mıydı, idim, değildim, değildin, duruyordu, idiler, idiyse</li>
      <li>VERB: dedi, oldu, vardı, etti, söyledi, başladı, geldi, dedim, yaptı, çıktı</li>
      <li>VERB-Part: bulduğuydu, gidenlerdendi, kurulanlardı, olanıydı</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nfh
    <ul>
      <li>AUX: ymiş, mış, ymış, mışsın, dır, imiş, mıymış, ymuş</li>
      <li>VERB: olmuş, demiş, olmuştur, gelmiş, varmış, etmiş, kalmış, yapılmış, yazılmış, edilmiş</li>
      <li>VERB-Conv: başlamışken, etmişken, kesinleşmemişken, yazılmışken</li>
      <li>VERB-Part: "görülmemiş, ahlâklanmış, kavrulmuş</li>
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
      <li>NUM: On, onca</li>
      <li>PRON: bu, şu, o, onca, "O'nunla, On, o'nunla, Çekemoğlu'nu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: kimi, Tasviri, Zifiri, biribirine, diri, çoğu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: o, "bizim, onca, anonim, "Bize, "O, "Sizi, "Sizin, "ben, "benim</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: 1, iki, bir, 2, üç, 4, bin, milyon, 3, 5</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dist
    <ul>
      <li>NUM: birer, ikişer, yüzer</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: 53'üncü</li>
      <li>NUM: ikinci, birinci, üçüncü, İkinci, 1., 2., beşinci, dördüncü, 20., 3.</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: organize, böylesine</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADJ: eminim, biz, güçlüyüz, içindeyim, kaçımız, muhtacız, rahatız, sıcakkanlıyız, yanınızdayım</li>
      <li>ADP: küsüz, mizaçlıyım</li>
      <li>AUX: yız, yım, ydik, miyim, ydık, yim, dik, değiliz, idim, miyiz</li>
      <li>NOUN: hepimizin, yazınız, hepimizi, Allah'ım, Benimkinin, Birimize, Hanifi'yim, Hastayım, bahçesindeyiz, benimdir</li>
      <li>NUM: birimiz, biziz, yüzsüzüz, çoğumuz</li>
      <li>PRON: ben, benim, bana, beni, biz, bizim, bize, bizi, hepimiz, bence</li>
      <li>VERB: dedim, başladım, oldum, bakalım, biliyorum, diyorum, ettim, gittim, gördüm, istiyorum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>ADP: siz</li>
      <li>AUX: dur, misiniz, dür, musunuz, mısınız, musun, mısın, yum, değilsiniz, misin</li>
      <li>NOUN: değilsiniz, senden, birisiniz, sizden, Anlayışlısınız, KADARSIN, Kurusun, biriniz, dikkatlisiniz, efendimizsin</li>
      <li>PRON: size, sen, siz, sizin, seni, senin, sizi, organize, sizden, sizler</li>
      <li>VERB: var, edin, bak, gel, bakın, pişirin, doğrayın, bırakın, anlat, dersiniz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ: içinde, Türk, arasında, ilgili, var, ortaya, kadın, farklı, yok, son</li>
      <li>ADP: aşkın, önceki, dile, sonraki, 'lik, lık, kiler, kü, belediye, filan</li>
      <li>AUX: dir, dır, ise, mi, değil, mı, ydi, tir, mu, tur</li>
      <li>AUX-Conv: olurken</li>
      <li>AUX-Part: olduğunu, olduğuna</li>
      <li>NOUN: zaman, gün, şey, yıl, yer, su, üzerine, insan, tarafından, söz</li>
      <li>NUM: 3, yüzde, ikinci, milyar, 30, 20, birinci, üçüncü, İkinci, birini</li>
      <li>PART: Kİ</li>
      <li>PRON: ne, onun, biri, bunu, onu, o, bunun, bu, ona, buna</li>
      <li>PROPN: Türkiye, Türkiye'de, Türkiye'nin, Mehmet, Atatürk, Ali, Avrupa, İstanbul, Mustafa, Kemal</li>
      <li>VERB: dedi, olduğunu, oldu, vardı, olduğu, etti, söyledi, olur, başladı, geldi</li>
      <li>VERB-Conv: yaparken, giderken, derken, ederken, çıkarken, girerken, konuşurken, anlatırken, bulunurken, dönerken</li>
      <li>VERB-Part: olduğunu, olduğu, olmadığını, gerektiğini, olanlar, olduğuna, olmadığı, olduğundan, olacağı, yaptığını</li>
      <li>X: nişanlım, çamaşır, ışıl</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Infm
    <ul>
      <li>VERB: "görmüyor, dansediyorlardı, sarfediyor</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: başkalarına, aralarında, önümüzdeki, aramızda, başkaları, başkalarının, karşınızda, aramıza, aranızdaki, başkalarıyla</li>
      <li>AUX: sinizdir</li>
      <li>NOUN: temiz, ülkemizde, Günümüzde, gözlerini, hepimizin, elimizde, ellerinde, günümüz, arkadaşlarınızla, başımıza</li>
      <li>NUM: birimiz, geçmişimiz, içimiz, kalbimiz, "Evimiz, Birlikteliğimizden, Evimiz, Geleceğimiz, Kontrolümüz, Rengimiz</li>
      <li>PRON: hepsi, bazıları, hepimiz, hepsinin, hepsini, organize, birbirlerine, tümü, birbirimize, birbirlerini</li>
      <li>PROPN: Günleri'ne, Köyleri'ne, Toplantıları'nın</li>
      <li>VERB: olduklarını, ettiğimiz, aldıkları, aldığımız, oldukları, çalışmalarını, söyledikleri, yaşadığımız, bildiğiniz, dediğimiz</li>
      <li>VERB-Part: olduklarını, ettiğimiz, aldıkları, aldığımız, oldukları, söyledikleri, yaşadığımız, bildiğiniz, dediğimiz, ettikleri</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: içinde, arasında, karşısında, yanında, dışında, önünde, yaşında, içine, altında, arasındaki</li>
      <li>ADP: filan, kadarını, yanı, Akademisi, alayı, arasında, dosyana, duamdır, dışında, gribi</li>
      <li>AUX: değilim, olduğu, olduğunu, mişim, olduğum, olduğuna, olması, olmasıydı</li>
      <li>AUX-Part: olduğu, olduğunu, olduğum, olduğuna</li>
      <li>NOUN: üzerine, tarafından, kaşığı, yerine, başkanı, üzerinde, adı, hakkında, annem, günü</li>
      <li>NUM: birini, birinde, altında, ikisi, ikisinin, birine, altındaki, birincisi, İkisi, biri</li>
      <li>PART: Kİ</li>
      <li>PRON: biri, onunla, birbirine, benimle, birisi, birinin, benden, birinden, birine, birbirinden</li>
      <li>PROPN: Federasyonu'nun, Komisyonu'nun, Savaşı'nın, İmparatorluğu'nun, Birliği'nin, Derneği'nin, Dili, Festivali, Grubu'na, Kupası'nın</li>
      <li>VERB: olduğunu, olduğu, olması, verdiği, yaptığı, bulunduğu, olmadığını, olmadığı, gerektiğini, aldığı</li>
      <li>VERB-Part: olduğunu, olduğu, verdiği, yaptığı, bulunduğu, olmadığını, olmadığı, gerektiğini, aldığı, olduğuna</li>
      <li>VERB-Vnoun: egemen, "düşman, Bisalman, Dakman, derinlemesine, ortalamasına</li>
      <li>X: nişanlım</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: 'İngiltere'ye, APMC, Ady'nin, Babinsky, Beyruni'nin, Borec, D'nin, Dizzy, Happy, Lady</li>
          <li>PROPN: "CHP, 20.00'de</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Echo</a>
    <ul>
      <li>Rdp
        <ul>
          <li>X: pırıl, tefek, batıl</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[psor]</a>
    <ul>
      <li>1
        <ul>
          <li>ADJ: yanımda, yanıma, önümüzdeki, Umarım, aramızda, aramıza, içimde, kalbim, komşum, kızlarımız</li>
          <li>ADP: duamdır, olmamdır</li>
          <li>AUX: değilim, mişim, olduğum</li>
          <li>AUX-Part: olduğum</li>
          <li>NOUN: annem, babam, temiz, babamın, annemin, ülkemizde, canım, oğlum, Günümüzde, hepimizin</li>
          <li>NUM: birimiz, geçmişimiz, içimiz, kalbimiz, "Evimiz, Birlikteliğimizden, Evimiz, Geleceğimiz, Kontrolümüz, Rengimiz</li>
          <li>PRON: benimle, hepimiz, birbirimize, bizimle, birbirimizi, Ayakkabılarımız, Aşklarımız, Birimizin, Hiçbirimizle, Kardeşlerimle</li>
          <li>VERB: olduğum, ettiğimiz, gördüğüm, istediğim, aldığımız, ettiğim, olduğumu, sevdiğim, uyandığımda, yaptığım</li>
          <li>VERB-Part: olduğum, ettiğimiz, gördüğüm, istediğim, aldığımız, ettiğim, olduğumu, sevdiğim, uyandığımda, yaptığım</li>
          <li>X: nişanlım</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>ADJ: yapın, azından, dışındaki, karşınızda, aranızdaki, derinden, Arkadaşınızın, Ayaklarınızdan, Dolabınızdaki, Dualarınızın</li>
          <li>ADP: dosyana</li>
          <li>AUX: sinizdir</li>
          <li>NOUN: eşliğinde, arkadaşlarınızla, tartışınız, yazınız, Türkbükü'nde, başkanlığında, defterinize, Başınızın, Yöneticiniz, aklınızdan</li>
          <li>PRON: onunla, benden, organize, seninle, Altona, Neyin, hepiniz, Dininizi, EVinizde, Eyleminizin</li>
          <li>VERB: deyince, bakın, bildiğiniz, hazırladığınız, ettiğiniz, istediğiniz, yaşadığınız, aldığınız, egemen, geldiğin</li>
          <li>VERB-Part: bildiğiniz, hazırladığınız, ettiğiniz, istediğiniz, yaşadığınız, aldığınız, geldiğin, kullandığınız, oturduğun, sevdiğiniz</li>
          <li>VERB-Vnoun: egemen, "düşman, Bisalman, Dakman</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADJ: içinde, arasında, karşısında, yanında, dışında, önünde, yaşında, içine, altında, arasındaki</li>
          <li>ADP: filan, kadarını, yanı, Akademisi, alayı, arasında, dışında, gribi, içinde, kalınlığı</li>
          <li>AUX: olduğu, olduğunu, olduğuna, olması, olmasıydı</li>
          <li>AUX-Part: olduğu, olduğunu, olduğuna</li>
          <li>NOUN: üzerine, tarafından, kaşığı, yerine, başkanı, üzerinde, adı, hakkında, günü, yılında</li>
          <li>NUM: birini, birinde, altında, ikisi, ikisinin, birine, altındaki, birincisi, İkisi, biri</li>
          <li>PART: Kİ</li>
          <li>PRON: biri, birbirine, hepsi, bazıları, birisi, birinin, hepsinin, hepsini, birinden, birine</li>
          <li>PROPN: Federasyonu'nun, Komisyonu'nun, Savaşı'nın, İmparatorluğu'nun, Birliği'nin, Derneği'nin, Dili, Festivali, Grubu'na, Kupası'nın</li>
          <li>VERB: olduğunu, olduğu, olması, verdiği, yaptığı, bulunduğu, olmadığını, olmadığı, gerektiğini, aldığı</li>
          <li>VERB-Part: olduğunu, olduğu, verdiği, yaptığı, bulunduğu, olmadığını, olmadığı, gerektiğini, aldığı, olduğuna</li>
          <li>VERB-Vnoun: derinlemesine, ortalamasına</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: i, ol.</li>
</ul>

<ul>
<li>This corpus uses 5 lemmas as auxiliaries (<a>aux</a>). Examples: değil, ol, i, bulun, mi.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (32)</li>
      <li>VERB--NOUN-ADP(ki) (2)</li>
      <li>VERB--NOUN-Abl (2)</li>
      <li>VERB--NOUN-Acc (86)</li>
      <li>VERB--NOUN-Dat (9)</li>
      <li>VERB--NOUN-Gen (264)</li>
      <li>VERB--NOUN-Gen-ADP(dâhi) (1)</li>
      <li>VERB--NOUN-Ins (5)</li>
      <li>VERB--NOUN-Loc (1)</li>
      <li>VERB--NOUN-Nom (2580)</li>
      <li>VERB--NOUN-Nom-ADP(dâhi) (1)</li>
      <li>VERB--NOUN-Nom-ADP(ile) (6)</li>
      <li>VERB--NOUN-Nom-ADP(ki) (1)</li>
      <li>VERB--NOUN-Nom-ADP(suç) (1)</li>
      <li>VERB--NOUN-Nom-ADP(taraf) (1)</li>
      <li>VERB--PRON (17)</li>
      <li>VERB--PRON-Acc (3)</li>
      <li>VERB--PRON-Gen (30)</li>
      <li>VERB--PRON-Gen-ADP(kiler) (2)</li>
      <li>VERB--PRON-Ins (1)</li>
      <li>VERB--PRON-Nom (487)</li>
      <li>VERB--PRON-Nom-ADP(kadar) (1)</li>
      <li>VERB-Conv--NOUN-Acc (4)</li>
      <li>VERB-Conv--NOUN-Dat (2)</li>
      <li>VERB-Conv--NOUN-Gen (8)</li>
      <li>VERB-Conv--NOUN-Nom (56)</li>
      <li>VERB-Conv--PRON (1)</li>
      <li>VERB-Conv--PRON-Nom (14)</li>
      <li>VERB-Part--NOUN (11)</li>
      <li>VERB-Part--NOUN-Acc (16)</li>
      <li>VERB-Part--NOUN-Gen (413)</li>
      <li>VERB-Part--NOUN-Ins (4)</li>
      <li>VERB-Part--NOUN-Nom (201)</li>
      <li>VERB-Part--NOUN-Nom-ADP('nin) (1)</li>
      <li>VERB-Part--NOUN-Nom-ADP(ile) (3)</li>
      <li>VERB-Part--PRON (8)</li>
      <li>VERB-Part--PRON-Abl (1)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Gen (35)</li>
      <li>VERB-Part--PRON-Nom (25)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (51)</li>
      <li>VERB--NOUN-Abl (22)</li>
      <li>VERB--NOUN-Acc (1457)</li>
      <li>VERB--NOUN-Dat (118)</li>
      <li>VERB--NOUN-Gen (6)</li>
      <li>VERB--NOUN-Ins (25)</li>
      <li>VERB--NOUN-Loc (9)</li>
      <li>VERB--NOUN-Nom (1646)</li>
      <li>VERB--NOUN-Nom-ADP(diye)-ADP(diye)-ADP(diye)-ADP(diye)-ADP(diye) (1)</li>
      <li>VERB--NOUN-Nom-ADP(filan) (1)</li>
      <li>VERB--NOUN-Nom-ADP(gibi) (2)</li>
      <li>VERB--NOUN-Nom-ADP(ile) (5)</li>
      <li>VERB--PRON (62)</li>
      <li>VERB--PRON-Abl (2)</li>
      <li>VERB--PRON-Acc (333)</li>
      <li>VERB--PRON-Dat (15)</li>
      <li>VERB--PRON-Gen (1)</li>
      <li>VERB--PRON-Ins (2)</li>
      <li>VERB--PRON-Loc (1)</li>
      <li>VERB--PRON-Nom (102)</li>
      <li>VERB-Conv--NOUN (2)</li>
      <li>VERB-Conv--NOUN-Abl (5)</li>
      <li>VERB-Conv--NOUN-Acc (103)</li>
      <li>VERB-Conv--NOUN-Dat (9)</li>
      <li>VERB-Conv--NOUN-Ins (3)</li>
      <li>VERB-Conv--NOUN-Nom (74)</li>
      <li>VERB-Conv--NOUN-Nom-ADP(leri) (1)</li>
      <li>VERB-Conv--PRON (1)</li>
      <li>VERB-Conv--PRON-Acc (12)</li>
      <li>VERB-Conv--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN (11)</li>
      <li>VERB-Part--NOUN-Abl (5)</li>
      <li>VERB-Part--NOUN-Acc (350)</li>
      <li>VERB-Part--NOUN-Acc-ADP(dil) (1)</li>
      <li>VERB-Part--NOUN-Dat (19)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Part--NOUN-Ins (9)</li>
      <li>VERB-Part--NOUN-Loc (5)</li>
      <li>VERB-Part--NOUN-Nom (463)</li>
      <li>VERB-Part--NOUN-Nom-ADP(diye) (1)</li>
      <li>VERB-Part--NOUN-Nom-ADP(e) (1)</li>
      <li>VERB-Part--NOUN-Nom-ADP(ile) (3)</li>
      <li>VERB-Part--NOUN-Nom-ADP(Ü) (1)</li>
      <li>VERB-Part--NOUN-Nom-ADP(İ) (1)</li>
      <li>VERB-Part--PRON (11)</li>
      <li>VERB-Part--PRON-Abl (1)</li>
      <li>VERB-Part--PRON-Acc (61)</li>
      <li>VERB-Part--PRON-Dat (3)</li>
      <li>VERB-Part--PRON-Ins (1)</li>
      <li>VERB-Part--PRON-Nom (36)</li>
      <li>VERB-Vnoun--NOUN-Nom (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (1)</li>
      <li>VERB--NOUN-Dat (63)</li>
      <li>VERB--NOUN-Dat-ADP(filan) (1)</li>
      <li>VERB--PRON (3)</li>
      <li>VERB--PRON-Dat (12)</li>
      <li>VERB-Conv--NOUN-Dat (5)</li>
      <li>VERB-Part--NOUN-Dat (19)</li>
      <li>VERB-Part--PRON-Dat (5)</li>
      <li>VERB-Vnoun--NOUN-Dat (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>advmod:emph</a>, <a>aux:q</a>, <a>cc:preconj</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>nmod:poss</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>expl</a>, <a>reparandum</a></li>
</ul>
