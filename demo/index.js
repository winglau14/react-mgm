import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Flex,
    Textarea,
    NProgress,
    Toast,
    Loading,
    Page,
    Infinite,
    Header,
    Slider,
    Popup,
    SearchBar,
    Square,
    LazyImg,
    Dialog
} from './../src/index';

import '../node_modules/gm-mfont/iconfont.css';
import './index.less';

const App = React.createClass({
    render(){
        const action = this.props.location.action;
        let transitionName = 'page';
        // REPLEASE
        if (action === 'PUSH') {
            transitionName = 'page-r2l';
        } else if (action === 'POP') {
            transitionName = 'page-l2r';
        }
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName={transitionName}
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}
            >
                {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname
                })}
            </ReactCSSTransitionGroup>
        );
    }
});

const Home = React.createClass({
    getInitialState(){
        return {
            left: false
        };
    },
    render(){
        return (
            <Page header={<Header title="React MGM" history={hashHistory}></Header>} tabbar={this.renderTabbar()}>
                <h2>React MGM</h2>
                <div className="weui_cells_title">CSS</div>
                <div className="weui_cells weui_cells_access">
                    <a href="http://weui.github.io/weui/#/" target="_blank" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">WEUI</div>
                        <div className="weui_cell_ft"></div>
                    </a>
                    <a href="http://gmfe.github.io/gm-mfont/demo.html" target="_blank" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">icon</div>
                        <div className="weui_cell_ft"></div>
                    </a>
                    <Link to="/theme" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">theme</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/gap" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">gap</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/tabs" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">tabs</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                </div>
                <div className="weui_cells_title">Component</div>
                <div className="weui_cells weui_cells_access">
                    <Link to="/flex" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">flex</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/textarea" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">textarea</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/toast" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">toast</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/loading" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">loading</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/nprogress" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">nprogress</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/infinite" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">infinite</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/page" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">page</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/slider" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">slider</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/popup" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">popup</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/searchbar" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">search bar</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/square" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">square</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/lazyimg" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">lazy img(todo)</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                    <Link to="/dialog" className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">dialog</div>
                        <div className="weui_cell_ft"></div>
                    </Link>
                </div>
            </Page>
        );
    },
    renderTabbar(){
        return (
            <div className="weui_tabbar">
                <a href="javascript:;" className="weui_tabbar_item weui_bar_item_on">
                    <div className="weui_tabbar_icon">
                        <img src="https://bshop.guanmai.cn/static/app/img/nav11.png" alt=""/>
                    </div>
                    <p className="weui_tabbar_label">全部菜品</p>
                </a>
                <a href="javascript:;" className="weui_tabbar_item">
                    <div className="weui_tabbar_icon">
                        <img src="https://bshop.guanmai.cn/static/app/img/nav2.png" alt=""/>
                    </div>
                    <p className="weui_tabbar_label">购物车</p>
                </a>
                <a href="javascript:;" className="weui_tabbar_item">
                    <div className="weui_tabbar_icon">
                        <img src="https://bshop.guanmai.cn/static/app/img/nav3.png" alt=""/>
                    </div>
                    <p className="weui_tabbar_label">我的订单</p>
                </a>
                <a href="javascript:;" className="weui_tabbar_item">
                    <div className="weui_tabbar_icon">
                        <img src="https://bshop.guanmai.cn/static/app/img/nav4.png" alt=""/>
                    </div>
                    <p className="weui_tabbar_label">我的</p>
                </a>
            </div>
        );
    }
});

const ThemeWrap = React.createClass({
    render(){
        return (
            <Page white>
                <div className="color">
                    <h3>色系</h3>
                    <div>
                        <span className="strip default"></span>默认字体色
                    </div>
                    <div>
                        <span className="strip primary"></span>主色
                    </div>
                    <div>
                        <span className="strip warn"></span>危险色
                    </div>
                    <div>
                        <span className="strip desc"></span>辅助色
                    </div>
                    <div>
                        <span className="strip border"></span>边框色
                    </div>
                </div>
                <div className="bg">
                    <h3>背景</h3>
                    两种:1 白色背景色
                    <div className="default">2 默认背景色</div>
                </div>
                <div>
                    <h3>按钮(正常和不可点状态)</h3>
                    <div>
                        <button className="weui_btn weui_btn_primary active">primary</button>
                        <button className="weui_btn weui_btn_primary weui_btn_disabled" disabled>warn</button>
                    </div>
                    <div>
                        <button className="weui_btn weui_btn_warn">warn</button>
                        <button className="weui_btn weui_btn_warn weui_btn_disabled" disabled>warn</button>
                    </div>
                    <div>
                        <button className="weui_btn weui_btn_default">default</button>
                        <button className="weui_btn weui_btn_default weui_btn_disabled" disabled>default</button>
                    </div>
                    <div>
                        <button className="weui_btn weui_btn_plain_primary">plain primary</button>
                        <button className="weui_btn weui_btn_plain_default">plain default</button>
                    </div>

                </div>
                <div>
                    <h3>input placeholder</h3>
                    <input type="text" className="weui_input" placeholder="请输入xxxxx"/>
                </div>
            </Page>
        );
    }
});

const FlexWrap = React.createClass({
    render(){
        return (
            <Page white>
                <h2>flex
                    <small><i>具体见代码容易理解</i></small>
                </h2>
                <hr/>
                <div className="padding-15">
                    横向 默认 Flex
                    <Flex>
                        <Flex className="border">
                            1
                        </Flex>
                        <Flex flex className="border">Flex flex 会占满</Flex>
                    </Flex>
                    纵向 Flex column
                    <Flex column>
                        <Flex className="border">1</Flex>
                        <Flex className="border">2</Flex>
                    </Flex>
                </div>
                <div className="padding-15">
                    不换行 默认 宽度会被压缩 FLex
                    <Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                    </Flex>
                    换行 FLex wrap
                    <Flex wrap>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                    </Flex>
                </div>
                <div className="padding-15">
                    Flex width height 如果定了width/height则不能被压缩
                    <Flex>
                        <Flex className="border" width={100}>100</Flex>
                        <Flex className="border" width={100}>100</Flex>
                        <Flex className="border" width={100}>100</Flex>
                        <Flex className="border" width={100}>100</Flex>
                    </Flex>
                </div>
                <div className="padding-15">
                    主轴对齐方式 默认 Flex
                    <Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                    </Flex>
                    主轴对齐方式 Flex justifyCenter
                    <Flex justifyCenter>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                    </Flex>
                    主轴对齐方式 Flex justifyEnd
                    <Flex justifyEnd>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                    </Flex>
                    主轴对齐方式 Flex justifyBetween
                    <Flex justifyBetween>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                    </Flex>
                    主轴对齐方式 Flex justifyAround
                    <Flex justifyAround>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                        <Flex className="border" style={{width: 100}}>100</Flex>
                    </Flex>
                </div>
                <div className="padding-15">
                    交叉轴对齐 默认 Flex
                    <Flex>
                        <Flex className="border" style={{width: 50}}>50 50</Flex>
                        <Flex className="border" style={{width: 50, height: 100}}>50 100</Flex>
                    </Flex>
                    交叉轴对齐 Flex alignEnd
                    <Flex alignEnd>
                        <Flex className="border" style={{width: 50}}>1<br/>2</Flex>
                        <Flex className="border" style={{width: 50}}>1<br/>2<br/>3</Flex>
                    </Flex>
                    交叉轴对齐 Flex alignCenter
                    <Flex alignCenter>
                        <Flex className="border" style={{width: 50}}>1<br/>2</Flex>
                        <Flex className="border" style={{width: 50}}>1<br/>2<br/>3</Flex>
                    </Flex>
                    交叉轴对齐 Flex alignStretch
                    <Flex alignStretch>
                        <Flex className="border" style={{width: 50}}>1<br/>2</Flex>
                        <Flex className="border" style={{width: 50}}>1<br/>2<br/>3</Flex>
                    </Flex>
                    交叉轴对齐 Flex alignBaseline
                    <Flex alignBaseline>
                        <Flex className="border" style={{width: 50}}>1<br/>2</Flex>
                        <Flex className="border padding-top-10" style={{width: 50}}>1<br/>2<br/>3</Flex>
                    </Flex>
                </div>
            </Page>
        );
    }
});

const GapWrap = React.createClass({
    render(){
        return (
            <Page white>
                <h2>gap</h2>
                <hr/>
                <div>gap 即间距的，用来快速布局</div>
                <div>有4种尺寸，分别是0 5 10 15</div>
                <div>有以下形式：</div>
                <div className="border padding-10">
                    padding-10
                </div>
                <div className="border padding-top-10">
                    padding-top-10
                </div>
                <div className="border padding-bottom-10">
                    padding-bottom-10
                </div>
                <div className="border padding-lr-10">
                    padding-lr-10 lr表示左右
                </div>
                <div className="border padding-tb-10">
                    padding-tb-10
                </div>
                <div>
                    margin-x margin-top-x margin-bottom-x margin-lr-x margin-bt-x 同理
                </div>
            </Page>
        );
    }
});

const TextareaWrap = React.createClass({
    getInitialState(){
        return {
            value: 'a\na\na\na'
        };
    },
    render(){
        return (
            <Page>
                <h2>textarea</h2>
                <hr/>
                原生textarea不能随内容变高。
                <Textarea value={this.state.value} onChange={this.handleChange}></Textarea>
                固定高度
                <Textarea value={this.state.value} onChange={this.handleChange}
                          wrapProps={{style:{maxHeight: '10em'}}}></Textarea>
            </Page>
        );
    },
    handleChange(event){
        this.setState({
            value: event.target.value
        });
    }
});

const ToastWrap = React.createClass({
    render(){
        return (
            <Page white>
                <h2>toast</h2>
                <button className="weui_btn weui_btn_primary weui_btn_mini" onClick={this.handleToast}>Toast</button>
            </Page>
        );
    },
    handleToast(){
        Toast.tip('tip');
        Toast.success({
            children: (
                <div>
                    <div>a</div>
                    <div>b</div>
                </div>
            )
        });
        Toast.info('我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们');
        Toast.warning('warning');
        Toast.danger('danger');
        Toast.loading('loading');
    }
});

const LoadingWrap = React.createClass({
    render(){
        return (
            <Page white>
                <h2>loading</h2>
                <Loading></Loading>
            </Page>
        );
    }
});


const NProgressWrap = React.createClass({
    render(){
        return (
            <Page white>
                <h2>nprogress</h2>
                <button className="weui_btn weui_btn_default weui_btn_mini" onClick={this.handleStart}>start</button>
                <button className="weui_btn weui_btn_default weui_btn_mini" onClick={this.handleDone}>done</button>
            </Page>
        );
    },
    handleStart(){
        NProgress.start();
    },
    handleDone(){
        NProgress.done();
    }
});

const InfiniteWrap = React.createClass({
    render(){
        return (
            <Page white>
                <Infinite onBottom={this.handleBottom}>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                    <div>aaaaa</div>
                </Infinite>
            </Page>
        );
    },
    handleBottom(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    }
});

const PageWrap = React.createClass({
    getInitialState(){
        return {
            show: false
        };
    },
    render(){
        return (
            <Page white>
                <h2>page</h2>
                <hr/>
                <div>
                    everyway 每个页面都是Page
                </div>

                <button className="weui_btn weui_btn_primary" onClick={this.handleOtherPage}>showOtherPage</button>
                {this.state.show && (
                    <Page className="enter">
                        adf
                        <button className="weui_btn weui_btn_primary" onClick={this.handleClose}>close</button>
                    </Page>
                )}
            </Page>
        );
    },
    handleOtherPage(){
        this.setState({
            show: !this.state.show
        });
    },
    handleClose(){
        this.setState({
            show: !this.state.show
        });
    }
});

var SliderWrap = React.createClass({
    render: function () {
        const style = {
            background: '#71B5DE',
            height: '5em',
            lineHeight: '5em',
            textAlign: 'center',
            display: 'block',
            color: 'white'
        };
        return (
            <div>
                <Slider>
                    <div className="border" style={style}>1</div>
                    <div style={style}>2</div>
                </Slider>

                <Slider>
                    <div className="border" style={style}>1</div>
                </Slider>
            </div>
        );
    }
});

var TabsWrap = React.createClass({
    render(){
        return (
            <div>
                <div className="tabs">
                    <div className="tabs-item">
                        <div className="tabs-item-text">选项一</div>
                    </div>
                    <div className="tabs-item active">
                        <div className="tabs-item-text">选项二</div>
                    </div>
                    <div className="tabs-item">
                        <div className="tabs-item-text">选项三</div>
                    </div>
                </div>
            </div>
        );
    }
});

var PopupWrap = React.createClass({
    getInitialState(){
        return {
            show: false,
            show2: false
        };
    },
    render(){
        return (
            <Page>
                <button className="weui_btn weui_btn_primary" onClick={this.handleShow}>open popup left</button>
                <button className="weui_btn weui_btn_primary" onClick={this.handleShow2}>open popup bottom</button>
                <Popup left show={this.state.show} onChange={this.handleChange}>
                    asdfa
                </Popup>

                <Popup bottom height="350px" show={this.state.show2} onChange={this.handleChange2}>
                    height 350px
                </Popup>

                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
                <div>asdf</div>
            </Page>
        );
    },
    handleShow(){
        this.setState({
            show: !this.state.show
        });
    },
    handleShow2(){
        this.setState({
            show2: !this.state.show2
        });
    },
    handleChange(show){
        this.setState({
            show
        });
    },
    handleChange2(show2){
        this.setState({
            show2
        });
    }
});

var SearchBarWrap = React.createClass({
    getInitialState(){
        return {
            defaultFocus: false,
            value: ''
        };
    },
    render(){
        return (
            <Page>
                <SearchBar placeholder="搜索商品" value={this.state.value} onChange={this.handleChange}
                           onOK={this.handleOK}
                           onCancel={this.handleCancel}
                ></SearchBar>
            </Page>
        );
    },
    handleChange(value){
        this.setState({
            value
        });
    },
    handleOK(){
        console.log('ok');
    },
    handleCancel(){
        console.log('cancel');
    }
});


var SquareWrap = React.createClass({
    render(){
        return (
            <Page>
                <div style={{width: '50%'}}>
                    <Square className="bg-white">
                        <img src="" style={{width: '100%', height: '100%'}} alt=""/>
                    </Square>
                </div>
            </Page>
        );
    }
});


var LazyImgWrap = React.createClass({
    render(){
        return (
            <Page>
                <LazyImg
                    src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"></LazyImg>
                <LazyImg
                    src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"></LazyImg>
                <LazyImg
                    src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"></LazyImg>
                <LazyImg
                    src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"></LazyImg>
                <LazyImg
                    src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"></LazyImg>
                <LazyImg
                    src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"></LazyImg>
            </Page>
        );
    }
});

var DialogWrap = React.createClass({
    getInitialState(){
        return {
            confirmShow: false,
            alertShow: false
        };
    },

    handleCancel(){
        this.setState({
            confirmShow: false
        });
    },

    handleConfirm(){
        this.setState({
            confirmShow: false,
            alertShow: false
        });
    },

    handleAlertShow(){
        this.setState({
            alertShow: true
        });
    },

    handleConfirmShow(){
        this.setState({
            confirmShow: true
        });
    },

    render(){
        return (
            <page>
                <button className="weui_btn weui_btn_primary" onClick={this.handleAlertShow}>Alert Dialog</button>
                <button className="weui_btn weui_btn_primary" onClick={this.handleConfirmShow}>Confirm Dialog</button>

                <Dialog
                    confirm
                    show={this.state.confirmShow}
                    title="Alert Dialog"
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                >
                    这是confirm内容
                </Dialog>

                <Dialog
                    alert
                    show={this.state.alertShow}
                    title="Alert Dialog"
                    onConfirm={this.handleConfirm}
                >
                    这是alert
                </Dialog>
            </page>
        );
    }
});

const Root = React.createClass({
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="theme" component={ThemeWrap}></Route>
                    <Route path="gap" component={GapWrap}></Route>
                    <Route path="flex" component={FlexWrap}></Route>
                    <Route path="textarea" component={TextareaWrap}></Route>
                    <Route path="toast" component={ToastWrap}></Route>
                    <Route path="loading" component={LoadingWrap}></Route>
                    <Route path="nprogress" component={NProgressWrap}></Route>
                    <Route path="infinite" component={InfiniteWrap}></Route>
                    <Route path="page" component={PageWrap}></Route>
                    <Route path="slider" component={SliderWrap}></Route>
                    <Route path="tabs" component={TabsWrap}></Route>
                    <Route path="popup" component={PopupWrap}></Route>
                    <Route path="searchbar" component={SearchBarWrap}></Route>
                    <Route path="square" component={SquareWrap}></Route>
                    <Route path="lazyimg" component={LazyImgWrap}></Route>
                    <Route path="dialog" component={DialogWrap}></Route>
                </Route>
            </Router>
        );
    }
});

ReactDOM.render(
    <Root></Root>
    , document.getElementById('appContainer'));