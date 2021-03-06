import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn
} from 'global/jsx/sidebar_component';

import { Link } from 'react-router';
import LoremIpsum from 'global/jsx/loremipsum';

class ApplicationSidebar extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'>PAGES</div>
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}}>
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Population Rate' href='/app/dashboard' />
                    <SidebarNavItem glyph='icon-fontello-gauge' name='State Population' href='/app/statepopulationdashboard' />
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Population (NSSO)' href='/app/populationdashboard' />
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Population(NCP)' href='/app/populationdashboard1' />
                  <SidebarNavItem glyph='icon-fontello-gauge' name='TotalPopulation' href='/app/totalpopulationdashboard' />
                  <SidebarNavItem glyph='icon-fontello-gauge' name='PopulationTrend' href='/app/totalpopulationdashboard1' />
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Total Population(RGI)' href='/app/totalpopulationdashboard2' />
                  <SidebarNavItem glyph='icon-fontello-gauge' name='PopulationTrend(RGI)' href='/app/totalpopulationdashboard3' />
                  <SidebarNavItem glyph='icon-feather-mail' name={<span>Mailbox <BLabel className='bg-darkgreen45 fg-white'>3</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-inbox' name='Inbox' href='/app/mailbox/inbox' />
                      <SidebarNavItem glyph='icon-outlined-mail-open' name='Mail' href='/app/mailbox/mail' />
                      <SidebarNavItem glyph='icon-dripicons-message' name='Compose' href='/app/mailbox/compose'/>
                    </SidebarNav>
                  </SidebarNavItem>
	          <SidebarNavItem href='/app/calendar' glyph='icon-fontello-calendar-alt' name='Calendar' />
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class DummySidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>DUMMY SIDEBAR</div>
            <LoremIpsum query='1p' />
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default class extends React.Component {
  render() {
    return (
      <div id='sidebar' {...this.props}>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src='/imgs/avatars/avatar0.png' width='40' height='40' />
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>Venkat Chitturi</div>
                <div>
                  <Progress id='demo-progress' value={30} min={0} max={100} color='#ffffff'/>
                  <Link to='/app/lock'><Icon id='demo-icon' bundle='fontello' glyph='lock-5' /></Link>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <SidebarControls>
          <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0} />
          <SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1} />
          <SidebarControlBtn bundle='fontello' glyph='chart-pie-2' sidebar={2} />
          <SidebarControlBtn bundle='fontello' glyph='th-list-2' sidebar={3} />
          <SidebarControlBtn bundle='fontello' glyph='bell-5' sidebar={4} />
        </SidebarControls>
        <div id='sidebar-container'>
          <Sidebar sidebar={0} active>
            <ApplicationSidebar />
          </Sidebar>
          <Sidebar sidebar={1}>
            <DummySidebar />
          </Sidebar>
          <Sidebar sidebar={2}>
            <DummySidebar />
          </Sidebar>
          <Sidebar sidebar={3}>
            <DummySidebar />
          </Sidebar>
          <Sidebar sidebar={4}>
            <DummySidebar />
          </Sidebar>
        </div>
      </div>
    );
  }
}
