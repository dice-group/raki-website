import { Link } from 'gatsby';
import React from 'react';
import Social from '../social';
import KG from '../svgs/knowgraphs.inline.svg';

const links = [
  { url: '/team/', text: 'Team' },
  { url: '/publications/', text: 'Publikationen' },
  { url: '/news/', text: 'Neuigkeiten' },
  { url: '/partners/', text: 'Partner' },
  { url: '/contact/', text: 'Kontakt' },
  { url: '/imprint', text: 'Impressum' },
  { url: '/privacy', text: 'Datenschutzerklärung' },
];

const Footer = () => (
  <div className="footer">
    <div className="columns" style={{ flex: 1 }}>
      <div className="column is-flex">
        <KG className="dice-nav-logo-footer" />
      </div>
      <div className="column dice-footer">
        {links.map(l => (
          <Link key={l.url} to={l.url}>
            {l.text}
          </Link>
        ))}
      </div>
      <Social hiddenMobile={false} />
    </div>

    <div className="horizontal-separator" />

    <div className="is-flex horizontally-centered funding-text">
      Dieses Projekt wurde durch das Bundesministerium für Wirtschaft und
      Energie (BMWi) finanziert mit der Projektnummer: 32100687 und dem
      Förderkennzeichen: 01MD19012D.
    </div>
    <div className="is-flex horizontally-centered funding-text">
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASwBLAAD
        /4QBARXhpZgAASUkqAAgAAAABAGmHBAABAAAAGgAAAAAAAAACA
        AKgCQABAAAA8gAAAAOgCQABAAAAyAAAAAAAAAD/2wBDAAgGBgc
        GBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsI
        xwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRg
        yIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyM
        jIyMjIyMjIyMjIyMjIyMjL/wAARCADIAPIDASIAAhEBAxEB/8Q
        AHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAA
        gEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaE
        II0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFR
        kdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipK
        TlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1
        NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQE
        BAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFB
        AQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvA
        VYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVV
        ldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJm
        aoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4
        uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+gkAZPS
        iuL8Tgap430DQLsk6ZNBc3U0OcC4aPYFVvUDcWx3wM0AdkkqSj
        Mbq49VOacSACScAd68+vtW8N+Cr3X7nTdNkivbWyiknt4ofLhc
        biIyCBjJLEZHp7Vm+IvEWt33g3xPbyLGFgtomS8W0lgVxISHjC
        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
        KznPrmsPQte0bQvCF1rtuus3U9vZRSXKXT3GHJxnZ5vy5yT92u
        sl0GeTwI2gCaMTnT/snmc7d2zbn1xWLceHPEupeDLrw9fy6SiN
        apBDLAZCcqV5bI6YHagCd/HZs7fWDqeky2t1pqwMYBMr+aJjtj
        ww4B3DB9Khm+IRtrO6MujyNf217DZtaw3COGaUAoVfgEc+3ene
        IPBE+tXGvyC5gUajDZrCsilgrwOz/ADjupyB+dRDwXqE9ookOm
        Wbf2nb3i29pDtjjSPqu4KCzHk5I4zigB+peP59Na+LaFLJFpxg
        S9dLlf3Uku0hQMfMBuXJ96kuPFdvpN5roSC5nuI9Rt7RIpJwEe
        SSJGAUnhFwcn3BPeuS8bLPHqfiLTLG5XzNTuLKU2slu3mSsDGP
        3TA4ZcJlifu4NdNq/ga41GfVrlZbSR7nU7fUIIp1JQ+VEkZSTj
        odrdM9RQB0PhzXl1+0uJDbm3ntbh7eeLzA4V19GHBBBBzWzWL4
        Z0m50nTpY7sWaSyztL5VnEEjiU9FGAC2AOpGTW1QAUUUUAFFFF
        ABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAV5d8aRnTtJx
        /z1k/kK9RrE8RgGKDIz8xrz80rewwk6lr2t+aPQyrE/VsZCta9
        r6fJkPgT/kR9I/64D+ZroaqaX/yDLf/AHat11YafPRhLul+RzY
        mp7StOfdt/ewooorYwCiiigAooooAKKKKACiiigAooooAKKKKA
        CiiigAooooAKKKKACiiigAooooAKKKKACiiigArF8Rf6qD/AHj
        W1WL4i/1UH+8a8nPf+RfU+X5o2w/8VF/S/wDkGQf7tW6qaX/yD
        IP92rdduC/3an/hX5EVPjYUUUV0kBRRRQAUUUUAFFFFABRRRQA
        UUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVQ
        1Swe/SNUdV2Enmr9FY4jD08RSdKotGVGTi+ZENpCbe0jhYglBj
        IqaiirpwVOChHZaCbu7sKKKKsQUUUUAFFFFABRRRQAUUUUAFFF
        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
        HvU/hnQrnw/ptxaS3sV0ZLmW4V1gMe0yMXII3HPJ9qAPMbbVpL
        a1U22o6smrDXHtklnllNr5ImwVdn/d/cyBj5s4713l942ex03x
        JdNpbM2hSBZIxOP3qlFfcDjjhhxVGL4fX76VLo99r0cumT3jXc
        8UNl5byEyeZt3l2wNwHQZx3qbXfAt/qkmvx2mtx2llraKLmJ7P
        zHVggTKtvHBAHBFAFy/8AFWpw69c6Tp+g/bJYbVLoObxYwyMSM
        cg4OQf/AK1NTxkurWmlx6VpzXdzqdoboQyTCIRRDAJdsHucDAN
        WYfDuoReIp9XbU7dmlsFs/L+yEAFSTvzv9SePTv3rJ07wJqWjx
        aQ+n65Cl5p9q9m8klkWSaEtuAK78hge4P4UAZnhfxaNE8F6Lb3
        Co9/ez3ixpc3YRFEcz7t0jA8DgDg5yK1IfiMl7b6S1hphmm1CG
        WVYZLlY8+W+xlQ4Ids5OOMgZ70y3+Ht5Z2eleRrMLX2mTXDxTS
        2W5HSZizo6b+eehBHSrWu+DL/AF+yis7vVrXyPLAkAscFHDlhJ
        EQ/7tsHHfoDQA608Say3iLxJbPpfn2mnMgjEUo8w5iDgBcclif
        XjNNbx59ltNaa/wBMMNzpawM8MVwJBIJjtTDYGDuBBz0p+o+Dr
        68u9fNvrX2a21mJVkVbcmSJ1jEYZX3DjgEjH41zOr+DL7QNA1u
        WK4gmTU7e3tJ4bHTdghVWKmRVDMWAV2JGCTjqKAN+fx9Lp0mrp
        q2krbHTVg3GO7EgkeY4jUEqMc9Sen0qMfEmAWl2z2kAuLa7htW
        KXga3zIu5WMwXAHY8cHisbRvDN1rGn6poouk/ssiGe21BNM+ys
        LlX3fcY/OBtXJPriurn8Pa1daZ9mn1TTmZpAZIxpv7iVNpBVk3
        5PJBznqBQBvabdTXmnQXFxam1mkXLQlw2w/UdfrVqsvw5oy+Hv
        D9npSztOtshUSMMZ5J4GTgDOAM8ACtSgAooooAKKKKACiiigAo
        oooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooo
        oAKKKKACiiigAooooAKKKKACiiigAooooA//9k="
      />
    </div>
  </div>
);

export default Footer;
