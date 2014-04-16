---
layout: base
title:  'Live SD annotation manual - test'
---

# Annotation manual with simple markup and embedded visualizations

The purpose of this site is to test/demo a live dependency annotation
manual and example bank, built using a combination of GitHub pages and
embedded brat visualizations. As a minimal example, here's what the
embedded visualizations look like. Try clicking on the small "edit"
tab on the top right.

<div class="sd-parse">
really/RB simple/JJ stuff/NN
advmod(simple, really)
amod(stuff, simple)
</div>

The dependency scheme in the visualizations is that of
[Stanford Dependencies](http://nlp.stanford.edu/software/stanford-dependencies.shtml):

    really/RB simple/JJ stuff/NN
    advmod(simple, really)
    amod(stuff, simple)

# Documentation examples

* [English relations](en.html)

# How to contribute

[This page](embedsd.html) shows how the examples are created. The
manual consists of markdown pages in [this GitHub
project](https://github.com/fginter/sdmanualtest), where you can see
the full sources. For example, `index.md`, the source for this page is
[here](https://raw.githubusercontent.com/fginter/sdmanualtest/gh-pages/index.md). The
rest is taken care of by GitHub. Project members can contribute by
directly editing the sources, others are more than welcome to submit
their additions as pull requests.


## More information:

The following sources of documentation provide further details:

- [Markdown](http://daringfireball.net/projects/markdown/syntax)
- [Github pages](https://pages.github.com/)
- [Embedded brat](http://brat.nlplab.org/embed.html)
- [Stanford Dependencies](http://nlp.stanford.edu/software/stanford-dependencies.shtml)