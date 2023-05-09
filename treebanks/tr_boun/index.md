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

The following people have contributed to making this treebank part of UD: Büşra Marşan, Salih Furkan Akkurt, Utku Türk, Furkan Atmaca, Şaziye Betül Özateş, Gözde Berk, Seyyit Talha Bedir, Abdullatif Köksal, Balkız Öztürk Başaran, Tunga Güngör, Arzucan Özgür.

Repository: [UD_Turkish-BOUN](https://github.com/UniversalDependencies/UD_Turkish-BOUN)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udtr_boun212)<br />
Download all treebanks: [UD 2.12](/#download)

License: CC BY-SA 4.0

Genre: nonfiction, news

Questions, comments?
General annotation questions (either Turkish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Turkish-BOUN/issues).
If you want to collaborate, please contact [busra&nbsp;•&nbsp;marsan&nbsp;(æt)&nbsp;boun&nbsp;•&nbsp;edu&nbsp;•&nbsp;tr or saziye&nbsp;•&nbsp;bilgin&nbsp;(æt)&nbsp;boun&nbsp;•&nbsp;edu&nbsp;•&nbsp;tr].
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

The largest Turkish dependency treebank annotated in UD style. Created by the members of [TABILAB](http://http://tabilab.cmpe.boun.edu.tr/) from Boğaziçi University.



This is a newly introduced Turkish dependency treebank in the Universal Dependencies (UD) annotation style. The BOUN Treebank is created by the [TABILAB](http://http://tabilab.cmpe.boun.edu.tr/) and supported by the Scientific and Technological Research Council of Turkey (TÜBİTAK) under grant number 117E971.

The BOUN Treebank includes a total of 9,761 manually annotated sentences from various topics including biographical texts, national newspapers, instructional texts, popular culture articles, and essays. The texts are taken from the [Turkish National Corpus (TNC)](https://www.tnc.org.tr/).

The dependency relations in the BOUN Treebank is manually annotated in the UD framework. The morphological features and UPOS information are first retrieved from the morphological parser of [Sak et al. (2011)](https://link.springer.com/article/10.1007/s10579-010-9128-6) and converted to UD morphology automatically using [our script](https://github.com/boun-tabi/UD_docs/blob/main/convert_sak_morp_to_ud_morp.py). The morphological features, UPOS tags, XPOS tags, and lemma forms are then manually corrected in a systematic way.


## Acknowledgments

We are immensely grateful to Prof. Yeşim Aksan and the other members of the Turkish National Corpus Team for their tremendous help in providing us with sentences from the Turkish National Corpus.

## References

You can use the following arXiv reference for v2.11:

```
@article{marcsan2022enhancements,
title={Enhancements to the BOUN Treebank Reflecting the Agglutinative Nature of Turkish},
author={Mar{\c{s{% raw %}}}{% endraw %}an, B{\"u}{\c{s{% raw %}}}{% endraw %}ra and Akkurt, Salih Furkan and {\c{S{% raw %}}}{% endraw %}en, Muhammet and G{\"u}rb{\"u}z, Merve and G{\"u}ng{\"o}r, Onur and {\"O}zate{\c{s{% raw %}}}{% endraw %}, {\c{S{% raw %}}}{% endraw %}aziye Bet{\"u}l and {\"U}sk{\"u}darl{\i}, Suzan and {\"O}zg{\"u}r, Arzucan and G{\"u}ng{\"o}r, Tunga and {\"O}zt{\"u}rk, Balk{\i}z},
journal={arXiv preprint arXiv:2207.11782},
year={2022}
}
```

You can use the following arXiv reference for the previous versions of this treebank:

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

[ADJ](tr_boun-pos-ADJ.html) – [ADP](tr_boun-pos-ADP.html) – [ADV](tr_boun-pos-ADV.html) – [AUX](tr_boun-pos-AUX.html) – [CCONJ](tr_boun-pos-CCONJ.html) – [DET](tr_boun-pos-DET.html) – [INTJ](tr_boun-pos-INTJ.html) – [NOUN](tr_boun-pos-NOUN.html) – [NUM](tr_boun-pos-NUM.html) – [PART](tr_boun-pos-PART.html) – [PRON](tr_boun-pos-PRON.html) – [PROPN](tr_boun-pos-PROPN.html) – [PUNCT](tr_boun-pos-PUNCT.html) – [SCONJ](tr_boun-pos-SCONJ.html) – [VERB](tr_boun-pos-VERB.html) – [X](tr_boun-pos-X.html)

## Features

[Abbr](tr_boun-feat-Abbr.html) – [Aspect](tr_boun-feat-Aspect.html) – [Case](tr_boun-feat-Case.html) – [Echo](tr_boun-feat-Echo.html) – [Evident](tr_boun-feat-Evident.html) – [Mood](tr_boun-feat-Mood.html) – [Number](tr_boun-feat-Number.html) – [Number[psor]](tr_boun-feat-Number-psor.html) – [NumType](tr_boun-feat-NumType.html) – [Person](tr_boun-feat-Person.html) – [Person[psor]](tr_boun-feat-Person-psor.html) – [Polarity](tr_boun-feat-Polarity.html) – [Polite](tr_boun-feat-Polite.html) – [PronType](tr_boun-feat-PronType.html) – [Reflex](tr_boun-feat-Reflex.html) – [Tense](tr_boun-feat-Tense.html) – [Typo](tr_boun-feat-Typo.html) – [VerbForm](tr_boun-feat-VerbForm.html) – [Voice](tr_boun-feat-Voice.html)

## Relations

[acl](tr_boun-dep-acl.html) – [advcl](tr_boun-dep-advcl.html) – [advmod](tr_boun-dep-advmod.html) – [advmod:emph](tr_boun-dep-advmod-emph.html) – [amod](tr_boun-dep-amod.html) – [appos](tr_boun-dep-appos.html) – [aux](tr_boun-dep-aux.html) – [aux:q](tr_boun-dep-aux-q.html) – [case](tr_boun-dep-case.html) – [cc](tr_boun-dep-cc.html) – [cc:preconj](tr_boun-dep-cc-preconj.html) – [ccomp](tr_boun-dep-ccomp.html) – [clf](tr_boun-dep-clf.html) – [compound](tr_boun-dep-compound.html) – [compound:lvc](tr_boun-dep-compound-lvc.html) – [compound:redup](tr_boun-dep-compound-redup.html) – [conj](tr_boun-dep-conj.html) – [cop](tr_boun-dep-cop.html) – [csubj](tr_boun-dep-csubj.html) – [csubj:outer](tr_boun-dep-csubj-outer.html) – [dep](tr_boun-dep-dep.html) – [dep:der](tr_boun-dep-dep-der.html) – [det](tr_boun-dep-det.html) – [discourse](tr_boun-dep-discourse.html) – [discourse:q](tr_boun-dep-discourse-q.html) – [dislocated](tr_boun-dep-dislocated.html) – [fixed](tr_boun-dep-fixed.html) – [flat](tr_boun-dep-flat.html) – [iobj](tr_boun-dep-iobj.html) – [list](tr_boun-dep-list.html) – [mark](tr_boun-dep-mark.html) – [nmod](tr_boun-dep-nmod.html) – [nmod:part](tr_boun-dep-nmod-part.html) – [nmod:poss](tr_boun-dep-nmod-poss.html) – [nsubj](tr_boun-dep-nsubj.html) – [nsubj:outer](tr_boun-dep-nsubj-outer.html) – [nummod](tr_boun-dep-nummod.html) – [obj](tr_boun-dep-obj.html) – [obl](tr_boun-dep-obl.html) – [obl:tmod](tr_boun-dep-obl-tmod.html) – [orphan](tr_boun-dep-orphan.html) – [parataxis](tr_boun-dep-parataxis.html) – [punct](tr_boun-dep-punct.html) – [root](tr_boun-dep-root.html) – [vocative](tr_boun-dep-vocative.html) – [xcomp](tr_boun-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 9761 sentences, 121835 tokens and 125212 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 20812 tokens (17%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 2148 types of words that contain both letters and punctuation. Examples: Türkiye'de, Türkiye'nin, İstanbul'da, Türkiye'yi, Türkiye'ye, Atatürk'ün, Irak'ta, Avrupa'da, İngiltere'de, İstanbul'a, ABD'nin, Amerika'da, AB'ye, İsrail'in, AB'nin, Anadolu'nun, Ankara'da, ABD'li, Anadolu'da, Kadıköy'de, İbn-i, İstanbul'u, İstanbul'un, 'lik, ABD'de, ABD'ye, Almanya'nın, Ankara'dan, Avrupa'nın, Bakanlığı'nın, Dünya'nın, Fransa'da, Irak'ın, Kurulu'nun, Manço'nun, O'nun, Üniversitesi'nde, 'ydi, 1945'te, 1992'de, AKP'nin, Akdeniz'e, Akdeniz'in, Allah'a, Allah'ın, Almanya'da, Almanya'ya, Ankara'nın, Aralık'ta, Avrupa'ya</li>
</ul>

<ul>
<li>This corpus contains 3374 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 2347 types of multi-word tokens. Examples: vardır, vardı, yoktu, arasındaki, yoktur, olmuştu, yoksa, olursa, gelmişti, başlamıştı, yaşındaki, demişti, etmişti, çıkmıştı, bugünkü, giderken, olmuştur, içindeki, olurdu, varsa, aşağıdaki, dünyadaki, ederken, geliyordu, olmazsa, varmış, demektir, duruyordu, edilmişti, gibiydi, kalmıştı, oluyordu, varken, yaparken, çalışıyordu, çıkarken, önündeki, üzerindeki, bildirdi, bizdeki, düşmüştü, elindeki, gerekiyordu, gitmişti, karşısındaki, olmuştum, vermişti, yanımdaki, önceki, önemli.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 63 word types tagged as particles (PART): 'a, 'de, 'li, 'lü, 'nin, 'ın, /94'te, Kİ, a, bir, da, dan, de, den, dur, edilmesini, ez, halbuki, hangi, i, in, ise, ki, kiler, kilerden, kilere, kinden, kini, kü, lar, larında, lerden, leri, lerine, lerle, leşen, nda, nde, nin, nın, se, si, sına, ta, takım, tan, te, ten, tır, un, ya, ydi, ye, yi, yla, yse, çok, çoğu, çı, ü, ün, ı, ın</li>
</ul>

<ul>
<li>This corpus contains 137 lemmas tagged as pronouns (PRON): "O'nun, "biz", 'Bu, Basten, Bize, Bunlar, Burada, Buradan, Buğday, Kimsenin, Nitekim, Oğuz, Senî, Sizi, Tasvir, ada, ayakkabı, bahçe, bakan, baston, bazı, başhekim, başka, beden, ben, bence, bende, bensiz, benzin, bina, bir, birara, birbiri, birey, biri, biribiri, birkaç, birkaçı, birlik, birliktelik, birçok, biz, bizim, bu, bun, bura, bölge, böyle, böylesine, bürokrasi, ceset, deniz, din, diri, diz, dizin, düzen, düşman, enerji, ev, fakirlik, gençlik, gündüz, güven, had, hangi, hep, hepsi, herkes, hiçbiri, hâkim, insan, irade, iç, iş, işkence, işsiz, kaç, kendi, ki, kim, kimi, kimler, kimse, kisi, kişilik, kriz, kuzen, kız, liman, meden, metin, ne, neden, nere, o, o'nun, on, onay, operasyon, ora, oracık, orası, ordu, organiz, orman, ortam, san, sanat, sanatçı, sanayi, sayfa, sen, sensiz, servis, ses, sevinç, siz, sizinle, sofra, sıra, tansiyon, tüm, uyku, volta, yurt, Çekemoğlu, çekim, çeviri, çevren, çok, çoğu, ülke, şey, şiir, şu, şura</li>
</ul>

<ul>
<li>This corpus contains 27 lemmas tagged as determiners (DET): ...bu, bazı, başka, bir, birkaç, birtakım, birçok, bu, bunca, bütün, diğer, hangi, hep, her, herhangi, hiç, hiçbir, ilk, kaç, kimi, o, tüm, unperiodismo, çok, çoğu, öteki, şu</li>
</ul>

<ul>
<li>Out of the above, 15 lemmas occurred sometimes as PRON and sometimes as DET: bazı, başka, bir, birkaç, birçok, bu, hangi, hep, kaç, kimi, o, tüm, çok, çoğu, şu</li>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as auxiliaries (AUX): bulun, değil, dur, i, mi, null, ol, y</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as AUX and sometimes as VERB: bulun, değil, dur, i, mi, ol</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: olarak, ken, yken, iken, olup, olurken</li>
    <li>VERB: alıp, diyerek, olup, ederek, edip, gelip, derken, giderek, gidip, alarak</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: olan, olduğunu, olduğu, olanlar, olmayan, iken, olduğuna, olur, olanların, olduğum</li>
    <li>VERB: olan, olduğu, olduğunu, gelen, eden, yapılan, bulunan, alan, verdiği, yaptığı</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>AUX: olmamakla, olması, olmasına, olabilmekte, olmak, olmaya</li>
    <li>VERB: olmak, demek, etmek, olması, yapmak, Hazırlanışı, almak, etmeye, etme, araştırma</li>
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
      <li>ADJ: acıların, aralarında, kızlar, Fransızlar, Sarı, Türkler, Türklerden, Yetkililer, acılarla, aydınlar</li>
      <li>ADP: siz, gibileri</li>
      <li>AUX: duk, sanız, sak, seniz, dik, dık, tik, misiniz, tık, yız</li>
      <li>AUX-Part: olanlar, olanların, olanlarla, olduklarını, olmayanlar</li>
      <li>NOUN: şeyler, insanlar, insanların, çocuklar, malzemeler, zamanlar, insanları, yıllar, kadınlar, yıllarda</li>
      <li>NUM: onlarla, 11'lerle, 1950'lerde, 1954'lerden, 1960'lar, 1960'larda, 1980'lerde, 68'lilerin, 80'lerin, birimiz</li>
      <li>PRON: bizim, biz, size, bunlar, bize, onlar, bizi, siz, onların, onları</li>
      <li>PROPN: Türkler, Amerikalıların, Türklerin, Almanlar, Çinliler, Fransızların, Kuvvetleri'nin, Sultanları, Türklerden, Türklere</li>
      <li>VERB: edin, pişirin, bakalım, karıştırın, ettiler, yapın, bakın, olanlar, başladılar, başladık</li>
      <li>VERB-Conv: otururlarken</li>
      <li>VERB-Part: olanlar, isteyenler, edenler, isteyenlerin, diyenlerin, okuyanlar, yaptıklarını, aldıklarını, bildik, dediklerini</li>
      <li>VERB-Vnoun: olmaları, çalışmaları, çalışmalar, harcamaları, kutlamaları, tartışmalar, çatışmalar, Saptamalarımda, açıklamalar, açıklamaların</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: içinde, ortaya, arasında, ilgili, yandan, yaşında, kadın, son, hasta, karşısında</li>
      <li>ADP: aşkın, dile, 'lik, BÜYÜLÜ, Gibi, Haydar, Işın, alayı, arasında, babadır</li>
      <li>AUX: du, dı, tı, di, dır, ti, sa, değil, dir, ydi</li>
      <li>AUX-Conv: olurken</li>
      <li>AUX-Part: olduğunu, olduğu, olduğuna, olduğundan, olduğunuzu, durduğunu, olacağı, olacağını, olanı, olanımız</li>
      <li>AUX-Vnoun: olmamakla, olması, olmasına, olabilmekte, olmak, olmaya</li>
      <li>NOUN: var, yok, zaman, gün, şey, içinde, yıl, arasında, yer, üzerine</li>
      <li>NUM: yüzde, 3, ikinci, milyar, 30, birinci, üçüncü, 20, beş, İkinci</li>
      <li>PART: ki, kiler, nde</li>
      <li>PRON: ben, ne, benim, bana, onun, kendi, biri, bunu, bu, o</li>
      <li>PROPN: Türk, Türkiye, Türkiye'de, Türkiye'nin, Mehmet, Atatürk, Avrupa, Ali, İstanbul, Mustafa</li>
      <li>VERB: dedi, olduğunu, oldu, etti, olduğu, söyledi, olur, başladı, geldi, olsun</li>
      <li>VERB-Conv: derken, vermeden, almadan, yaparken, yararlanarak, olmadan, başlamadan, belirtirken, bulunurken, bükülmeden</li>
      <li>VERB-Part: olduğunu, olduğu, olmadığını, gerektiğini, olduğuna, olmadığı, olacağını, yaptığını, dediği, ettiğini</li>
      <li>VERB-Vnoun: olması, olmak, demek, etmek, Hazırlanışı, yapmak, etmeye, etme, almak, araştırma</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: yandan, azından, Türklerden, acıdan, arkamdan, arkasından, karadan, ordan, ortadan, sıradan</li>
      <li>ADP: kinden</li>
      <li>AUX: olduğundan, olmaktan, oluşundan</li>
      <li>AUX-Part: olduğundan</li>
      <li>NOUN: tarafından, yüzden, yandan, yüzünden, açısından, ardından, yerden, üzerinden, arkasından, günden</li>
      <li>NUM: 1882'den, 1924'ten, 1954'lerden, 1981'den, 2007'den, 98'den, Birden, içimizden</li>
      <li>PRON: bundan, ondan, oradan, bunlardan, buradan, bizden, benden, birinden, nereden, sizden</li>
      <li>PROPN: Ankara'dan, Anadolu'dan, İstanbul'dan, Baykal'dan, CHP'den, Eylül'den, Hollanda'dan, Savaşı'ndan, Türklerden, Yılmaz'dan</li>
      <li>VERB: olduğundan, olmaktan, vermeden, ettikten, olmadan, almadan, yaptıktan, aldıktan, ayrıldıktan, durmadan</li>
      <li>VERB-Conv: vermeden, almadan, bükülmeden, durmadan, duymadan, geçmeden, görmeden, olmadan, usanmadan, yapmadan</li>
      <li>VERB-Part: olduğundan, ettikten, yaptıktan, aldıktan, ayrıldıktan, kaldıktan, verdikten, alındıktan, bitirdikten, bittikten</li>
      <li>VERB-Vnoun: olmaktan, davranışından, görmekten, konuşmasından, kullanmaktan, Bilmekten, Tutulmalarından, aktarmaktan, almaktan, anımsamaktan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: tarihi, Acı, Dergiyi, Ekonomiyi, Eli, Kapakçık, Sarı, Yöntemi, altını, ana</li>
      <li>ADP: gibileri, kadarını, kin</li>
      <li>AUX: olduğunu, olduğunuzu, durduğunu, olacağını, olanı, olduklarını, olmadığını, olmasını</li>
      <li>AUX-Part: olduğunu, olduğunuzu, durduğunu, olacağını, olanı, olduklarını, olmadığını</li>
      <li>NOUN: şey, şeyi, adını, para, şeyler, suyunu, iş, işi, elini, insanları</li>
      <li>NUM: birini, ikisi, %3, %51, 17'sini, 2002'yi, 66'ıncısı, altmışını, döviz, ikincisini</li>
      <li>PRON: bunu, onu, beni, ne, kendini, bizi, onları, bunları, seni, sizi</li>
      <li>PROPN: Türkiye'yi, İstanbul'u, ABD'yi, Amerika'yı, Bey'i, Paşa'yı, Almanya'yı, Atatürk'ü, Ayşe'yi, Keşanlı'yı</li>
      <li>VERB: olduğunu, olmadığını, gerektiğini, olmasını, olacağını, olmayı, yaptığını, ettiğini, bulunduğunu, aldığını</li>
      <li>VERB-Part: olduğunu, olmadığını, gerektiğini, olacağını, yaptığını, ettiğini, bulunduğunu, aldığını, istediğini, olanı</li>
      <li>VERB-Vnoun: olmasını, edilmesini, etmeyi, çalışmalarını, gitmeyi, olmayı, verilmesini, vermeyi, açmayı, açılmasını</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: ortaya, öne, araya, önüne, altına, içine, üstüne, sona, içe, karşıya</li>
      <li>ADP: dile, dosyana, yana, yeşile</li>
      <li>AUX: olmasına, olduğuna, olduklarına, olmaya</li>
      <li>AUX-Part: olduğuna, olduklarına</li>
      <li>AUX-Vnoun: olmasına, olmaya</li>
      <li>NOUN: üzerine, yerine, yere, ortaya, başına, haline, içine, eve, hale, yana</li>
      <li>NUM: ikiye, birine, milyara, milyona, 4200'e, 110'a, 110.8'e, 2004'te, 2005'e, 22,3'üne</li>
      <li>PRON: bana, ona, size, buna, bize, sana, kendisine, onlara, kendine, birbirine</li>
      <li>PROPN: Türkiye'ye, İstanbul'a, AB'ye, ABD'ye, Akdeniz'e, Allah'a, Almanya'ya, Avrupa'ya, Tanrı'ya, İngiltere'ye</li>
      <li>VERB: etmeye, yapmaya, olduğuna, okumaya, olmasına, çalışmaya, dile, olmaya, yazmaya, geçmeye</li>
      <li>VERB-Conv: istemeye, aldırıncaya, alınıncaya, biriktirinceye, bulana, gelinceye, sağlayıncaya, tamamlanıncaya, ulaşıncaya, yayınlayıncaya</li>
      <li>VERB-Part: olduğuna, olmadığına, ettiğine, gelene, gerektiğine, olacağına, olana, taşıdığına, yaptığına, artırdığına</li>
      <li>VERB-Vnoun: etmeye, okumaya, yapmaya, çalışmaya, yazmaya, olmaya, çıkarmaya, geçmeye, görmeye, olmasına</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Equ
    <ul>
      <li>NOUN: ayrıca, azar, Birer, Saatlerce, aylarca, bankalarca, emperyalizmce, gönlümüzce, günlerce, güçlerce</li>
      <li>NUM: kilolarca, onca, yüzlerce</li>
      <li>PRON: bence, onca, kendimce</li>
      <li>PROPN: Service, Vekaletince, Yüce</li>
      <li>VERB: deyince, olabildiğince, Bastıkça, alışınca, ekiplerince, geldiğince, yayınlayanlarca</li>
      <li>VERB-Conv: Bastıkça, alışınca</li>
      <li>VERB-Part: olabildiğince, geldiğince, yayınlayanlarca</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: acıların, ligin, Yolun, acının, dönemin, eşinin, gelirin, gençlerin, gerçeğin, gücün</li>
      <li>ADP: aşkın, uğraşın</li>
      <li>AUX: olanların, olmasının, olmanın</li>
      <li>AUX-Part: olanların</li>
      <li>NOUN: dünyanın, insanların, kişinin, insanın, devletin, herkesin, hayatın, çocuğun, ülkenin, şeyin</li>
      <li>NUM: ikisinin, 2007'nin, %74'ünün, 17'nin, 1925'in, 1955'in, 1961'in, 30'un, 80'lerin, Kalbin</li>
      <li>PRON: benim, onun, bunun, bizim, onların, sizin, senin, bunların, birinin, hepsinin</li>
      <li>PROPN: Türkiye'nin, Atatürk'ün, ABD'nin, İsrail'in, Anadolu'nun, AB'nin, İstanbul'un, Almanya'nın, Avrupa'nın, Dünya'nın</li>
      <li>VERB: olmanın, isteyenlerin, olduğunun, diyenlerin, etmenin, açılmasının, konuşmaların, olanların, yaşamanın, açıklamaların</li>
      <li>VERB-Part: isteyenlerin, olduğunun, diyenlerin, olanların, bekleyenlerin, dediğinin, gelenlerin, saydıklarımın, Yazanın, anlattığımızın</li>
      <li>VERB-Vnoun: olmanın, etmenin, açıklamaların, getirmenin, gitmenin, kalmanın, saymanın, yaşamanın, çalışmaların, çalışmanın</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: acılarla, acıyla, başkalarıyla, bütünüyle, eşiyle, güçlerle, kadınla, sevgiliyle</li>
      <li>AUX-Part: olanlarla</li>
      <li>AUX-Vnoun: olmamakla</li>
      <li>NOUN: nedeniyle, nedenle, hızla, amacıyla, gerekçesiyle, insanlarla, adıyla, dolayısıyla, gücüyle, yoluyla</li>
      <li>NUM: onlarla, 11'lerle, 54'le, yapsatçılarla</li>
      <li>PRON: onunla, benimle, kendisiyle, bizimle, bununla, seninle, kimseyle, onlarla, sizinle, "O'nunla</li>
      <li>PROPN: Bey'le, Atatürk'le, Mirkelam'la, Adıvar'la, Alex'le, Almanla, Arabistan’la, Attila'yla, Avşar'la, Azerbaycan'la</li>
      <li>VERB: bakışlarıyla, olmakla, olmamakla, almakla, ağlamakla, demesiyle, düşmekle, edilmesiyle, etmekle, gelişiyle</li>
      <li>VERB-Part: ağlatanla, gelişenlerle, giydikleriyle, olanla, olanlarıyla, oturanlarla</li>
      <li>VERB-Vnoun: bakışlarıyla, olmamakla, demesiyle, düşmekle, edilmesiyle, gelişiyle, olmakla, Açmakla, Konuşmakla, Kurtuluşla</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: içinde, arasında, yaşında, karşısında, yanında, dışında, üstünde, altında, içimde, ortada</li>
      <li>ADP: arasında, birlikte, dışında, içinde, raftadır</li>
      <li>AUX: olduğunda, sede</li>
      <li>AUX-Part: olduğunda</li>
      <li>NOUN: içinde, arasında, şekilde, üzerinde, hakkında, yerde, yanında, dışında, başında, karşısında</li>
      <li>NUM: yüzde, birinde, altında, 1945'te, 1992'de, yedide, 1'de, 1946'da, 1968'de, 1995'te</li>
      <li>PRON: orada, burada, bizde, nerede, bende, bunda, onda, kendisinde, nerde, birinde</li>
      <li>PROPN: Türkiye'de, İstanbul'da, Irak'ta, Avrupa'da, İngiltere'de, Amerika'da, Ankara'da, Anadolu'da, Kadıköy'de, ABD'de</li>
      <li>VERB: uyandığımda, bakıldığında, geldiğinde, olduğunda, açıklamada, gittiğimde, konuşmada, konuşmasında, baktığımızda, baktığında</li>
      <li>VERB-Conv: bildirildiğinde, girdiklerinde, konduklarında</li>
      <li>VERB-Part: uyandığımda, bakıldığında, geldiğinde, olduğunda, gittiğimde, baktığımızda, baktığında, baktığınızda, döndüğümde, ettiğinde</li>
      <li>VERB-Vnoun: konuşmada, Saptamalarımda, açıklamada, benzetmelerimde, durmakta, etmekte, gelişmekte, konuşmalarında, konuşmasında, oylamada</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: ilgili, kadın, son, hasta, ortak, yapın, dolu, erkek, geri, alt</li>
      <li>ADP: siz, 'lik, BÜYÜLÜ, Gibi, Haydar, Işın, alayı, babadır, dahi, dümen</li>
      <li>AUX: ydi, ken, tu, tur, değildir, olduğu, değilim, tir, değilsiniz, ydu</li>
      <li>AUX-Part: olduğu, olanlar, olacağı, olanımız, olduğum, olmadığı, olmayanlar</li>
      <li>AUX-Vnoun: olması, olmak</li>
      <li>NOUN: zaman, gün, şey, yıl, yer, insan, su, kabul, söz, kez</li>
      <li>NUM: 3, ikinci, milyar, 30, birinci, üçüncü, 20, beş, İkinci, on</li>
      <li>PART: ki, kiler, nde</li>
      <li>PRON: ben, ne, kendi, o, bu, biri, biz, sen, bunlar, onlar</li>
      <li>PROPN: Türk, Türkiye, Mehmet, Atatürk, Avrupa, Ali, İstanbul, Mustafa, Kemal, ABD</li>
      <li>VERB: olduğu, olmak, etmek, olması, demek, yapmak, etme, Hazırlanışı, almak, olma</li>
      <li>VERB-Conv: yararlanarak, çıkarken, Terliyken, buharlaşarak, devleştirerek, değerlendirerek, düşünürken, ederken, ekipken, faydalanılarak</li>
      <li>VERB-Part: olduğu, olmadığı, olanlar, dediği, olacağı, yaptığı, istediği, isteyenler, yazdığı, bulunduğu</li>
      <li>VERB-Vnoun: olmak, etmek, demek, olması, yapmak, Hazırlanışı, almak, etme, görmek, araştırma</li>
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
      <li>AUX: değil, değildir, değildi, değiller, olmayan, olmamakla, olmayacaktır, değildim, değilim, değimlidir</li>
      <li>AUX-Part: olmayan, olmadığı, olmadığını, olmayanlar</li>
      <li>AUX-Vnoun: olmamakla</li>
      <li>NOUN: yok, yoksa, edilmişlik, görmemezlikten, inanmamalarına, kabullenmemelerindendir, yoklar, yoksun</li>
      <li>VERB: olmaz, olmadığını, olmadığı, olmayan, olmadı, olmuyor, olamaz, bilmem, kalmadı, bulunmayan</li>
      <li>VERB-Conv: başlamadan, bulamayınca, durmadan, istemeye, olmadan, vermeden, beklemeden, bilmedikçe, bükülmeden, bırakmadan</li>
      <li>VERB-Part: olmadığını, olmadığı, olmayan, olmaz, bulunmayan, bilmediğim, etmeyen, bilmeyen, bulunmadığını, olmadığına</li>
      <li>VERB-Vnoun: olmaması, olmamakla, vermemek, etmemek, gelmemesi, görmemesi, Dağılmaması, Gitmeme, abartılmaması, akmamasını</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: pişince, yana, Gösterişsiz, dememize, kakışı, yaşamamızı</li>
      <li>ADP: sız, yana</li>
      <li>AUX: olarak, du, ken, dı, di, tı, ti, sa, dum, tu</li>
      <li>AUX-Conv: olarak, ken, iken, yken, olup, olurken</li>
      <li>AUX-Part: olan, olduğunu, olduğu, olanlar, iken, olduğuna, olur, olanların, olduğum, olduğundan</li>
      <li>AUX-Vnoun: olması, olmasına, olabilmekte, olmak, olmaya</li>
      <li>NOUN: var, vardı, vardır, artış, buluş, tüketici, atışları, kalıcı, tüketiciler, Geçiş</li>
      <li>PROPN: Kurtuluş, Çeşitlemeler</li>
      <li>VERB: olan, dedi, olduğu, olduğunu, olur, oldu, gelen, etti, söyledi, eden</li>
      <li>VERB-Conv: alıp, diyerek, olup, ederek, edip, gelip, derken, giderek, gidip, alarak</li>
      <li>VERB-Part: olan, olduğu, olduğunu, gelen, eden, yapılan, bulunan, alan, verdiği, yaptığı</li>
      <li>VERB-Vnoun: olmak, demek, etmek, olması, yapmak, Hazırlanışı, almak, etmeye, etme, araştırma</li>
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
      <li>AUX: olur, olabilir, değiller, dik, durur, dururlar, dür, olmaz, olmuşlar, olurken</li>
      <li>AUX-Conv: olurken</li>
      <li>AUX-Part: olur, olmuşlar</li>
      <li>VERB: olur, eder, olmaz, gelir, ister, gerekir, olabilir, der, gider, yapar</li>
      <li>VERB-Conv: derken, yaparken, belirtirken, bulunurken, getirirken, olurken, oynarken, Dinlenirken, Unuturken, ararken</li>
      <li>VERB-Part: olur, eder, getir, gider, ister, olmaz, yapar, benzer, çıkar, gelir</li>
      <li>VERB-Vnoun: anılmam, bakmam, başlamam, unutulmazlar, yapmak"tır</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: mi, mı, mu, misiniz, musunuz, mısınız, mü, mıdır, mısın, misin</li>
      <li>VERB: ediyor, oluyor, geliyor, diyor, çalışıyor, biliyor, gerekiyor, istiyor, olmuyor, yapıyor</li>
      <li>VERB-Conv: edilmeden, karıştırarak, olmadan, tanıtmadan, yaparak, çalışmadan</li>
      <li>VERB-Part: ediyor, çalışıyor, duruyor, geliyor, istiyor, biliyor, oluyor, gidiyor, kalıyor, almış</li>
      <li>VERB-Vnoun: vermemek</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX: dır, dir, dı, değil, tı, ydı, tir, tır, ydi, ti</li>
      <li>AUX-Conv: yken</li>
      <li>AUX-Part: olduğunu, olduğu, iken, olduğuna, olduğum, olduğundan, olduğunuzu, durduğunu, olduklarına, olduklarını</li>
      <li>VERB: dedi, olduğu, olduğunu, oldu, etti, söyledi, başladı, geldi, verdiği, yaptı</li>
      <li>VERB-Conv: oldukça, deyip, olunca, garip, Boyunca, Kaynayınca, aldırıncaya, artıkça, başlayınca, bildirildiğinde</li>
      <li>VERB-Part: olduğu, olduğunu, verdiği, yaptığı, bulunduğu, olmuş, olmadığını, gerektiğini, olmadığı, aldığı</li>
      <li>VERB-Vnoun: Forma, Gitmeyi, Oynamak, Süzme, ahmak, derinlemesine, dozmayı, egemen, enlemesine, geçme</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>AUX: oluyor, du, duruyor, duruyordu, dır, olabilmekte</li>
      <li>AUX-Vnoun: olabilmekte</li>
      <li>VERB: diyerek, ederek, belirterek, giderek, alarak, diyor, oluyor, yaparak, bakarak, geliyor</li>
      <li>VERB-Conv: diyerek, ederek, belirterek, giderek, alarak, yaparak, bakarak, göstererek, çıkarak, düşünerek</li>
      <li>VERB-Part: sanıyor, anlatıyor, bakıyor, bakıyorlar, başlıyorlar, diyor, duruyor, edebilecekleri, edilmekte, ediyor</li>
      <li>VERB-Vnoun: açıklamada, Amerikanlaşmakta, belirtmekte, bilinmemekte, bulabilmekte, etmekte, gezmektedir, kalınlaştırmada, kullanılmakta, meşrulaştırmakta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>AUX: olmayacaktır, olacak, olacaklar, olacağı, olacağını, olacağız</li>
      <li>AUX-Part: olacağı, olacağını</li>
      <li>VERB: olacak, edecek, yapılacak, yapacak, kalacak, olacaktır, alacak, olacağı, verecek, çıkacak</li>
      <li>VERB-Part: edecek, kalacak, olacak, olacağı, olacağını, yapacak, yapacağı, yapılacak, yapacağını, alacak</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX: sa, se, ise, sanız, sak, seniz, sam, yse, sen, san</li>
      <li>VERB: olsa, varsa, olmasa, olursa, gerekirse, olmazsa, dersem, etse, eğitirseniz, isteniyorsa</li>
      <li>VERB-Part: Atlayamayanlarsa, ediyor, esiyor</li>
      <li>VERB-Vnoun: göstermekse, uğraşmaktansa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Des
    <ul>
      <li>AUX: olsa, değilse, değilsek</li>
      <li>VERB: olsa, varsa, olmasa, anlatsam, atsak, desem, çalsa, Bilseniz, Bıraksalar, Görsen</li>
      <li>VERB-Vnoun: yürütmese</li>
    </ul>
  </li>
</ul>

<ul>
  <li>DesPot
    <ul>
      <li>VERB: becerebilsek</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>AUX: dır, dir, tir, tır, tur, değildir, dur, tür, dirler, dırlar</li>
      <li>AUX-Part: olandır, olmuştur</li>
      <li>VERB: olacaktır, yapılmaktadır, Otur, Vazgeçilmezdir, asmamıştır, atanmıştır, açmaktadır, bulacaklardır, bulandır, bulmuştur</li>
      <li>VERB-Part: bulandır, göndermiştir, olmamıştır, olmayandır, yatmış</li>
      <li>VERB-Vnoun: vermeleridir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>GenNec
    <ul>
      <li>VERB: algılanmamalıdır, beklenmelidir, düşünülmelidir, edilmelidir, verilmelidir, yapılmalıdır, öğretilmelidir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>GenPot
    <ul>
      <li>VERB: diyememiştir, edebilenlerdir, görülememiştir, yapılabilmektedir</li>
      <li>VERB-Part: edebilenlerdir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: dur, olarak, dür, yum, olurken, sın</li>
      <li>AUX-Conv: olarak, olurken</li>
      <li>VERB: olsun, edin, pişirin, bak, karıştırın, var, bakın, derken, yapın, gel</li>
      <li>VERB-Conv: derken, diyerek, yaparken, alarak, ederek, giderek, belirterek, belirtirken, bulunurken, dayanarak</li>
      <li>VERB-Part: belirtilen, varamamış, çevrilen</li>
      <li>VERB-Vnoun: borçlanma, geçme</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: değil, ydı, dı, ydü, yken, tı, ymiş, yım, yız, di</li>
      <li>AUX-Conv: yken</li>
      <li>AUX-Part: iken, yken</li>
      <li>VERB: benzer, geçen, oldukça, beraber, deyip, geçer, iken, ister, Olmaz, beğenir</li>
      <li>VERB-Conv: oldukça, deyip, garip, Boyunca, artıkça, dayalı, münasip, Örnekal'layıp</li>
      <li>VERB-Part: geçen, benzer, iken, beğenir, bildik, geçmiş, acısever, ahlâklanmış, bahşeyleyeceği, batan</li>
      <li>VERB-Vnoun: Forma, Gitmeyi, Oynamak, Süzme, ahmak, derinlemesine, dozmayı, egemen, enlemesine, isbatlamak</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>AUX: olmalı</li>
      <li>VERB: olmalı, olmalıdır, edilmelidir, alınmalı, bulunmalı, bulunmalıdır, edilmeli, etmeli, etmeliyim, olmalısın</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>VERB: bakalım, alalım, diyelim, gidelim, doya, edelim, anlatayım, gideyim, yapayım, Susalım</li>
      <li>VERB-Conv: yürüye</li>
      <li>VERB-Vnoun: üzülmeyeyim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pot
    <ul>
      <li>AUX: olabilir, olabilmekte</li>
      <li>AUX-Vnoun: olabilmekte</li>
      <li>VERB: olabilir, edilebilir, olamaz, yapamaz, edebilir, alabilir, edebilirim, gelebilir, olabilecek, verebilir</li>
      <li>VERB-Conv: bulamayınca</li>
      <li>VERB-Part: olabileceği, olabileceğini, edilebilir, gelebilen, giyebileceğini, olabildiğince, sayılabilecek, verebilecek, yapabileceğini, yapabilen</li>
      <li>VERB-Vnoun: olabilmek, alabilmek, izleyebilmek, seçebilmek, anlatabilmesi, anlayabilmek, bakabilme, başvurulabilmesi, buharlaşabilmesi, bulabilmekte</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: olacak, olmayacaktır, olacaklar, olacağı, olacağını, olacağız</li>
      <li>AUX-Part: olacağı, olacağını</li>
      <li>VERB: olacak, yapılacak, edecek, olacaktır, yapacak, olacağı, olacağını, yapacağı, alınacak, kalacak</li>
      <li>VERB-Conv: direnip</li>
      <li>VERB-Part: olacağı, olacağını, yapacağı, edecek, yapılacak, yapacağını, edeceğini, geçeceğini, olacak, olmayacağını</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: du, dı, tı, di, ti, dum, tu, ydı, mış, tü</li>
      <li>AUX-Part: olduğunu, olduğu, olduğuna, olduğum, olduğundan, olduğunuzu, durduğunu, olduklarına, olduklarını, olduğumuz</li>
      <li>VERB: dedi, olduğu, olduğunu, oldu, etti, söyledi, başladı, geldi, verdiği, yaptı</li>
      <li>VERB-Conv: bildirildiğinde, geçiyormuşçasına, girdiklerinde, konduklarında, yazılmışken</li>
      <li>VERB-Part: olduğu, olduğunu, verdiği, yaptığı, bulunduğu, olmadığını, gerektiğini, olmadığı, aldığı, yaşadığı</li>
      <li>VERB-Vnoun: BEKLEMEK, alasıymış, demekmiş, getirilmiş, kılmakta, uygulamamasıydı</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: dır, değil, dir, mi, mı, tir, mu, olan, tır, sa</li>
      <li>AUX-Conv: yken, olurken</li>
      <li>AUX-Part: olan, olanlar, olmayan, iken, olur, olanların, bulunan, olandır, olanlarla, olanı</li>
      <li>AUX-Vnoun: olabilmekte</li>
      <li>VERB: olan, olur, gelen, eden, yapılan, bulunan, alan, ediyor, çıkan, eder</li>
      <li>VERB-Conv: derken, oldukça, yaparken, deyip, belirtirken, bulunurken, garip, getirirken, olurken, oynarken</li>
      <li>VERB-Part: olan, gelen, eden, yapılan, bulunan, alan, çıkan, edilen, yapan, gereken</li>
      <li>VERB-Vnoun: açıklamada, Forma, Gitmeyi, Oynamak, Süzme, ahmak, anılmam, bakmam, başlamam, belirtmekte</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB: karıştırın, belirten, belirterek, belirtti, kaynatın, değerlendirme, karıştırarak, oluşturan, oluşturduğu, ilgilendiren</li>
      <li>VERB-Conv: belirterek, karıştırarak, durdurup, çıkarıp, değiştirerek, değiştirip, karıştırıp, açtırıp, belirtirken, kapatıp</li>
      <li>VERB-Part: belirten, oluşturan, oluşturduğu, ilgilendiren, değiştiren, gerektirdiği, güldüren, hatırlatan, oluşturacak, sürdüren</li>
      <li>VERB-Vnoun: değerlendirme, çıkarmaya, değiştirmek, değerlendirmek, geliştirmek, iyileştirmek, kapatmak, yürütme, benzetmelerimde, bildirmek</li>
    </ul>
  </li>
</ul>

<ul>
  <li>CauCau
    <ul>
      <li>VERB: ciltlettirdim, öldürtür</li>
      <li>VERB-Part: ciltlettirdim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>CauPass
    <ul>
      <li>VERB: belirtildi, bildirildi, yöneltilen, Kaydırılarak, arttırıldı, bekletileceği, belirtilerek, belirtilmiştir, dayandınlmış, dayatılmış</li>
      <li>VERB-Conv: Kaydırılarak, belirtilerek, indirilip, karıştırılarak, projelendirilerek</li>
      <li>VERB-Part: yöneltilen, bekletileceği, dayandınlmış, durdurulan, genişletilmiş, korkutulurlar, kızartılan, nitelendiren, sonuçlandırılamadığını, sonuçlandırıldığı</li>
      <li>VERB-Vnoun: dondurulması, düzeltilmeye, erdirilmesi, gerçekleştirilmesi, gerçekleştirilmesinde</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX: değildi, değilse, değil, değildim, değildin, değilsek</li>
      <li>VERB: yapılan, edilen, verilen, yapılacak, kullanılan, Hazırlanışı, yaşanan, edildi, edilir, edilmesi</li>
      <li>VERB-Conv: bağlanarak, bükülmeden, edilerek, toplanıp, vurularak, yapılıp, Adanmadan, Dökülüp, Eğilince, Kıpırdanıp</li>
      <li>VERB-Part: yapılan, edilen, verilen, kullanılan, yaşanan, bilinen, düzenlenen, katılan, kurulan, yapılacak</li>
      <li>VERB-Vnoun: Hazırlanışı, yapılması, edilmesi, verilmesi, edilmesini, açılması, kullanılması, verilmesini, çekilmesi, alınması</li>
    </ul>
  </li>
</ul>

<ul>
  <li>PassPass
    <ul>
      <li>VERB: denilen, konulmaz</li>
      <li>VERB-Part: denilen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>PassRfl
    <ul>
      <li>VERB-Part: kaçınılmaz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>VERB: atıştırmayın, bakışıp, dövüşmeli, dövüşmeye, görüştüm, karşılaşacağım, karşılaşmanın, karşılaşmasında, karşılaşmış, karşılaştıkları</li>
      <li>VERB-Conv: bakışıp</li>
      <li>VERB-Part: karşılaşmış, karşılaştıkları, karşılaştıklarında, söyleşir</li>
      <li>VERB-Vnoun: dövüşmeye, karşılaşmanın, söyleşmek, öpüşmemiz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rfl
    <ul>
      <li>VERB: hazırlanır, görünen, katıldı, kesilmiş, kırıldı, yakalanma, çekildi, Direnince, Direniş, Hazırlanışı</li>
      <li>VERB-Conv: Direnince, bürünerek, direnemeden, giyinerek, kaygılanıp, çığlıklanınca</li>
      <li>VERB-Part: görünen, ayrıldıktan, ayrılır, açılmış, bulunan, dayanacağı, dayandığını, direnen, dökülüyor, etkileniyorlar</li>
      <li>VERB-Vnoun: Direniş, Hazırlanışı, bulunması, direnişe, giyinmeyi, silahsızlanması, yararlanmak, yüklenmelerine, yıkanma</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Evident</a></li>
</ul>

<ul>
  <li>Fh
    <ul>
      <li>AUX: du, dı, di, tı, ti, dum, tu, tü, ydi, tım</li>
      <li>VERB: dedi, oldu, etti, söyledi, başladı, geldi, dedim, vardı, yaptı, çıktı</li>
      <li>VERB-Part: bildik, yitirmiş, atacak, beklenmedik, davranır, demiş, der, dönmüş, düşünememiş, fırlamış</li>
      <li>VERB-Vnoun: kılmakta, olması, uygulamamasıydı</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nfh
    <ul>
      <li>AUX: mış, muş, miş, ymiş, ymış, müş, tur, imiş, tir, ymuş</li>
      <li>VERB: olmuş, demiş, etmiş, gelmiş, kalmış, olmuştur, başlamış, vermiş, almış, edilmiş</li>
      <li>VERB-Conv: geçiyormuşçasına, yazılmışken</li>
      <li>VERB-Part: çekilmiş, geçmiş, tanınmış, yazılmış, doğranmış, edilmiş, geliştirilmiş, gelmiş, seçilmiş, soyulmuş</li>
      <li>VERB-Vnoun: BEKLEMEK, alasıymış, getirilmiş</li>
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
      <li>PRON: bu, bunu, bunun, buna, bunlar, bundan, bunları, bunların, o, şunu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: kimi, Tasviri, biribirine, böylesine, diri, çoğu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>NOUN: Niceden, başhekim</li>
      <li>PRON: ne, kim, neler, nedir, nerede, nereye, neyi, nereden, nerde, neye</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>PRON: orada, burada, buraya, buradan, oradan, oraya, burda, şuradan, Adadan, Buranın</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: ben, bana, benim, onun, o, onu, beni, biz, bizim, ona</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: birbirlerini, birbirinden, birbirine</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: 1, iki, üç, 2, bir, bin, 4, 3, milyon, 5</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dist
    <ul>
      <li>NUM: birer, ikişer, üçer, yüzer</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: 53'üncü</li>
      <li>NUM: ikinci, birinci, üçüncü, İkinci, 1., 2., 3., beşinci, 20., dördüncü</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: kendi, kendini, kendine, kendisine, kendisini, kendimi, kendisi, kendilerini, kendilerine, kendileri</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADJ: biz, eminim, içindeyim, sıcakkanlıyız</li>
      <li>AUX: dum, tım, duk, dim, tim, dım, sak, dik, dık, tik</li>
      <li>NOUN: hepimizin, eminim, yazınız, çoğumuzun, Benim, Birimize, Bizde, Mecburum, bahçesindeyiz, bizden</li>
      <li>NUM: birimiz, yüzsüzüz</li>
      <li>PRON: ben, benim, bana, beni, biz, bizim, bize, bizi, kendimi, bence</li>
      <li>VERB: dedim, başladım, oldum, bakalım, biliyorum, diyorum, ettim, gittim, gördüm, istiyorum</li>
      <li>VERB-Part: bildik, alacak, atacak, beklenmedik, diyeceğim, edemeyeceğim, ediyor, gömüleceğim, koyamayacağım, olmayacak</li>
      <li>VERB-Vnoun: anılmam, bakmam, başlamam, üzülmeyeyim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>ADP: siz, sız</li>
      <li>AUX: dur, sanız, seniz, misiniz, dür, sen, değilsiniz, musunuz, mısınız, san</li>
      <li>NOUN: senden, sizden, Anlayışlısınız, KADARSIN, biriniz, birisiniz, dikkatlisiniz, efendimizsin, gerisin, güzelsin</li>
      <li>PRON: size, sen, siz, sizin, seni, senin, sizi, kendinizi, kendinize, sizden</li>
      <li>VERB: edin, pişirin, karıştırın, var, bak, bakın, yapın, gel, doğrayın, anlat</li>
      <li>VERB-Part: yapar, çevrilen</li>
      <li>VERB-Vnoun: geçme</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ: içinde, ortaya, arasında, ilgili, yandan, yaşında, kadın, son, hasta, karşısında</li>
      <li>ADP: aşkın, dile, 'lik, BÜYÜLÜ, Gibi, Haydar, Işın, alayı, arasında, babadır</li>
      <li>AUX: du, dı, tı, di, dır, ti, değil, sa, dir, ydi</li>
      <li>AUX-Conv: olurken</li>
      <li>AUX-Part: olduğunu, olduğu, olanlar, olduğuna, olanların, olduğundan, olduğunuzu, durduğunu, olacağı, olacağını</li>
      <li>AUX-Vnoun: olmamakla, olması, olmasına, olabilmekte, olmak, olmaya</li>
      <li>NOUN: var, yok, zaman, gün, şey, içinde, yıl, arasında, yer, üzerine</li>
      <li>NUM: yüzde, 3, ikinci, milyar, 30, birinci, üçüncü, 20, beş, İkinci</li>
      <li>PART: ki, kiler, nde</li>
      <li>PRON: ne, onun, kendi, biri, bunu, o, bu, onu, bunun, ona</li>
      <li>PROPN: Türk, Türkiye, Türkiye'de, Türkiye'nin, Mehmet, Atatürk, Avrupa, Ali, İstanbul, Mustafa</li>
      <li>VERB: dedi, olduğunu, oldu, etti, olduğu, söyledi, olur, başladı, geldi, olsun</li>
      <li>VERB-Conv: derken, vermeden, almadan, yaparken, yararlanarak, olmadan, başlamadan, belirtirken, bulunurken, bükülmeden</li>
      <li>VERB-Part: olduğunu, olduğu, olmadığını, gerektiğini, olduğuna, olmadığı, olanlar, olacağını, yaptığını, dediği</li>
      <li>VERB-Vnoun: olması, olmak, demek, etmek, Hazırlanışı, yapmak, etmeye, etme, almak, araştırma</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Infm
    <ul>
      <li>VERB: görmüyor, sarfediyor</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: başbakanımız, başkaları, başkalarına, başkalarıyla, büyükleri, dememize, dostumuz, komşumuzu, komşumuzun, konumuz</li>
      <li>AUX: olduğunuzu, olanımız, olduklarına, olduklarını, olduğumuz, sinizdir</li>
      <li>AUX-Part: olduğunuzu, olanımız, olduklarına, olduklarını, olduğumuz</li>
      <li>NOUN: ülkemizde, Günümüzde, başkalarına, ellerinde, gözlerini, günümüz, temiz, birbirlerinden, elimizde, önümüzde</li>
      <li>NUM: Evimiz, Geçmişimiz, Rengimiz, Vaktimiz, belleğimiz, birimiz, dergimiz, elimiz, gezimiz, ikimiz</li>
      <li>PRON: hepsi, bazıları, kendilerini, hepimiz, hepsinin, kendilerine, kendinizi, hepsini, kendileri, kendilerinin</li>
      <li>PROPN: İçişleri, Demeçleri'ni, Devletleri'nin, Günleri'ne, Köyleri'ne, Organize, Toplantıları'nın, Türkiye'miz, Türkiyemizde, Türkiyemizin</li>
      <li>VERB: ettiğimiz, olduklarını, aldıkları, aldığımız, oldukları, yaptıkları, çalışmalarını, bildiğiniz, hazırladığınız, olduğunuz</li>
      <li>VERB-Conv: girdiklerinde, konduklarında</li>
      <li>VERB-Part: ettiğimiz, olduklarını, aldıkları, aldığımız, oldukları, yaptıkları, bildiğiniz, hazırladığınız, olduğunuz, söyledikleri</li>
      <li>VERB-Vnoun: çalışmalarını, bakışlarıyla, çalışmalarına, konuşmalarında, olmaları, olmanızı, yapmanızı, Tutulmalarından, affetmeniz, almalarına</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: içinde, arasında, yaşında, karşısında, yanında, yapın, dışında, önüne, üstünde, altına</li>
      <li>ADP: alayı, arasında, dosyana, dışında, filan, içinde, kadarını, kini, kökü, yanı</li>
      <li>AUX: olduğunu, olduğu, değilim, olması, olmasına, olduğuna, olduğum, olduğundan, olmasının, değil</li>
      <li>AUX-Part: olduğunu, olduğu, olduğuna, olduğum, olduğundan, durduğunu, olacağı, olacağını, olduğun, olduğunda</li>
      <li>AUX-Vnoun: olması, olmasına</li>
      <li>NOUN: içinde, arasında, üzerine, tarafından, kaşığı, yerine, üzerinde, adı, başkanı, hakkında</li>
      <li>NUM: birinde, birini, ikisi, ikisinin, altında, birine, birincisi, İkisi, biri, %74'ünün</li>
      <li>PART: ki, kiler</li>
      <li>PRON: kendi, biri, kendini, kendisine, onunla, kendine, kendisini, birbirine, kendimi, kendisi</li>
      <li>PROPN: Birliği, Üniversitesi, Başkanı, Bakanlığı, Dili, Savaşı, Üniversitesi'nde, Beyoğlu'nda, Cumhuriyeti, Derneği</li>
      <li>VERB: olduğu, olduğunu, olması, verdiği, yaptığı, bulunduğu, olmadığını, gerektiğini, olmadığı, aldığı</li>
      <li>VERB-Conv: alışınca, bildirildiğinde, çalışmamdan</li>
      <li>VERB-Part: olduğu, olduğunu, verdiği, yaptığı, bulunduğu, olmadığını, gerektiğini, olmadığı, aldığı, yaşadığı</li>
      <li>VERB-Vnoun: olması, Hazırlanışı, etmesi, yapması, yapılması, edilmesi, olmasını, verilmesi, alınması, edilmesini</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: AVM, Borec, HES, Lady, P'nin, PC, TV, YTL, cm, gr</li>
          <li>PROPN: ABD, ABD'nin, AKP'nin, ABD'de, ABD'li, CHP, DYP'li, TBMM, 'İngiltere'ye, 20.00'de</li>
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
          <li>X: batıl, tefek</li>
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
          <li>ADJ: Umarım, yanımda, Yanıma, arkamdan, başbakanımız, dememize, dostumuz, içimde, komşumuzu, komşumuzun</li>
          <li>AUX: değilim, olduğum, mişim, olanımız, olduğumuz, olmamdır</li>
          <li>AUX-Part: olduğum, olanımız, olduğumuz</li>
          <li>NOUN: annem, babam, yanımda, babamın, annemin, oğlum, ülkemizde, canım, hocam, Günümüzde</li>
          <li>NUM: Evimiz, Geçmişimiz, Rengimiz, Vaktimiz, belleğimiz, beşimde, birimiz, dergimiz, dördümde, dört</li>
          <li>PRON: kendimi, benimle, hepimiz, kendime, kendimiz, birbirimize, bizimle, hepimizin, kendimizi, birbirimizi</li>
          <li>PROPN: Allahım, Allah'ım, Alpaslan'ım, Atatürk'üm, Cumhurbaşkanım, Deniz'im, Efendim, Emin, Hüseyin'im, Mahir'im</li>
          <li>VERB: olduğum, istediğim, ettiğimiz, gördüğüm, aldığımız, ettiğim, olduğumu, sevdiğim, uyandığımda, yaptığım</li>
          <li>VERB-Conv: çalışmamdan</li>
          <li>VERB-Part: olduğum, istediğim, ettiğimiz, gördüğüm, aldığımız, ettiğim, olduğumu, sevdiğim, uyandığımda, yaptığım</li>
          <li>VERB-Vnoun: vermem, Saptamalarımda, benzetmelerimde, Gitmem, almamla, alınmamı, arayışım, atmamız, atmamıza, ayartmamın</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>ADJ: yapın, azından, midende, olmanızda, vücudunuzun</li>
          <li>ADP: dosyana</li>
          <li>AUX: olduğunuzu, olduğun, sinizdir</li>
          <li>AUX-Part: olduğunuzu, olduğun</li>
          <li>NOUN: azından, eşliğinde, arkadaşlarınızla, yazınız, başkanlığında, defterinize, dışında, karşınızda, Başınızın, Yöneticiniz</li>
          <li>PRON: onunla, kendinizi, benden, kendinize, Kendin, Neyin, Seninle, hepiniz, organize, Dininizi</li>
          <li>PROPN: Beyoğlu'nda, Türkbükü'nde, Bağlarbaşı'nda, Beldibi'ne, Beyoğlu'ndan, Boğaziçi'nde, Denizaltında, Dünya'nın, Eczacıbaşı'nın, Kasapoğlu'nun</li>
          <li>VERB: bildiğiniz, hazırladığınız, olduğunuz, baktığınızda, deyince, ettiğiniz, istediğiniz, olduğunuzu, yaptığınız, yaşadığınız</li>
          <li>VERB-Part: bildiğiniz, hazırladığınız, olduğunuz, baktığınızda, ettiğiniz, istediğiniz, olduğunuzu, yaptığınız, yaşadığınız, aldığınız</li>
          <li>VERB-Vnoun: olmanızı, yapmanızı, Dinlenmen, affetmeniz, anlamanız, anlamanıza, boşanman, buluşmanızda, dillenmenizi, edilmene</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADJ: içinde, arasında, yaşında, karşısında, yanında, dışında, önüne, üstünde, altına, altında</li>
          <li>ADP: alayı, arasında, dışında, filan, içinde, kadarını, kini, kökü, yanı, öncesi</li>
          <li>AUX: olduğunu, olduğu, olması, olmasına, olduğuna, olduğundan, olmasının, değil, durduğunu, olacağı</li>
          <li>AUX-Part: olduğunu, olduğu, olduğuna, olduğundan, durduğunu, olacağı, olacağını, olduklarına, olduklarını, olduğunda</li>
          <li>AUX-Vnoun: olması, olmasına</li>
          <li>NOUN: içinde, arasında, üzerine, tarafından, kaşığı, yerine, üzerinde, adı, başkanı, hakkında</li>
          <li>NUM: birinde, birini, ikisi, ikisinin, altında, birine, birincisi, İkisi, biri, %74'ünün</li>
          <li>PART: ki, kiler</li>
          <li>PRON: kendi, biri, kendini, kendisine, kendine, kendisini, birbirine, hepsi, kendisi, bazıları</li>
          <li>PROPN: Birliği, Üniversitesi, Başkanı, Bakanlığı, Dili, Savaşı, Üniversitesi'nde, Cumhuriyeti, Derneği, Fakültesi</li>
          <li>VERB: olduğu, olduğunu, olması, verdiği, yaptığı, bulunduğu, olmadığını, gerektiğini, olmadığı, aldığı</li>
          <li>VERB-Conv: alışınca, bildirildiğinde, girdiklerinde, konduklarında</li>
          <li>VERB-Part: olduğu, olduğunu, verdiği, yaptığı, bulunduğu, olmadığını, gerektiğini, olmadığı, aldığı, yaşadığı</li>
          <li>VERB-Vnoun: olması, Hazırlanışı, etmesi, yapması, yapılması, edilmesi, olmasını, olmaları, verilmesi, alınması</li>
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
          <li>ADV: bir, iki</li>
          <li>DET: bir, her</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 5 lemmas as copulas (<a>cop</a>). Examples: y, i, ol, değil, null.</li>
</ul>

<ul>
<li>This corpus uses 7 lemmas as auxiliaries (<a>aux</a>). Examples: ol, değil, dur, i, y, mi, bulun.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB--NOUN-Abl (1)</li>
      <li>VERB--NOUN-Acc (64)</li>
      <li>VERB--NOUN-Dat (7)</li>
      <li>VERB--NOUN-Gen (60)</li>
      <li>VERB--NOUN-Ins (3)</li>
      <li>VERB--NOUN-Loc (2)</li>
      <li>VERB--NOUN-Nom (2004)</li>
      <li>VERB--NOUN-Nom-ADP(dahil) (1)</li>
      <li>VERB--NOUN-Nom-ADP(dâhi) (1)</li>
      <li>VERB--NOUN-Nom-ADP(ile) (4)</li>
      <li>VERB--NOUN-Nom-ADP(ile)-ADP(birlikte) (1)</li>
      <li>VERB--NOUN-Nom-ADP(lar) (1)</li>
      <li>VERB--PRON-Acc (2)</li>
      <li>VERB--PRON-Gen (19)</li>
      <li>VERB--PRON-Gen-ADP(kiler) (1)</li>
      <li>VERB--PRON-Ins (1)</li>
      <li>VERB--PRON-Loc-ADP(de) (1)</li>
      <li>VERB--PRON-Nom (409)</li>
      <li>VERB--PRON-Nom-ADP(kadar) (1)</li>
      <li>VERB-Conv--NOUN-Acc (7)</li>
      <li>VERB-Conv--NOUN-Gen (19)</li>
      <li>VERB-Conv--NOUN-Nom (88)</li>
      <li>VERB-Conv--PRON-Acc (1)</li>
      <li>VERB-Conv--PRON-Gen (2)</li>
      <li>VERB-Conv--PRON-Nom (17)</li>
      <li>VERB-Part--NOUN-ADP('nin) (1)</li>
      <li>VERB-Part--NOUN-Acc (45)</li>
      <li>VERB-Part--NOUN-Dat (2)</li>
      <li>VERB-Part--NOUN-Gen (447)</li>
      <li>VERB-Part--NOUN-Ins (6)</li>
      <li>VERB-Part--NOUN-Loc (1)</li>
      <li>VERB-Part--NOUN-Nom (668)</li>
      <li>VERB-Part--NOUN-Nom-ADP(ile) (3)</li>
      <li>VERB-Part--PRON-Abl (1)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Gen (53)</li>
      <li>VERB-Part--PRON-Nom (113)</li>
      <li>VERB-Vnoun--NOUN-Acc (9)</li>
      <li>VERB-Vnoun--NOUN-Dat (1)</li>
      <li>VERB-Vnoun--NOUN-Gen (216)</li>
      <li>VERB-Vnoun--NOUN-Gen-ADP(dâhi) (1)</li>
      <li>VERB-Vnoun--NOUN-Nom (106)</li>
      <li>VERB-Vnoun--PRON-Gen (12)</li>
      <li>VERB-Vnoun--PRON-Nom (13)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (4)</li>
      <li>VERB--NOUN-ADP(yi) (1)</li>
      <li>VERB--NOUN-Abl (16)</li>
      <li>VERB--NOUN-Acc (1837)</li>
      <li>VERB--NOUN-Acc-ADP(filan) (1)</li>
      <li>VERB--NOUN-Acc-ADP(gibi) (1)</li>
      <li>VERB--NOUN-Acc-ADP(ile) (1)</li>
      <li>VERB--NOUN-Dat (129)</li>
      <li>VERB--NOUN-Gen (2)</li>
      <li>VERB--NOUN-Ins (19)</li>
      <li>VERB--NOUN-Loc (10)</li>
      <li>VERB--NOUN-Nom (300)</li>
      <li>VERB--NOUN-Nom-ADP(li) (1)</li>
      <li>VERB--PRON-Abl (1)</li>
      <li>VERB--PRON-Acc (344)</li>
      <li>VERB--PRON-Dat (17)</li>
      <li>VERB--PRON-Gen (1)</li>
      <li>VERB--PRON-Ins (4)</li>
      <li>VERB--PRON-Loc (1)</li>
      <li>VERB--PRON-Nom (20)</li>
      <li>VERB-Conv--NOUN (1)</li>
      <li>VERB-Conv--NOUN-Abl (6)</li>
      <li>VERB-Conv--NOUN-Acc (287)</li>
      <li>VERB-Conv--NOUN-Dat (15)</li>
      <li>VERB-Conv--NOUN-Ins (4)</li>
      <li>VERB-Conv--NOUN-Nom (54)</li>
      <li>VERB-Conv--NOUN-Nom-ADP(ile) (1)</li>
      <li>VERB-Conv--PRON-Acc (25)</li>
      <li>VERB-Part--NOUN (3)</li>
      <li>VERB-Part--NOUN-ADP(ı) (1)</li>
      <li>VERB-Part--NOUN-Abl (11)</li>
      <li>VERB-Part--NOUN-Acc (1169)</li>
      <li>VERB-Part--NOUN-Acc-ADP(dil) (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(diye) (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(diye)-ADP(diye)-ADP(diye)-ADP(diye)-ADP(diye) (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(ile) (4)</li>
      <li>VERB-Part--NOUN-Acc-ADP(Ü) (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(İ) (1)</li>
      <li>VERB-Part--NOUN-Dat (57)</li>
      <li>VERB-Part--NOUN-Gen (3)</li>
      <li>VERB-Part--NOUN-Ins (15)</li>
      <li>VERB-Part--NOUN-Loc (2)</li>
      <li>VERB-Part--NOUN-Nom (185)</li>
      <li>VERB-Part--NOUN-Nom-ADP(e) (1)</li>
      <li>VERB-Part--PRON-Abl (2)</li>
      <li>VERB-Part--PRON-Acc (187)</li>
      <li>VERB-Part--PRON-Dat (9)</li>
      <li>VERB-Part--PRON-Gen (1)</li>
      <li>VERB-Part--PRON-Ins (1)</li>
      <li>VERB-Part--PRON-Nom (6)</li>
      <li>VERB-Vnoun--NOUN (2)</li>
      <li>VERB-Vnoun--NOUN-Abl (5)</li>
      <li>VERB-Vnoun--NOUN-Acc (510)</li>
      <li>VERB-Vnoun--NOUN-Acc-ADP(ile) (1)</li>
      <li>VERB-Vnoun--NOUN-Acc-ADP(ni) (1)</li>
      <li>VERB-Vnoun--NOUN-Dat (23)</li>
      <li>VERB-Vnoun--NOUN-Gen (3)</li>
      <li>VERB-Vnoun--NOUN-Ins (4)</li>
      <li>VERB-Vnoun--NOUN-Loc (2)</li>
      <li>VERB-Vnoun--NOUN-Nom (87)</li>
      <li>VERB-Vnoun--NOUN-Nom-ADP(gibi) (1)</li>
      <li>VERB-Vnoun--PRON-Acc (54)</li>
      <li>VERB-Vnoun--PRON-Dat (2)</li>
      <li>VERB-Vnoun--PRON-Ins (2)</li>
      <li>VERB-Vnoun--PRON-Nom (2)</li>
      <li>VERB-Vnoun--PRON-Nom-ADP(lik) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Dat (78)</li>
      <li>VERB--NOUN-Ins (1)</li>
      <li>VERB--NOUN-Nom (2)</li>
      <li>VERB--PRON-Dat (22)</li>
      <li>VERB-Conv--NOUN-Dat (9)</li>
      <li>VERB-Conv--NOUN-Ins (1)</li>
      <li>VERB-Conv--NOUN-Nom (1)</li>
      <li>VERB-Conv--PRON-Dat (2)</li>
      <li>VERB-Part--NOUN-Abl (1)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Dat (41)</li>
      <li>VERB-Part--NOUN-Ins (2)</li>
      <li>VERB-Part--NOUN-Nom (2)</li>
      <li>VERB-Part--PRON-Dat (10)</li>
      <li>VERB-Vnoun--NOUN-Acc (1)</li>
      <li>VERB-Vnoun--NOUN-Dat (17)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 74 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: hisset kendimi, at kendini, ada kendini, hisset kendinizi, sev kendini, çek kendini, özgü kendine, ait kendinize, al kendimi, aldat kendisini, alıkoy kendini, anlat kendimi, anlat kendinizi, aş kendimizi, bak kendinize, benze kendine, bul kendimi, bul kendisini, bırak kendini, dinle kendimizi, dinle kendisini, doğrula kendini, edebiyatçı kendimi, ez kendini, feda kendisini, geliş kendini, gönder kendine, gönder kendisine, gör kendini, göster kendini, haberdar kendinizi, hayal kendilerini, hisset kendilerini, hiçle kendini, ifade kendini, ifade kendisini, ilan kendini, ilân kendisini, inan kendilerini, ispat kendilerini, ispatla kendini, izin kendisinden, içeri kendilerini, kabullen kendimi, kanıtladım kendimi, kap kendini, kazan kendini, konuş kendimle, koyver kendilerini, kurban kendisini</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 12 relation subtypes: <a>advmod:emph</a>, <a>aux:q</a>, <a>cc:preconj</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>csubj:outer</a>, <a>dep:der</a>, <a>discourse:q</a>, <a>nmod:part</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>obl:tmod</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>expl</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
